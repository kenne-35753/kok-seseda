<?php

namespace App\Http\Controllers;

use App\Model\SiteLabelModel;
use App\Model\VideoLabelModel;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    const CACHE_TIMEOUT_VIDEO = 86400;
    const CACHE_TIMEOUT_ADVERTISING = 604800;
    const CACHE_TIMEOUT_OTHER = 8640000;

    private function getSignedUrlPath(string $filePath, string $secureToken, ?int $expiryTimestamp = NULL): string
    {
        // because of hls/dash, anything included after the last slash (e.g. playlist/{chunk}) shouldn't be part of the path string,
        // for which we generate the secure token. Because of that, everything included after the last slash is stripped.
        $strippedPath = substr($filePath, 0, strrpos($filePath, '/'));

        // replace invalid URL query string characters +, =, / with valid characters -, _, ~
        $invalidChars = ['+', '/'];
        $validChars   = ['-', '_'];

        if ($strippedPath && $strippedPath[0] != '/') {
            $strippedPath = '/' . $strippedPath;
        }

        if ($pos = strpos($strippedPath, '?')) {
            $filePath = substr($strippedPath, 0, $pos);
        }

        $hashStr = $strippedPath . $secureToken;

        if ($expiryTimestamp) {
            $hashStr         = $expiryTimestamp . $hashStr;
            $expiryTimestamp = ',' . $expiryTimestamp;
        }

        // the URL is however, intensionaly returned with the previously stripped parts (eg. playlist/{chunk}..)
        return '/' . str_replace($invalidChars, $validChars, base64_encode(md5($hashStr, TRUE))) . $expiryTimestamp . $filePath;
    }

    public function resultsData(Collection $data, array &$results)
    {
        $time = strtotime('+1 day');

        foreach ($data as $item) {
            $label = [];

            foreach ($item->video_label as $value) {
                $label[] = $value['name'];
            }

            $results[] = [
                'id'       => $item['id'],
                'timelong' => $item['time_long'],
                'visit'    => round($item['visit'] / 1000, 2) . ' k',
                'title'    => $item['title'],
               // 'server'   => 'https://1513462497.rsc.cdn77.org',
               // 'server'   => 'https://video.waytc1.com',
				'server'   => $item['domain'],
               // 'img'      => $this->getSignedUrlPath($item['image'], 'wb8zebpklhw9j83d', $time),
               // 'video'    => $this->getSignedUrlPath($item['video'], 'wb8zebpklhw9j83d', $time),
                'img'      => $item['image'],
                'video'    => $item['video'],
                'tags'     => implode('、', $label)
            ];
        }
    }

    public function getSiteLabel(int $site_id)
    {
        $labelKey = 'site_label_' . $site_id;

        if (cache::store('site' . $site_id)->tags('other')->has($labelKey)) {
            return cache::store('site' . $site_id)->tags('other')->get($labelKey);
        }

        $result = SiteLabelModel::getLabels($site_id)->toArray();

        if ($result) {
            cache::store('site' . $site_id)->tags('other')->put($labelKey, $result, self::CACHE_TIMEOUT_OTHER);

            return $result;
        }

        return [];
    }

    public function getVideoLabel(int $site_id, int $video_id)
    {
        $labelKey = "video_label_{$site_id}_{$video_id}";

        if (cache::store('site' . $site_id)->tags('other')->has($labelKey)) {
            return cache::store('site' . $site_id)->tags('other')->get($labelKey);
        }

        $result = VideoLabelModel::label($video_id)->toArray();

        if ($result) {
            cache::store('site' . $site_id)->tags('other')->put($labelKey, $result, self::CACHE_TIMEOUT_OTHER);

            return $result;
        }

        return [];
    }
}

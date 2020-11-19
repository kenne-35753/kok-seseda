<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    // const DOMAIN = 'https://1513462497.rsc.cdn77.org';
    const DOMAIN = 'http://localhost.com';
    const SECURE_TOKEN = 'wb8zebpklhw9j83d';



    public function getSignedUrlPath(string $filePath, string $secureToken, ?int $expiryTimestamp = NULL): string
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
}

<?php

namespace App\Http\Controllers;

use App\Model\AdvertisingModel;
use App\Model\CategoryModel;
use App\Model\SiteCategoryModel;
use App\Model\SiteLabelModel;
use App\Model\SiteModel;
use App\Model\VideoLabelModel;
use App\Model\VideoModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ExampleController extends Controller
{
    private $cache = null;
    private $site_id = 0;

    /**
     * Create a new controller instance.
     *
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->site_id = $request->input('site_id');

        /**
         * $this->site_id  不同的站点使用不同的db库
         * 根据 视频 video 广告 advertising 其他 other 对存储数据分组
         */
        switch ($request->getPathInfo()) {
            case '/video/home':
            case '/getCates':
            case '/video':
            case '/video/search':
            case '/getLinkVideo':
            case '/video/hot':
            case '/video/recommended':
            case '/video/latest':
            case '/video/label':
                $this->cache = cache::store('site' . $this->site_id)->tags('video');
                break;
            case '/getLinks':
            case '/getTags':
            case '/site/info':
                $this->cache = cache::store('site' . $this->site_id)->tags('other');
                break;
            case '/getAdvs':
                $this->cache = cache::store('site' . $this->site_id)->tags('advertising');
                break;
            case '/update':
                $this->cache = cache::store('site' . $this->site_id)->tags('updatetime');
                break;
        }
    }

    public function home()
    {
        $key = 'home';

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = [];

        $this->resultsData(VideoModel::lists($this->site_id, [
            1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
        ][$this->site_id]), $results);

        if ($results) {
            $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
        }

        return success($results);
    }

    public function cates()
    {
        $key = 'cates';

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = [];

        foreach (SiteCategoryModel::info($this->site_id) as $item) {
            $results[] = [
                'category' => $item->category->name,
                'hot_gif'  => $item->hot_gif,
                'count'    => $item->video_count,
                'id'       => $item->category->id
            ];
        }

        if ($results) {
            $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
        }

        return success($results);
    }

    public function video(Request $request)
    {
        $data = $request->only(['category', 'page']);

        $key = 'video_' . implode('_', $data);

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = [
            'list'  => [],
            'count' => 0
        ];

        $results['count'] = VideoModel::count($this->site_id, $data['category']);

        if ($results['count']) {
            $this->resultsData(VideoModel::lists($this->site_id, [
                1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
            ][$this->site_id], $data['page'], $data['category']), $results['list']);

            $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
        }

        return success($results);
    }

    public function search(Request $request)
    {
        $data = $request->only(['keyword', 'page']);

        $key = 'search_' . implode('_', $data);

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = [
            'list'  => [],
            'count' => 0
        ];

        $results['count'] = VideoModel::count($this->site_id, 0, $data['keyword']);

        if ($results['count']) {
            $this->resultsData(VideoModel::lists($this->site_id, [
                1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
            ][$this->site_id], $data['page'], 0, $data['keyword']), $results['list']);

            $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
        }

        return success($results);
    }

    public function related(Request $request)
    {
        $data = $request->only(['id']);

        $key = 'related_' . implode('_', $data);

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = $videos = [];

        //获取站点标签
        /*$site_label = $this->getSiteLabel($this->site_id);

        if ($site_label) {
            //获取视频标签
            $video_labels = $this->getVideoLabel($this->site_id, $data['id']);

            if ($video_labels) {
                //返回可用的标签
                $label = array_intersect($site_label, $video_labels);

                //获取相同标签视频编号
                $videos = VideoLabelModel::link($label, [
                    1 => 20, 2 => 20, 3 => 20, 4 => 20, 5 => 20, 6 => 20, 7 => 20, 8 => 20, 9 => 20, 10 => 20,
                ][$this->site_id])->toArray();

                if ($videos) {
                    $videos = VideoModel::getByIds($videos);
                }
            }
        }*/

        if (!$videos) {
            //如果没有相关视频则获取随机视频
            $videos = VideoModel::lists($this->site_id, 20, 0, 0, '', 0, 1);
        }

        //获取视频信息
        $this->resultsData($videos, $results);

        if ($results) {
            $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
        }

        return success($results);
    }

    public function linkUrl()
    {
        $key = 'linkUrl';

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = [];

        foreach (SiteModel::getLink($this->site_id) as $item) {
            $results[] = [
                'name' => $item->name,
                'url'  => $item->url,
            ];
        }

        if ($results) {
            $this->cache->put($key, $results, self::CACHE_TIMEOUT_OTHER);
        }

        return success($results);
    }

    public function label()
    {
        $key = 'label';

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = [];

        foreach (SiteLabelModel::label($this->site_id) as $item) {
            $results[] = [
                'id'   => $item->label_belongs_to->id,
                'name' => $item->label_belongs_to->name,
            ];
        }

        if ($results) {
            $this->cache->put($key, $results, self::CACHE_TIMEOUT_OTHER);
        }

        return success($results);
    }

    public function cacheUpdate()
    {
        $key = 'cacheUpdate';

        if ($this->cache->has($key)) {
            return success([$this->cache->get($key)]);
        }

        $time = time();

        $this->cache->put($key, $time, self::CACHE_TIMEOUT_OTHER);

        return success([$time]);
    }

    public function advertising()
    {
        $key = 'advertising';

        if ($this->cache->has($key)) {
            return success([$this->cache->get($key)]);
        }

        if ($result = AdvertisingModel::getAll($this->site_id)->toArray()) {

            $this->cache->put($key, $result, self::CACHE_TIMEOUT_ADVERTISING);
        }

        return success($result);
    }

    public function hot(Request $request)
    {
        $data = $request->only(['page', 'all']);

        $key = 'hot_' . implode('_', $data);

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        if ($data['all']) {
            $results = [
                'list'  => [],
                'count' => 0
            ];

            $results['count'] = VideoModel::count($this->site_id);

            if ($results['count']) {
                $this->resultsData(VideoModel::lists($this->site_id, [
                    1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
                ][$this->site_id], $data['page'], 0, '', 0, 1, 'visit'), $results['list']);

                $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
            }
        } else {
            $results = [];

            $this->resultsData(VideoModel::lists($this->site_id, [
                1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
            ][$this->site_id], 1), $results);

            if ($results) {
                $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
            }
        }

        return success($results);
    }

    public function recommended(Request $request)
    {
        $data = $request->only(['page', 'all']);

        $key = 'recommended_' . implode('_', $data);

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        if ($data['all']) {
            $results = [
                'list'  => [],
                'count' => 0
            ];

            $results['count'] = VideoModel::count($this->site_id);

            if ($results['count']) {
                $this->resultsData(VideoModel::lists($this->site_id, [
                    1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
                ][$this->site_id], $data['page'], 0, '', 0, 1), $results['list']);

                $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
            }
        } else {
            $results = [];

            $this->resultsData(VideoModel::lists($this->site_id, [
                1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
            ][$this->site_id]), $results);

            if ($results) {
                $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
            }
        }

        return success($results);
    }

    public function latest(Request $request)
    {
        $data = $request->only(['page', 'all']);

        $key = 'latest_' . implode('_', $data);

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }
        if ($data['all']) {
            $results = [
                'list'  => [],
                'count' => 0
            ];

            $results['count'] = VideoModel::count($this->site_id);

            if ($results['count']) {
                $this->resultsData(VideoModel::lists($this->site_id, [
                    1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
                ][$this->site_id], $data['page']), $results['list']);

                $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
            }
        } else {
            $results = [];

            $this->resultsData(VideoModel::lists($this->site_id, [
                1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
            ][$this->site_id], 1), $results);

            if ($results) {
                $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
            }
        }

        return success($results);
    }

    public function labelVideo(Request $request)
    {
        $data = $request->only(['page', 'label_id']);

        $key = 'labelVideo_' . implode('_', $data);

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $results = [
            'list'  => [],
            'count' => 0
        ];

        $results['count'] = VideoModel::count($this->site_id, 0, '', $data['label_id']);

        if ($results['count']) {
            $this->resultsData(VideoModel::lists($this->site_id, [
                1 => 32, 2 => 32, 3 => 32, 4 => 32, 5 => 32, 6 => 32, 7 => 32, 8 => 32, 9 => 32, 10 => 32,
            ][$this->site_id], $data['page'], 0, '', $data['label_id']), $results['list']);

            $this->cache->put($key, $results, self::CACHE_TIMEOUT_VIDEO);
        }

        return success($results);
    }

    public function site_info()
    {
        $key = 'site_info';

        if ($this->cache->has($key)) {
            return success($this->cache->get($key));
        }

        $result = SiteModel::find($this->site_id)->toArray();

        if ($result) {
            if ($result['email']) {
                $result['email'] = explode(',', $result['email']);
            } else {
                $result['email'] = [];
            }

            $this->cache->put($key, $result, self::CACHE_TIMEOUT_OTHER);
        }

        return success($result);
    }

    public function cache_empty()
    {
        cache::store('site' . $this->site_id)->tags('video')->flush();
        cache::store('site' . $this->site_id)->tags('other')->flush();
        cache::store('site' . $this->site_id)->tags('advertising')->flush();
        cache::store('site' . $this->site_id)->tags('updatetime')->flush();
    }

    public function watch(Request $request)
    {
        VideoModel::visitSave($request->input('video_id'));
    }
}



/*$i = 1;

$data = [];

$labelList = LabelModel::query()->pluck('id', 'name');

foreach (VideoModel::query()->get(['id', 'label']) as $item) {
$item['label'] = str_replace([' ', "\t", "\n", '，'], ',', strtoupper($item['label']));

foreach (explode(',', $item['label']) as $value) {
if ($value) {
$data[] = [
'video_id' => $item['id'],
'label_id' => $labelList[$value],
];
}
}

if ($i == 100) {
    VideoLabelModel::query()->insert($data);

    $i = 0;

    $data = [];
}

$i++;
}

if ($data) {
    VideoLabelModel::query()->insert($data);
}
exit();*/
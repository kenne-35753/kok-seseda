<?php

namespace App\Http\Controllers;

use App\Model\CategoryModel;
use App\Model\LabelModel;
use App\Model\SiteModel;
use App\Model\VideoLabelModel;
use App\Model\VideoModel;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class VideoController extends Controller
{
    public function index()
    {
        $category = CategoryModel::getAll();

        $label = LabelModel::getAll();

        return view('video/index', [
            'category' => $category,
            'label'    => $label,
        ]);
    }

    public function list(Request $request)
    {
        $parameter = [
            'page'        => $request->input('page', 0),
            'limit'       => $request->input('limit', 50),
            'site_id'     => $request->input('site_id', 0),
            'category_id' => $request->input('category_id', 0),
            'status'      => $request->input('status', 0),
            'title'       => $request->input('title', ''),
            'image'       => $request->input('image', ''),
            'video'       => $request->input('video', ''),
            'label'       => $request->input('label', ''),
        ];

        $list = [];

        $videoList = VideoModel::getAll($parameter);

        $count = VideoModel::countAll($parameter);

        $time = strtotime('+1 day');

        foreach ($videoList as $item) {
            if (is_null($item->site)) {
                $site_name = '未分配站点';
            } else {
                $site_name = $item->site->name;
            }
            if (is_null($item->category)) {
                $category_name = '未选择分类';
            } else {
                $category_name = $item->category->name;
            }
            $list[] = [
                'id'        => $item->id,
                'site'      => $site_name,
                'category'  => $category_name,
//                'status'    => VideoModel::STATUS[$item->status],
                'status'    => $item->status,
                'time_long' => $item->time_long,
                'update_time' => date('Y-m-d,H:i:s',$item->update_time),
                'title'     => $item->title,
                // 'image'     => $this::DOMAIN . $this->getSignedUrlPath($item->image, $this::SECURE_TOKEN, $time),
                // 'video'     => $this::DOMAIN . $this->getSignedUrlPath($item->video, $this::SECURE_TOKEN, $time),
				'image'     => $item->domain.$item->image,
              	'video'     => $item->domain.$item->video,
            ];
        }

        return response([
            'code'  => 0,
            'data'  => $list,
            'count' => $count
        ]);
    }

    public function play(Request $request)
    {
        return view('video/play', [
            'url' => $request->input('url', '')
        ]);
    }

    public function edit(Request $request)
    {
        $id = $request->input('id', 0);

        $video = VideoModel::find($id);

        if (is_null($video)) {
            return response([
                'code' => 1,
                'msg'  => '修改失败'
            ]);
        }

        $category = CategoryModel::getAll();

        $video->image_ = $this::DOMAIN . $this->getSignedUrlPath($video->image, $this::SECURE_TOKEN, strtotime('+1 day'));

        if ($request->isMethod('GET')) {
            return view('video/edit', [
                'category' => $category,
                'video'    => $video,
            ]);
        }

        $sites = SiteModel::getAll();

        $data = $request->only(['site_id', 'category_id', 'status', 'time_long', 'title', 'image']);

        $rule_in1   = array_column($sites->toArray(), 'id');
        $rule_in1[] = 0;
        $rule_in2   = array_column($category->toArray(), 'id');
        $rule_in2[] = 0;

        $validator = validator($data, [
            'site_id'     => ['bail', 'required', Rule::in($rule_in1)],
            'category_id' => ['bail', 'required', Rule::in($rule_in2)],
            'status'      => 'bail | required | in:1,2,3',
            'time_long'   => 'bail | required | string | min:1',
            'title'       => 'bail | required | string | min:1',
            'image'       => 'bail | required | string | min:1',
        ], [
            'site_id.*'     => '站点编号错误',
            'category_id.*' => '类型错误',
            'status.*'      => '状态错误',
            'time_long.*'   => '时间错误',
            'title.*'       => '请输入标题',
            'image.*'       => '请输入图片地址',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        try {
            if (VideoModel::edit($id, $data)) {
                return response([
                    'code' => 0
                ]);
            }
        } catch (\Exception $exception) {
        }

        return response([
            'code' => 1,
            'msg'  => '修改失败'
        ]);
    }

    public function label_index(Request $request)
    {
        return view('video/index_label', [
            'id' => $request->input('id', 0)
        ]);
    }

    public function label_list(Request $request)
    {
        $id = $request->input('id', 0);

        $result = [
            'code' => 0,
            'data' => []
        ];

        foreach (VideoLabelModel::getLabelByVideoId($id) as $item) {
            $result['data'][] = [
                'id'   => $item->id,
                'name' => $item->label->name,
            ];
        }

        return response($result);
    }

    public function label_list_n(Request $request)
    {
        $id = $request->input('id', 0);

        $result = [
            'code' => 0,
            'data' => []
        ];

        foreach (LabelModel::getLabelByNoVideo($id) as $item) {
            $result['data'][] = [
                'id'   => $item->id,
                'name' => $item->name,
            ];
        }

        return response($result);
    }

    public function label_del(Request $request)
    {
        $validator = validator($request->all(), [
            'id' => 'required | integer',
        ], [
            'id.*' => '编号必须',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (VideoLabelModel::del($request->input('id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '删除失败']);
    }

    public function label_add(Request $request)
    {
        $validator = validator($request->all(), [
            'video_id' => 'required | integer | min:1',
            'label_id' => 'required | integer | min:1',
        ], [
            'video_id.*' => '参数错误',
            'label_id.*' => '参数错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (VideoLabelModel::add($request->only('video_id', 'label_id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '添加失败']);
    }

    public function detailed(Request $request)
    {
        $id = $request->input('id', 0);

        $item = VideoModel::find($id);

        $list = [];

        if ($item) {
            $time = strtotime('+1 day');

            if (is_null($item->site)) {
                $site_name = '未分配站点';
            } else {
                $site_name = $item->site->name;
            }

            if (is_null($item->category)) {
                $category_name = '未选择分类';
            } else {
                $category_name = $item->category->name;
            }

            $list = [
                'id'        => $item->id,
                'site'      => $site_name,
                'category'  => $category_name,
                'status'    => VideoModel::STATUS[$item->status],
                'time_long' => $item->time_long,
                'title'     => $item->title,
                'image'     => $this::DOMAIN . $this->getSignedUrlPath($item->image, $this::SECURE_TOKEN, $time),
            ];

            return response([
                'code' => 0,
                'data' => $list
            ]);
        }

        return response(['code' => 1]);
    }

    public function setStatus(Request $request)
    {
        $id     = explode(',', $request->input('id', ''));
        $status = ($request->input('status', 0) == 2) ? 2 : 3;

        if (1 == count($id)) {
            $result = VideoModel::edit($id[0], ['status' => $status,'update_time'=>time()]);
        } else {
            $result = VideoModel::statusEdit($status, $id);
        }

        if ($result) {
            return response(['code' => 0]);
        }

        return response(['code' => 1]);
    }
}

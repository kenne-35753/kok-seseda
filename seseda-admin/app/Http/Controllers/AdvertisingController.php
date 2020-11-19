<?php

namespace App\Http\Controllers;

use App\Model\AdvertisingModel;
use App\Model\SiteModel;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AdvertisingController extends Controller
{
    public function index()
    {
        $adv_states = AdvertisingModel::getStatusAll();

        return view('advertising/index', [
            'advStates' => $adv_states,
        ]);
    }

    public function list(Request $request)
    {
        $parameter = [
            'page'       => $request->input('page', 0),
            'limit'      => $request->input('limit', 50),
            'site_id'    => $request->input('site_id', 0),
            'state'      => $request->input('state', 0),
            'is_show'    => $request->input('is_show', 0),
            'start_time' => $request->input('start_time', ''),
            'end_time'   => $request->input('end_time', ''),
            'title'      => $request->input('title', ''),
            'image'      => $request->input('image', ''),
            'address'    => $request->input('address', '')
        ];

        $list = [];

        $results = AdvertisingModel::getAll($parameter);

        $count = AdvertisingModel::countAll($parameter);

        foreach ($results as $item) {
            $list[] = [
                'id'         => $item->id,
                'site'       => $item->site->name,
                'state'      => AdvertisingModel::STATUS[$item->state],
                'is_show'    => $item->is_show,
                'sort'       => $item->sort,
                'title'      => $item->title,
                'image'      => $item->image,
                'address'    => $item->address,
                'created_at' => $item->created_at->toDateTimeString()
            ];
        }

        return response([
            'code'  => 0,
            'data'  => $list,
            'count' => $count
        ]);
    }

    public function add(Request $request)
    {
        $adv_states = AdvertisingModel::getStatusAll();

        if ($request->isMethod('GET')) {
            return view('advertising/add', [
                'advStates' => $adv_states,
            ]);
        }

        $site_id_arr = array_column(SiteModel::getAll()->toArray(), 'id');
        $data = $request->only(['site_id', 'state', 'sort', 'title', 'image', 'address', 'is_show']);
        if (empty($data['sort'])) {
            $data['sort'] = 0;
        }

        foreach ($data['site_id'] as $sid) {
            if (in_array($sid, $site_id_arr) == false) {
                return response([
                    'code' => 1,
                    'msg'  => '错误的站点id='.$sid
                ]);
            }
        }

        $validator = validator($data, [
            // 'site_id' => ['bail', 'required', Rule::in($site_id_arr)],
            'state'   => ['bail', 'required', Rule::in(array_column($adv_states, 'value'))],
            'sort'    => 'bail | nullable | integer',
            'title'   => 'bail | required | string | min:1',
            'image'   => 'bail | required | string | min:1',
            'address' => 'bail | required | string | min:1',
        ], [
            // 'site_id.*' => '站点编号错误',
            'state.*'   => '类型错误',
            'sort.*'    => '排序输入错误',
            'title.*'   => '请输入标题',
            'image.*'   => '请输入图片地址',
            'address.*' => '请输入链接地址',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        try {
            foreach ($data['site_id'] as $sid) {
                $sql = $data;
                $sql['site_id'] = $sid;
                $sql['image'] = $sql['image'];

                 AdvertisingModel::add($sql);
            }

            return response([
                'code' => 0
            ]);
        } catch (\Exception $exception) {
        }

        return response([
            'code' => 1,
            'msg'  => '添加失败'
        ]);
    }

    public function edit(Request $request)
    {
        $id = $request->input('id', 0);

        $adv = AdvertisingModel::find($id);

        if (is_null($adv)) {
            return response([
                'code' => 1,
                'msg'  => '修改失败'
            ]);
        }

        $adv_states = AdvertisingModel::getStatusAll();

        if ($request->isMethod('GET')) {
            return view('advertising/edit', [
                'advStates' => $adv_states,
                'data'      => $adv,
            ]);
        }

        $data = $request->only(['site_id', 'state', 'sort', 'title', 'image', 'address', 'is_show']);

        if (empty($data['is_show'])) {
            $data['is_show'] = 2;
        }

        $validator = validator($data, [
            'site_id' => ['bail', 'required', Rule::in(array_column(SiteModel::getAll()->toArray(), 'id'))],
            'state'   => ['bail', 'required', Rule::in(array_column($adv_states, 'value'))],
            'sort'    => 'bail | nullable | integer',
            'title'   => 'bail | required | string | min:1',
            'image'   => 'bail | required | string | min:1',
            'address' => 'bail | required | string | min:1',
        ], [
            'site_id.*' => '站点编号错误',
            'state.*'   => '类型错误',
            'sort.*'    => '排序输入错误',
            'title.*'   => '请输入标题',
            'image.*'   => '请输入图片地址',
            'address.*' => '请输入链接地址',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        try {
            if (AdvertisingModel::edit($id, $data)) {
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


    public function del(Request $request)
    {
        if (AdvertisingModel::remove($request->input('id', 0))) {
            return response([
                'code' => 0
            ]);
        }

        return response([
            'code' => 1,
            'msg'  => '删除失败'
        ]);
    }

    public function show(Request $request)
    {
        $key = $request->cookie('laravel_session') . 'adv_show';

        $id       = $request->input('id', 0);
        $status   = $request->input('status', 0);
        $password = $request->input('password', '');

        if ($password && $password == 'guanggaoguanli') {
            try {
                cache()->store('file')->put($key, 1, 86400);
            } catch (\Exception $exception) {
            }
        }

        try {
            if (cache()->store('file')->has($key)) {
//            if (1) {
                if (AdvertisingModel::edit($id, ['is_show' => ($status) ? 1 : 2])) {
                    return response([
                        'code' => 0
                    ]);
                }
            } else {
                return response([
                    'code' => 1,
                    'msg'  => '广告上下架需要输入密码验证'
                ]);
            }
        } catch (\Exception $exception) {
        }

        return response([
            'code' => 2,
            'msg'  => '操作失败'
        ]);
    }

    public function setStatus(Request $request)
    {
        $id     = explode(',', $request->input('id', ''));
        $status = ($request->input('status', 0) == 1) ? 1 : 2;

        if (1 == count($id)) {
            $result = AdvertisingModel::edit($id[0], ['is_show' => $status,'updated_at'=>date("Y-m-d H:i:s",time())]);
        } else {
            $result = AdvertisingModel::statusEdit($status, $id);
        }

        if ($result) {
            return response(['code' => 0]);
        }

        return response(['code' => 1]);
    }
}

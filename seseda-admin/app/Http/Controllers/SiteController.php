<?php

namespace App\Http\Controllers;

use App\Model\CategoryModel;
use App\Model\LabelModel;
use App\Model\LinkModel;
use App\Model\SiteCategoryModel;
use App\Model\SiteLabelModel;
use App\Model\SiteLinkModel;
use App\Model\SiteModel;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        return view('site/index');
    }

    public function list()
    {
        $sites = SiteModel::getAll('id desc');

        return response([
            'code' => 0,
            'data' => $sites
        ]);
    }

    public function edit(Request $request)
    {
        $validator = validator($request->all(), [
            'id'    => 'required | integer',
            'name'  => 'bail | nullable | string | min:1',
            'email' => 'bail | nullable',
            'icon'  => 'bail | nullable | url',
        ], [
            'id.*'    => '编号必须',
            'name.*'  => '名称错误',
            'email.*' => '邮箱错误',
            'icon.*'  => '图标错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (SiteModel::edit($request->input('id'), $request->only(['name', 'email', 'icon']))) {
            return response(['code' => 0]);
        }

        return response([
            'code' => 0,
            'msg'  => '修改失败'
        ]);
    }

    public function category_index(Request $request)
    {
        return view('site/index_category', [
            'id' => $request->input('id', 0)
        ]);
    }

    public function category_list(Request $request)
    {
        $id = $request->input('id', 0);

        $result = [
            'code' => 0,
            'data' => []
        ];

        foreach (SiteCategoryModel::getCategoryBySiteId($id) as $item) {
            $result['data'][] = [
                'id'   => $item->id,
                'name' => $item->category->name,
                'hot_gif'   => $item->hot_gif,
                'sort'   => $item->sort,
            ];
        }

        return response($result);
    }

    public function category_list_n(Request $request)
    {
        $id = $request->input('id', 0);

        $result = [
            'code' => 0,
            'data' => []
        ];

        foreach (CategoryModel::getCategoryByNoSite($id) as $item) {
            $result['data'][] = [
                'id'   => $item->id,
                'name' => $item->name,
            ];
        }

        return response($result);
    }

    public function category_del(Request $request)
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

        if (SiteCategoryModel::del($request->input('id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '删除失败']);
    }

    public function category_add(Request $request)
    {
        $validator = validator($request->all(), [
            'site_id'     => 'required | integer | min:1',
            'category_id' => 'required | integer | min:1',
        ], [
            'site_id.*'     => '参数错误',
            'category_id.*' => '参数错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (SiteCategoryModel::add($request->only('site_id', 'category_id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '添加失败']);
    }

    public function label_index(Request $request)
    {
        return view('site/index_label', [
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

        foreach (SiteLabelModel::getLabelBySiteId($id) as $item) {
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

        foreach (LabelModel::getLabelByNoSite($id) as $item) {
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

        if (SiteLabelModel::del($request->input('id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '删除失败']);
    }

    public function label_add(Request $request)
    {
        $validator = validator($request->all(), [
            'site_id'  => 'required | integer | min:1',
            'label_id' => 'required | integer | min:1',
        ], [
            'site_id.*'  => '参数错误',
            'label_id.*' => '参数错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (SiteLabelModel::add($request->only('site_id', 'label_id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '添加失败']);
    }

    public function link_index(Request $request)
    {
        return view('site/index_link', [
            'id' => $request->input('id', 0)
        ]);
    }

    public function link_list(Request $request)
    {
        $id = $request->input('id', 0);

        $result = [
            'code' => 0,
            'data' => []
        ];

        foreach (SiteLinkModel::getLinkBySiteId($id) as $item) {
            $result['data'][] = [
                'id'   => $item->id,
                'name' => $item->link->name,
                'url'  => $item->link->url,
            ];
        }

        return response($result);
    }

    public function link_list_n(Request $request)
    {
        $id = $request->input('id', 0);

        $result = [
            'code' => 0,
            'data' => []
        ];

        foreach (LinkModel::getLinkByNoSite($id) as $item) {
            $result['data'][] = [
                'id'   => $item->id,
                'name' => $item->name,
                'url'  => $item->url,
            ];
        }

        return response($result);
    }

    public function link_del(Request $request)
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

        if (SiteLinkModel::del($request->input('id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '删除失败']);
    }

    public function link_add(Request $request)
    {
        $validator = validator($request->all(), [
            'site_id'  => 'required | integer | min:1',
            'link_id' => 'required | integer | min:1',
        ], [
            'site_id.*'  => '参数错误',
            'link_id.*' => '参数错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (SiteLinkModel::add($request->only('site_id', 'link_id'))) {
            return response(['code' => 0]);
        }

        return response(['code' => 1, 'msg' => '添加失败']);
    }

    public function category_hot_gif(Request $request)
    {
        $id       = $request->input('id', 0);
        $status   = $request->input('status', 0);

        if (SiteCategoryModel::edit($id, ['hot_gif' => ($status) ? 1 : 2])) {
            return response([
                'code' => 0
            ]);
        }

        return response([
            'code' => 2,
            'msg'  => '操作失败'
        ]);
    }

    public function category_sort(Request $request)
    {
        $id       = $request->input('id', 0);
        $sort   = $request->input('sort', 0);

        if (SiteCategoryModel::edit($id, ['sort' => $sort])) {
            return response([
                'code' => 0
            ]);
        }

        return response([
            'code' => 2,
            'msg'  => '操作失败'
        ]);
    }
}

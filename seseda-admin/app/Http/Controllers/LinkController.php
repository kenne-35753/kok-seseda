<?php

namespace App\Http\Controllers;

use App\Model\LinkModel;
use Illuminate\Http\Request;

class LinkController extends Controller
{
    public function index()
    {
        return view('link/index');
    }

    public function list()
    {
        return response([
            'code' => 0,
            'data' => LinkModel::getAll('id desc')
        ]);
    }

    public function edit(Request $request)
    {
        $validator = validator($request->all(), [
            'id'   => 'required | integer',
            'name' => 'bail | nullable | string | min:1',
            'url'  => 'bail | nullable | url',
        ], [
            'id.*'   => '编号必须',
            'name.*' => '名称错误',
            'url.*'  => '链接错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (LinkModel::edit($request->input('id'), $request->only(['name', 'url']))) {
            return response(['code' => 0]);
        }

        return response([
            'code' => 0,
            'msg'  => '修改失败'
        ]);
    }

    public function add(Request $request)
    {
        $validator = validator($request->all(), [
            'name' => 'bail | nullable | string | min:1',
            'url'  => 'bail | nullable | url',
        ], [
            'name.*' => '名称错误',
            'url.*'  => '链接错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (LinkModel::add($request->input('name'), $request->input('url'))) {
            return response(['code' => 0]);
        }

        return response([
            'code' => 0,
            'msg'  => '添加失败'
        ]);
    }

    public function del(Request $request)
    {
        $validator = validator($request->all(), [
            'id'    => 'required | integer',
        ], [
            'id.*'    => '编号必须',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        LinkModel::del($request->input('id'));

        return response(['code' => 0]);
    }
}

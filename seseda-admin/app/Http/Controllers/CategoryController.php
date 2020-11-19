<?php

namespace App\Http\Controllers;

use App\Model\CategoryModel;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return view('category/index');
    }

    public function list()
    {
        return response([
            'code' => 0,
            'data' => CategoryModel::getAll('id desc')
        ]);
    }

    public function edit(Request $request)
    {
        $validator = validator($request->all(), [
            'id'    => 'required | integer',
            'name'  => 'bail | nullable | string | min:1',
        ], [
            'id.*'    => '编号必须',
            'name.*'  => '名称错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (CategoryModel::edit($request->input('id'), $request->only(['name']))) {
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
            'name'  => 'bail | nullable | string | min:1',
        ], [
            'name.*'  => '名称错误',
        ]);

        if ($validator->fails()) {
            return response([
                'code' => 1,
                'msg'  => $validator->errors()->first()
            ]);
        }

        if (CategoryModel::add($request->input('name'))) {
            return response(['code' => 0]);
        }

        return response([
            'code' => 0,
            'msg'  => '添加失败'
        ]);
    }
}

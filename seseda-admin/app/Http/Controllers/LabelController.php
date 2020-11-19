<?php

namespace App\Http\Controllers;

use App\Model\LabelModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LabelController extends Controller
{
    public function index()
    {
        return view('label/index');
    }

    public function list()
    {
        return response([
            'code' => 0,
            'data' => LabelModel::getAll('id desc')
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

        if (LabelModel::edit($request->input('id'), $request->only(['name']))) {
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

        if (LabelModel::add($request->input('name'))) {
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

        LabelModel::del($request->input('id'));

        return response(['code' => 0]);
    }
}

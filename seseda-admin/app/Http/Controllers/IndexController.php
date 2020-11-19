<?php

namespace App\Http\Controllers;

use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function login(Request $request)
    {
        if ($request->isMethod('GET')) {
            return view('login');
        }

        $request->validate([
            'username' => 'in:admin',
            'password' => 'in:' . md5('123456'),
            'captcha'  => 'captcha'
        ], [
            'username.*' => '账号错误!',
            'password.*' => '密码错误!',
            'captcha.*'  => '验证码错误!',
        ]);

        try {
            $key = $request->cookie('laravel_session');

            cache()->store('file')->put($key, 1, 86400);
        } catch (Exception $e) {
            return back();
        }

        return redirect(route('index'));
    }

    public function index()
    {
        return redirect(route('site_index'));
    }

    public function cache_empty(Request $request)
    {
      
        $id = $request->input('id', 0);

        if ($id) {

            $api_url = env('API_CACHE_URL', 'https://api.waytc1.com');
            $api_url .= '/cache/empty';

            $client = new Client();

            if ($id == 9999) {
                for ($i = 1; $i <= 10; ++$i) {
                    $client->getAsync($api_url, [
                        'query' => ['site_id' => $i]
                    ])->wait();
                    $client->getAsync($api_url, [
                        'query' => ['site_id' => $i]
                    ])->wait();
                }
            } else {
                $client->getAsync($api_url, [
                    'query' => ['site_id' => $id]
                ])->wait();
                $client->getAsync($api_url, [
                    'query' => ['site_id' => $id]
                ])->wait();
            }

            return response(['code' => 0]);
        }

        return response(['code' => 0, 'msg' => '操作失败']);
    }
}

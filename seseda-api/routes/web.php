<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
//    return $router->app->version();
//    return str_random(32);
    $host    = 'http://' . $_SERVER['HTTP_HOST'];
    $site_id = $_GET['site_id'];
    return <<<star
    
<form action="{$host}/video/home" method="get" target="_blank">
<input type="submit" value="首页视频">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/getLinkVideo" method="get" target="_blank">
<input type="submit" value="获取相关视频">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="id" value="10">
</form>

<form action="{$host}/video/label" method="get" target="_blank">
<input type="submit" value="获取标签视频">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="label_id" value="10">
<input type="text" name="page" value="1">
</form>

<form action="{$host}/video" method="get" target="_blank">
<input type="submit" value="按分类获取视频">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="category" value="1">
<input type="text" name="page" value="1">
</form>

<form action="{$host}/video/search" method="get" target="_blank">
<input type="submit" value="搜索获取视频">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="keyword" value="性感">
<input type="text" name="page" value="1">
</form>

<form action="{$host}/video/hot" method="get" target="_blank">
<input type="submit" value="热门视频">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="all" value="0">
<input type="text" name="page" value="1">
</form>

<form action="{$host}/video/recommended" method="get" target="_blank">
<input type="submit" value="推荐视频">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="all" value="0">
<input type="text" name="page" value="1">
</form>

<form action="{$host}/video/latest" method="get" target="_blank">
<input type="submit" value="最近更新">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="all" value="0">
<input type="text" name="page" value="1">
</form>

<form action="{$host}/getCates" method="get" target="_blank">
<input type="submit" value="视频分类与分类视频数量">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/getLinks" method="get" target="_blank">
<input type="submit" value="获取友链">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/getTags" method="get" target="_blank">
<input type="submit" value="获取标签">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/update" method="get" target="_blank">
<input type="submit" value="获取缓存更新时间">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/getAdvs" method="get" target="_blank">
<input type="submit" value="获取广告">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/site/info" method="get" target="_blank">
<input type="submit" value="站点信息">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/cache/empty" method="get" target="_blank">
<input type="submit" value="清理接口缓存">
<input type="text" name="site_id" value="$site_id">
</form>

<form action="{$host}/video/watch" method="get" target="_blank">
<input type="submit" value="观看数量增加">
<input type="text" name="site_id" value="$site_id">
<input type="text" name="video_id" value="100">
</form>

star;
});


//视频分类与分类视频数量
$router->get('getCates', 'ExampleController@cates');

$router->group(['prefix' => 'video'], function ($router) {
    //按分类获取视频
    $router->post('/', 'ExampleController@video');
    $router->get('/', 'ExampleController@video');

    //首页视频
    $router->get('home', 'ExampleController@home');

    //搜索获取视频
    $router->post('search', 'ExampleController@search');
    $router->get('search', 'ExampleController@search');

    //获取热门
    $router->get('hot', 'ExampleController@hot');
    $router->post('hot', 'ExampleController@hot');

    //获取推荐
    $router->get('recommended', 'ExampleController@recommended');
    $router->post('recommended', 'ExampleController@recommended');

    //获取最近更新
    $router->get('latest', 'ExampleController@latest');
    $router->post('latest', 'ExampleController@latest');

    //获取标签视频
    $router->get('label', 'ExampleController@labelVideo');
    $router->post('label', 'ExampleController@labelVideo');

    //观看数量增加
    $router->get('watch',  'ExampleController@watch');
});

//获取相关视频

$router->get('getLinkVideo', 'ExampleController@related');

//获取广告
$router->get('getAdvs', 'ExampleController@advertising');

//获取友链
$router->get('getLinks', 'ExampleController@linkUrl');

//获取标签
$router->get('getTags', 'ExampleController@label');

//获取缓存更新时间
$router->get('update', 'ExampleController@cacheUpdate');

//站点信息
$router->get('site/info', 'ExampleController@site_info');


//清理缓存
$router->get('cache/empty', 'ExampleController@cache_empty');

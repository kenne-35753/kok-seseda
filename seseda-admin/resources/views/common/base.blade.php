<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>后台大布局</title>
    <link rel="stylesheet" href="/js/css/layui.css">
    <script src="/js/layui.js"></script>
</head>
<body class="layui-layout-body">
<div class="layui-layout layui-layout-admin">
    <div class="layui-header">
        <div class="layui-logo">管理后台</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <ul class="layui-nav layui-layout-left">
        </ul>
        <ul class="layui-nav layui-layout-right" lay-filter="demo">
            <li class="layui-nav-item layuimini-setting">
                <a href="javascript:;">清除前台缓存</a>
                <dl class="layui-nav-child">
                    @foreach($sites as $item)
                        <dd>
                            <a href="javascript:cache_empty({{$item->id}});">{{$item->name}}</a>
                        </dd>
                    @endforeach
                    <dd>
                        <a href="javascript:cache_empty(9999);">全部站点</a>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>

    <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
            <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
            <ul class="layui-nav layui-nav-tree layui-this" lay-filter="test">
                <li class="layui-nav-item daohang">
                    <a href="{{route('site_index')}}">站点管理</a>
                </li>
                <li class="layui-nav-item daohang">
                    <a href="{{route('video_index')}}">视频管理</a>
                </li>
                <li class="layui-nav-item daohang">
                    <a href="{{route('advertising_index')}}">广告管理</a>
                </li>
                <li class="layui-nav-item daohang">
                    <a href="{{route('category_index')}}">分类管理</a>
                </li>
                <li class="layui-nav-item daohang">
                    <a href="{{route('label_index')}}">标签管理</a>
                </li>
                <li class="layui-nav-item daohang">
                    <a href="{{route('link_index')}}">友链管理</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="layui-body">

        <!-- 内容主体区域 -->
        <div style="padding: 15px;">
            @yield('content')
        </div>
    </div>
</div>
<script>
    layui.use('element', function(){
        var element = layui.element, $ = layui.jquery; //导航的hover效果、二级菜单等功能，需要依赖element模块

    });
    function cache_empty(id) {
        layui.use('jquery', function(){
            var $ = layui.jquery, layer = layui.layer;
            var index = layer.load(1, {
                icon: 2,
                shade: 0.8
            });
            $.get("{{route('cache_empty')}}", {id: id}, function (result) {
                if (result.code === 0) {
                    layer.msg('操作完成', {icon: 6});
                } else {
                    layer.msg(result.msg, {icon: 5});
                }
                layer.close(index);
            });
        });
    }

</script>
</body>
</html>
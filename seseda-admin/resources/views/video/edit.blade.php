<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>layui</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="/js/css/layui.css">
    <script src="/js/layui.js"></script>
</head>
<body>
<fieldset class="layui-elem-field layui-field-title" style="margin-top: 20px;">
    <legend>修改视频</legend>
</fieldset>

<div style="margin-right: 6%">
    <form class="layui-form" action="" method="post">
        @csrf
        <input type="hidden" name="id" value="{{$video['id']}}">
        <div class="layui-form-item">
            <label class="layui-form-label">站点</label>
            <div class="layui-input-block">
                <select name="site_id" lay-filter="aihao">
                    <option value="0">不分配站点</option>
                    @foreach($sites as $item)
                        <option value="{{$item->id}}"
                                @if($video['site_id'] == $item->id) selected @endif>{{$item->name}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">类型</label>
            <div class="layui-input-block">
                <select name="category_id" lay-filter="aihao">
                    <option value="0">不选择分类</option>
                    @foreach($category as $item)
                        <option value="{{$item->id}}"
                                @if($video['category_id'] == $item->id) selected @endif>{{$item->name}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">状态</label>
            <div class="layui-input-block">
                <select name="status" lay-filter="aihao">
                    <option value="1" @if($video['status'] == 1) selected @endif>待审核</option>
                    <option value="2" @if($video['status'] == 2) selected @endif>已上架</option>
                    <option value="3" @if($video['status'] == 3) selected @endif>已下架</option>
                </select>
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">时长</label>
                <div class="layui-input-inline">
                    <input type="text" name="time_long" autocomplete="off" class="layui-input"
                           value="{{$video['time_long']}}">
                </div>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">标题</label>
            <div class="layui-input-block">
                <input type="text" name="title" autocomplete="off" placeholder="请输入标题" class="layui-input"
                       value="{{$video['title']}}">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">图片</label>
            <div class="layui-input-block">
                <input type="hidden" name="image" autocomplete="off" placeholder="请输入图片" class="layui-input"
                       value="{{$video['image']}}">
                <img src="{{$video['image_']}}" alt="" id="video_image" style="max-width: 60%">
                <br><br>
                <button type="button" class="layui-btn" id="upload_image">
                    <i class="layui-icon">&#xe67c;</i>上传图片
                </button>
            </div>
        </div>
        <div class="layui-form-item" style="text-align: right">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
    </form>
</div>
<script>
    layui.use(['form', 'layedit', 'laydate', 'jquery', 'upload'], function () {
        var form = layui.form,
            layer = layui.layer,
            $ = layui.jquery,
            upload = layui.upload;

        var index;

        var uploadInst = upload.render({
            elem: '#upload_image' //绑定元素
            , url: "{{route('upload_image')}}" //上传接口
            , accept: 'images'
            , acceptMime: 'image/*'
            , headers: {'X-CSRF-TOKEN': "{{csrf_token()}}"}
            , data: {id: "{{$video->id}}"}
            , choose: function () {
                index = layer.load(1, {
                    icon: 2,
                    shade: 0.8,
                });
            }
            , before: function () {
            }
            , done: function (res) {
                //上传完毕回调
                if (res.code === 0) {
                    $('#video_image').attr('src', res.image_);
                    $('input[name=image]').val(res.image);
                } else {
                    layer.msg(res.msg);
                }
                layer.close(index);
            }
            , error: function () {
                //请求异常回调
                layer.close(index);
            }
        });

        //监听提交
        form.on('submit(demo1)', function (data) {
            var index = layer.load(1, {
                icon: 2,
                shade: 0.8
            });
            $.post("{{route('video_edit')}}", data.field, function (data) {
                if (data.code === 0) {
                    layer.msg('修改成功', {icon: 6});
                } else {
                    layer.msg(data.msg, {icon: 5});
                }
                layer.close(index);
            });
            return false
        });
    });
</script>

</body>
</html>
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
    <legend>修改广告</legend>
</fieldset>

<div style="margin-right: 6%">
    <form class="layui-form" action="" method="post">
        @csrf
        <input type="hidden" name="id" value="{{$data['id']}}">
        <div class="layui-form-item">
            <label class="layui-form-label">站点</label>
            <div class="layui-input-block">
                <select name="site_id" lay-filter="aihao">
                    <option value="0"></option>
                    @foreach($sites as $item)
                        <option value="{{$item->id}}" @if($data['site_id'] == $item->id) selected @endif>{{$item->name}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">类型</label>
            <div class="layui-input-block">
                <select name="state" lay-filter="aihao">
                    <option value="0"></option>
                    @foreach($advStates as $item)
                        <option value="{{$item['value']}}" @if($data['state'] == $item['value']) selected @endif>{{$item['title']}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">上架</label>
            <div class="layui-input-block">
                <input type="checkbox" name="is_show" value="1" lay-skin="switch" lay-text="是|否" @if($data['is_show'] == 1) checked @endif>
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">排序</label>
                <div class="layui-input-inline">
                    <input type="number" name="sort" autocomplete="off" class="layui-input" value="{{$data['sort']}}">
                </div>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">标题</label>
            <div class="layui-input-block">
                <input type="text" name="title" autocomplete="off" placeholder="请输入标题" class="layui-input" value="{{$data['title']}}">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">图片</label>
            <div class="layui-input-block">
                <input type="text" name="image" autocomplete="off" placeholder="请输入图片链接,或者下面上传图片" class="layui-input" value="{{$data['image']}}">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">上传图片</label>
            <div class="layui-input-block">
                <input type="hidden" name="image2" autocomplete="off" placeholder="请输入图片" class="layui-input"
                       value="">
                <img src="" alt="" id="video_image" style="max-width: 60%">
                <br><br>
                <button type="button" class="layui-btn" id="upload_adsimg">
                    <i class="layui-icon">&#xe67c;</i>上传图片
                </button>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">链接</label>
            <div class="layui-input-block">
                <input type="text" name="address" autocomplete="off" placeholder="请输入链接" class="layui-input" value="{{$data['address']}}">
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
        var form = layui.form
            , layer = layui.layer
            , $ = layui.jquery
            , upload = layui.upload
            ;

            var uploadInst = upload.render({
            elem: '#upload_adsimg' //绑定元素
            , url: "{{route('upload_adsimg')}}" //上传接口
            , accept: 'images'
            , acceptMime: 'image/*'
            , headers: {'X-CSRF-TOKEN': "{{csrf_token()}}"}
            , data: {}
            , choose: function () {
                index = layer.load(1, {
                    icon: 2,
                    shade: 0.8,
                });
            }
            , before: function () {
            }
            , done: function (res) {
                console.log(res);
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
            $.post("{{route('advertising_edit')}}", data.field, function (data) {
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
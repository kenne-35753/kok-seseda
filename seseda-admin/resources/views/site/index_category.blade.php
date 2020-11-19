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
<fieldset class="layui-elem-field layui-field-title layui-col-lg7" style="margin-top: 20px;">
    <legend>站点分类</legend>
</fieldset>

<div class="layuimini-container">
    <div class="layuimini-main layui-col-lg7">
        <table class="layui-hide" id="currentTableId" lay-filter="currentTableFilter"></table>
        <script type="text/html" id="currentTableBar">
            <a title="删除" lay-event="delete"><i class="layui-icon">&#xe640;</i></a>
        </script>
    </div>
</div>

<script>
    layui.use(['form', 'table', 'laydate', 'jquery'], function () {
        var $ = layui.jquery,
            form = layui.form,
            table = layui.table;

        table.render({
            elem: '#currentTableId',
            url: "{{route('site_category_list', ['id' => $id])}}",
            cols: [[
                // {type: "checkbox", width: 50, fixed: "left"},
                {field: 'id', title: 'ID', sort: true},
                {field: 'name', title: '名称', event: 'setName'},
                {
                    field: 'hot_gif', title: '显示 hot gif', align: "center", templet: function (data) {
                        let checked = '';
                        if (data.hot_gif === 1) {
                            checked = 'checked';
                        }
                        return '<input type="checkbox" name="id" value="' + data.id + '" lay-skin="switch" lay-filter="hotGif" lay-text="是|否" ' + checked + '>';
                    }
                },
                {field: 'sort', title: '前台排序', event: 'setSort'},
                {title: '操作', templet: '#currentTableBar', fixed: "right", align: "center"}
            ]],
            page: false,
        });

        form.on('switch(hotGif)', function (obj) {
            let hot_gif_index = layer.load(1, {
                icon: 2,
                shade: 0.8
            });
            id = this.value;
            status = (obj.elem.checked) ? 1 : 0;
            $.get("{{route('site_category_hot_gif')}}", {id: id, status: status}, function (res) {
                layer.close(hot_gif_index);
                if (0 === res.code) {
                    layer.msg('操作成功', {icon: 6});
                } else {
                    layer.msg(res.msg, {icon: 5});
                }
            });
        });

        table.on('tool(currentTableFilter)', function (obj) {
            if (obj.event === 'delete') {
                let index1 = layer.confirm('是否确认删除?', function () {
                    layer.close(index1);
                    index1 = layer.load(1, {
                        icon: 2,
                        shade: 0.8,
                        time: 10000
                    });
                    $.get("{{route('site_category_del')}}", {'id': obj.data['id']}, function (data) {
                        layer.close(index1);
                        if (data.code === 0) {
                            layer.msg('删除成功', {icon: 6});
                            obj.del();
                            table.reload('currentTableId2', {
                                url: "{{route('site_category_list_n', ['id' => $id])}}",
                            });
                        } else {
                            layer.msg(data.msg, {icon: 5});
                        }
                    });
                });
            } else if(obj.event === 'setSort'){
                layer.prompt({
                    formType: 2
                    , title: '修改 ID 为 [' + obj.data['id'] + '] 的排序编号'
                    , value: obj.data['sort']
                }, function (value, index) {
                    let sort_index = layer.load(1, {
                        icon: 2,
                        shade: 0.8
                    });
                    layer.close(index);
                    $.get("{{route('site_category_sort')}}", {'id': obj.data['id'], 'sort': value}, function (res) {
                        layer.close(sort_index);
                        if (0 === res.code) {
                            layer.msg('操作成功', {icon: 6});
                            obj.update({
                                sort: value
                            });
                        } else {
                            layer.msg(res.msg, {icon: 5});
                        }
                    });
                });
            }
        });

        layer.open({
            type: 1,
            title: false,
            offset: 'r',
            area: ['25%', '100%'],
            shade: 0,
            closeBtn: 0,
            content: '<fieldset class="layui-elem-field layui-field-title">\n' +
                '        <legend>选择分类添加</legend>\n' +
                '    </fieldset><table class="layui-hide" id="currentTableId2" lay-filter="currentTableFilter2"></table>',
            success: function (layero, index) {
                table.render({
                    elem: '#currentTableId2',
                    url: "{{route('site_category_list_n', ['id' => $id])}}",
                    cols: [[
                        // {type: "checkbox", width: 50, fixed: "left"},
                        {field: 'name', title: '名称', event: 'setName'},
                        {
                            title: '操作', templet: function () {
                                return '<a title="添加" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></a>';
                            }, fixed: "right", align: "center", width: '20%'
                        }
                    ]],
                    page: false,
                });
                table.on('tool(currentTableFilter2)', function (obj) {
                    let index1 = layer.load(1, {
                        icon: 2,
                        shade: 0.8,
                        time: 10000
                    });
                    if (obj.event === 'add') {
                        $.ajax({
                            url: "{{route('site_category_add')}}",
                            type: "post",
                            data: {site_id: "{{$id}}", category_id: obj.data['id']},
                            headers: {'X-CSRF-TOKEN': "{{ csrf_token() }}"},
                            success: function (res) {
                                layer.close(index1);
                                if (0 === res.code) {
                                    obj.del();
                                    table.reload('currentTableId', {
                                        url: "{{route('site_category_list', ['id' => $id])}}",
                                    });
                                } else {
                                    layer.msg(res.msg);
                                }
                            }
                        });
                    }
                });
            }
        });
    });
</script>
</body>
</html>
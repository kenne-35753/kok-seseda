@extends('common.base')

@section('content')
    <div class="layuimini-container">
        <div class="layuimini-main">
            <div class="layui-btn-group">
            </div>
            <table class="layui-hide" id="currentTableId" lay-filter="currentTableFilter"></table>
            <script type="text/html" id="currentTableBar">
                <button type="button" class="layui-btn layui-btn-primary layui-btn-xs" lay-event="category">分类管理</button>
                <button type="button" class="layui-btn layui-btn-primary layui-btn-xs" lay-event="label">标签管理</button>
                <button type="button" class="layui-btn layui-btn-primary layui-btn-xs" lay-event="link">友链管理</button>
            </script>
        </div>
    </div>

    <script>
        document.getElementsByClassName('daohang')[0].classList.add('layui-this');

        layui.use(['form', 'table', 'laydate', 'jquery'], function () {
            var $ = layui.jquery,
                form = layui.form,
                table = layui.table;

            table.render({
                elem: '#currentTableId',
                url: "{{route('site_list')}}",
                cols: [[
                    // {type: "checkbox", width: 50, fixed: "left"},
                    {field: 'id', title: 'ID', sort: true},
                    {field: 'name', title: '名称', event: 'setName'},
                    {field: 'email', title: '邮箱', event: 'setEmail'},
                    {
                        field: 'icon', title: '图标', event: 'setIcon', templet: function (data) {
                            return '<div><img layer-src="' + data.icon + '" src="' + data.icon + '"></div>';
                        }
                    },
                    {title: '操作', templet: '#currentTableBar', fixed: "right", align: "center"}
                ]],
                page: false,
            });

            table.on('tool(currentTableFilter)', function (obj) {
                var data = obj.data;
                switch (obj.event) {
                    case 'setName':
                        siteUpdate('名称', data.name, data.id, 1, obj);
                        break;
                    case 'setEmail':
                        siteUpdate('邮箱', data.email, data.id, 2, obj);
                        break;
                    case 'setIcon':
                        siteUpdate('图标', data.icon, data.id, 3, obj);
                        break;
                    case 'category':
                        layer.open({
                            type: 2,
                            title: false,
                            area: ['80%', '80%'],
                            content: "{{route('site_category_index')}}?id=" + data.id
                        });
                        break;
                    case 'label':
                        layer.open({
                            type: 2,
                            title: false,
                            area: ['80%', '80%'],
                            content: "{{route('site_label_index')}}?id=" + data.id
                        });
                        break;
                    case 'link':
                        layer.open({
                            type: 2,
                            title: false,
                            area: ['80%', '80%'],
                            content: "{{route('site_link_index')}}?id=" + data.id
                        });
                        break;
                }
            });

            function siteUpdate(parameterTitle, defaultValue, id, type, obj) {
                layer.prompt({
                    formType: 2
                    , title: '修改 ID 为 [' + id + '] 的' + parameterTitle
                    , value: defaultValue
                }, function (value, index) {
                    layer.close(index);
                    layer.load(1, {
                        icon: 2,
                        shade: 0.8,
                        time: 10000
                    });
                    let data, dataSave;
                    switch (type) {
                        case 1:
                            data = {id: id, name: value};
                            dataSave = {name: value};
                            break;
                        case 2:
                            data = {id: id, email: value};
                            dataSave = {email: value};
                            break;
                        case 3:
                            data = {id: id, icon: value};
                            dataSave = {icon: value};
                            break;
                    }
                    //这里一般是发送修改的Ajax请求
                    $.ajax({
                        url: "{{route('site_edit')}}",
                        type: "post",
                        data: data,
                        headers: {'X-CSRF-TOKEN': "{{ csrf_token() }}"},
                        success: function (res) {
                            layer.closeAll();
                            if (0 === res.code) {
                                //同步更新表格和缓存对应的值
                                obj.update(dataSave);
                            } else {
                                layer.msg(res.msg);
                            }
                        }
                    });
                });
            }
        });
    </script>
@endsection
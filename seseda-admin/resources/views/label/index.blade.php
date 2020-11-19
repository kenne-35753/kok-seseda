@extends('common.base')

@section('content')
    <div class="layuimini-container">
        <div class="layuimini-main">
            <div class="layui-btn-group">
                <button class="layui-btn data-add-btn">添加</button>
            </div>
            <table class="layui-hide" id="currentTableId" lay-filter="currentTableFilter"></table>
            <script type="text/html" id="currentTableBar">
                <a title="删除" lay-event="delete"><i class="layui-icon">&#xe640;</i></a>
            </script>
        </div>
    </div>

    <script>
        document.getElementsByClassName('daohang')[4].classList.add('layui-this');

        layui.use(['form', 'table', 'laydate', 'jquery'], function () {
            var $ = layui.jquery,
                form = layui.form,
                table = layui.table;

            table.render({
                elem: '#currentTableId',
                url: "{{route('label_list')}}",
                cols: [[
                    // {type: "checkbox", width: 50, fixed: "left"},
                    {field: 'id', title: 'ID', sort: true},
                    {field: 'name', title: '名称', event: 'setName'},
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
                    case 'category':
                        alert(345);
                        break;
                    case 'label':
                        alert(987);
                        break;
                    case 'delete':
                        let index1 = layer.confirm('是否确认删除?', function () {
                            layer.close(index1);
                            layer.load(1, {
                                icon: 2,
                                shade: 0.8,
                                time: 10000
                            });
                            $.get("{{route('label_del')}}", {'id': obj.data['id']}, function (data) {
                                layer.closeAll();
                                if (data.code === 0) {
                                    layer.msg('删除成功', {icon: 6});
                                    obj.del();
                                } else {
                                    layer.msg(data.msg, {icon: 5});
                                }
                            });
                        });
                        break
                }
            });

            // 监听添加操作
            $(".data-add-btn").on("click", function () {
                layer.prompt({
                    formType: 0
                    , title: '请输入名称'
                }, function (value, index) {
                    $.ajax({
                        url: "{{route('label_add')}}",
                        type: "post",
                        data: {name: value},
                        headers: {'X-CSRF-TOKEN': "{{ csrf_token() }}"},
                        success: function (res) {
                            layer.closeAll();
                            if (0 === res.code) {
                                table.reload('currentTableId', {
                                    url: "{{route('label_list')}}",
                                });
                            } else {
                                layer.msg(res.msg);
                            }
                        }
                    });
                });
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
                    }
                    //这里一般是发送修改的Ajax请求
                    $.ajax({
                        url: "{{route('label_edit')}}",
                        type: "post",
                        data: data,
                        headers: {'X-CSRF-TOKEN': "{{ csrf_token() }}"},
                        success: function (res) {
                            layer.closeAll();
                            if (0 === res.code) {
                                layer.msg('修改成功', {icon: 6});
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
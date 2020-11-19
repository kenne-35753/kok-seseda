@extends('common.base')

@section('content')
    <div class="layuimini-container">
        <div class="layuimini-main">
            <div class="layui-btn-group">
                <button class="layui-btn data-add-btn">添加</button>
            </div>
            <table class="layui-hide" id="currentTableId" lay-filter="currentTableFilter"></table>
        </div>
    </div>

    <script>
        document.getElementsByClassName('daohang')[3].classList.add('layui-this');

        layui.use(['form', 'table', 'laydate', 'jquery'], function () {
            var $ = layui.jquery,
                form = layui.form,
                table = layui.table;

            table.render({
                elem: '#currentTableId',
                url: "{{route('category_list')}}",
                cols: [[
                    // {type: "checkbox", width: 50, fixed: "left"},
                    {field: 'id', title: 'ID', sort: true},
                    {field: 'name', title: '名称', event: 'setName'},
                    // {title: '操作', templet: '#currentTableBar', fixed: "right", align: "center"}
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
                }
            });

            // 监听添加操作
            $(".data-add-btn").on("click", function () {
                layer.prompt({
                    formType: 0
                    , title: '请输入分类名称'
                }, function (value, index) {
                    $.ajax({
                        url: "{{route('category_add')}}",
                        type: "post",
                        data: {name: value},
                        headers: {'X-CSRF-TOKEN': "{{ csrf_token() }}"},
                        success: function (res) {
                            layer.closeAll();
                            if (0 === res.code) {
                                table.reload('currentTableId', {
                                    url: "{{route('category_list')}}",
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
                        url: "{{route('category_edit')}}",
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
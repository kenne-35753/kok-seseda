@extends('common.base')

@section('content')
    <div class="layuimini-container">
        <div class="layuimini-main">

            <fieldset class="layui-elem-field layuimini-search">
                <legend>搜索信息</legend>
                <div style="margin: 10px 10px 10px 10px">
                    <form class="layui-form layui-form-pane" action="">
                        <div class="layui-form-item">
                            <div class="layui-inline">
                                <label class="layui-form-label">站点</label>
                                <div class="layui-input-inline">
                                    <select name="site_id" lay-filter="aihao">
                                        <option value="0">请选择</option>
                                        @foreach($sites as $item)
                                            <option value="{{$item->id}}">{{$item->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">类型</label>
                                <div class="layui-input-inline">
                                    <select name="state" lay-filter="aihao">
                                        <option value="0">请选择</option>
                                        @foreach($advStates as $item)
                                            <option value="{{$item['value']}}">{{$item['title']}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">上架</label>
                                <div class="layui-input-inline">
                                    <select name="is_show" lay-filter="aihao">
                                        <option value="0">请选择</option>
                                        <option value="1">上架</option>
                                        <option value="2">下架</option>
                                    </select>
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">添加时间</label>
                                <div class="layui-input-inline">
                                    <input class="layui-input" name="start_time" placeholder="开始" autocomplete="off"
                                           id="startTime">
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">添加时间</label>
                                <div class="layui-input-inline">
                                    <input class="layui-input" name="end_time" placeholder="截止" autocomplete="off"
                                           id="endTime">
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">标题</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="title" autocomplete="off" placeholder="请输入标题"
                                           class="layui-input">
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">图片</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="image" autocomplete="off" placeholder="请输入图片"
                                           class="layui-input">
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">链接</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="address" autocomplete="off" placeholder="请输入链接"
                                           class="layui-input">
                                </div>
                            </div>
                            <div class="layui-inline">
                                <a class="layui-btn" lay-submit="" lay-filter="data-search-btn">搜索</a>
                                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                            </div>
                        </div>
                    </form>
                </div>
            </fieldset>

{{--            <div class="layui-btn-group">--}}
{{--                <button class="layui-btn data-add-btn">添加</button>--}}

{{--                <button class="layui-btn data-down-btn" lay-event="xiaJia">下架</button>--}}

{{--                                <button class="layui-btn layui-btn-danger data-delete-btn">删除</button>--}}
{{--            </div>--}}
{{--            <div class="layui-btn-grou-down">--}}
{{--                <button class="layui-btn data-down-btn">下架</button>--}}
{{--            </div>--}}
            <table class="layui-hide" id="currentTableId" lay-filter="currentTableFilter"></table>
            <script type="text/html" id="currentTableBar">
                <a title="编辑" lay-event="edit"><i class="layui-icon" style="font-size: 24px">&#xe642;</i></a>
                <a title="删除" lay-event="delete"><i class="layui-icon">&#xe640;</i></a>
                {{--                <a class="layui-btn layui-btn-xs data-count-edit" lay-event="edit">编辑</a>--}}
                {{--                <a class="layui-btn layui-btn-xs layui-btn-danger data-count-delete" lay-event="delete">删除</a>--}}
            </script>
        </div>
    </div>

    <script>
        document.getElementsByClassName('daohang')[2].classList.add('layui-this');

        layui.use(['form', 'table', 'laydate', 'jquery'], function () {
            var $ = layui.jquery,
                form = layui.form,
                table = layui.table,
                laydate = layui.laydate;

            laydate.render({
                elem: '#startTime',
                type: "datetime"
            });

            laydate.render({
                elem: '#endTime',
                type: "datetime"
            });

            table.render({
                elem: '#currentTableId',
                url: "{{route('advertising_list')}}",
                cols: [[
                    {type: "checkbox", width: 50, fixed: "left"},
                    {field: 'id',align:"center", width: 100, title: 'ID', sort: true},
                    {field: 'site',align:"center", width: 165, title: '站点'},
                    {field: 'state', width: 165, title: '类型'},
                    {field: 'title', title: '标题'},
                    {field: 'image', title: '图片', align:"center", event: 'image', templet: function (data) {
                            return '<div class="image_' + data.id + '"><img layer-src="' + data.image + '" src="' + data.image + '"></div>';
                        }
                    },
                    {field: 'address', title: '链接'},
                    {field: 'sort', width: 100,align:"center", title: '排序', sort: true},
                    {field: 'created_at', width: 160, title: '添加时间'},
                    {
                        field: 'is_show', width: 80, title: '上架', align: "center", templet: function (data) {
                            let checked = '';
                            if (data.is_show === 1) {
                                checked = 'checked';
                            }
                            return '<input type="checkbox" name="id" value="' + data.id + '" lay-skin="switch" lay-filter="isShow" lay-text="是|否" ' + checked + '>';
                        }
                    },
                    {title: '操作', width: 80, templet: '#currentTableBar', fixed: "right", align: "center"}
                ]],

                toolbar: '<div class="layui-table-tool">\n' +
                    '        <div class="layui-table-tool-temp">\n' +
                    ' <button class="layui-btn layui-btn-sm data-add-btn" lay-event="add_">添加</button>' +
                    '<button class="layui-btn layui-btn-sm" lay-event="shangJia">上架</button>' +
                    '<button class="layui-btn layui-btn-sm" lay-event="xiaJia">下架</button>' +

                    '        </div>\n' +

                    '    </div>',
                page: true,
                limit: 50,
                limits: [10, 50, 100, 200]
            });

            //头工具栏事件
            table.on('toolbar(currentTableFilter)', function (obj) {
                var checkStatus = table.checkStatus(obj.config.id);
                let ids = [];
                $(checkStatus.data).each(function (k, v) {
                    ids.push(v.id)
                });
                if (0 === ids.length && obj.event!=="add_") {
                    layer.alert('未勾选操作记录');
                    return false;
                }
                switch (obj.event) {
                    case 'add_':
                        set_add();
                        break;
                    case 'shangJia':
                        setStatus(ids.join(','), 1, 2);
                        break;
                    case 'xiaJia':
                        setStatus(ids.join(','), 2, 2);
                        break;
                }
            });



            function setStatus(id, status, type) {
                let status_index = layer.load(1, {
                    icon: 2,
                    shade: 0.8
                });
                $.get("{{route('advertising_status_update')}}", {id: id, status: status}, function (res) {
                    layer.close(status_index);
                    if (0 === res.code) {
                        if (1 === type) {
                            layer.msg('操作成功', {icon: 6});
                        } else {
                            table.reload('currentTableId', {
                                url: "{{route('advertising_list')}}",
                            });
                        }
                    } else {
                        layer.msg(res.msg, {icon: 5});
                    }
                });
            }

            // 监听搜索操作
            form.on('submit(data-search-btn)', function (data) {
                //执行搜索重载
                table.reload('currentTableId', {
                    url: "{{route('advertising_list')}}",
                    page: {curr: 1},
                    where: data.field
                });

                return false;
            });

            form.on('switch(isShow)', function (obj) {
                layer.load(1, {
                    icon: 2,
                    shade: 0.8
                });
                advShow(this.value, (obj.elem.checked) ? 1 : 0, '');
            });

            function advShow(id, status, password) {
                $.get("{{route('advertising_show')}}", {id: id, status: status, password: password}, function (res) {
                    layer.closeAll();
                    if (0 === res.code) {
                        layer.msg('操作成功', {icon: 6});
                    } else if (1 === res.code) {
                        layer.prompt({
                            title: '密码',
                            btn: ['确定'],
                            cancel: function(){
                                //执行搜索重载
                                table.reload('currentTableId', {
                                    url: "{{route('advertising_list')}}",
                                });
                            }
                        }, function (value) {
                            layer.load(1, {
                                icon: 2,
                                shade: 0.8
                            });
                            advShow(id, status, value);
                        });
                    } else {
                        layer.msg(res.msg, {icon: 5});
                        //执行搜索重载
                        table.reload('currentTableId', {
                            url: "{{route('advertising_list')}}",
                        });
                    }
                });
            }

            // 监听添加操作
            function set_add(){
                layer.open({
                    type: 2,
                    title: false,
                    shade: 0.8,
                    area: ['60%', '60%'],
                    content: "{{route('advertising_add')}}",
                    cancel: function () {
                        //执行搜索重载
                        table.reload('currentTableId', {
                            url: "{{route('advertising_list')}}",
                            page: {curr: 1},
                        });
                    }
                });
            }


            {{--$(".data-add-btn").on("click", function () {--}}
            {{--    layer.open({--}}
            {{--        type: 2,--}}
            {{--        title: false,--}}
            {{--        shade: 0.8,--}}
            {{--        area: ['60%', '60%'],--}}
            {{--        content: "{{route('advertising_add')}}",--}}
            {{--        cancel: function () {--}}
            {{--            //执行搜索重载--}}
            {{--            table.reload('currentTableId', {--}}
            {{--                url: "{{route('advertising_list')}}",--}}
            {{--                page: {curr: 1},--}}
            {{--            });--}}
            {{--        }--}}
            {{--    });--}}

            {{--});--}}


            // 监听删除操作
            // $(".data-delete-btn").on("click", function () {
            //     var checkStatus = table.checkStatus('currentTableId')
            //         , data = checkStatus.data;
            //     layer.alert(JSON.stringify(data));
            // });

            //监听表格复选框选择
            /*table.on('checkbox(currentTableFilter)', function (obj) {
                console.log(obj)
            });*/

            table.on('tool(currentTableFilter)', function (obj) {
                if (obj.event === 'edit') {
                    layer.open({
                        type: 2,
                        title: false,
                        shade: 0.8,
                        area: ['60%', '60%'],
                        content: "{{route('advertising_edit')}}?id=" + obj.data['id'],
                        cancel: function () {
                            //执行搜索重载
                            table.reload('currentTableId', {
                                url: "{{route('advertising_list')}}",
                            });
                        }
                    });
                } else if (obj.event === 'delete') {
                    let index1 = layer.confirm('是否确认删除?', function () {
                        layer.close(index1);
                        let index2 = layer.load(1, {
                            icon: 2,
                            shade: 0.8
                        });
                        $.get("{{route('advertising_del')}}", {'id': obj.data['id']}, function (data) {
                            if (data.code === 0) {
                                // layer.msg('修改成功', {icon: 6});
                                obj.del();
                                layer.close(index2);
                            } else {
                                layer.msg(data.msg, {icon: 5});
                            }
                            layer.closeAll();
                        });
                    });
                }
            });

        });
    </script>
@endsection
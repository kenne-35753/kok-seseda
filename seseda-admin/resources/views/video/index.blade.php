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
                                        <option value="9999">未分配站点</option>
                                        @foreach($sites as $item)
                                            <option value="{{$item->id}}">{{$item->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">类型</label>
                                <div class="layui-input-inline">
                                    <select name="category_id" lay-filter="aihao">
                                        <option value="0">请选择</option>
                                        <option value="9999">未选择分类</option>
                                        @foreach($category as $item)
                                            <option value="{{$item->id}}">{{$item->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">标签</label>
                                <div class="layui-input-inline">
                                    <select name="label" lay-verify="required" lay-search="">
                                        <option value="0">请选择</option>
                                        @foreach($label as $item)
                                            <option value="{{$item->id}}">{{$item->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="layui-inline">
                                <label class="layui-form-label">状态</label>
                                <div class="layui-input-inline">
                                    <select name="status" lay-filter="aihao">
                                        <option value="0">请选择</option>
                                        <option value="1">待审核</option>
                                        <option value="2">已上架</option>
                                        <option value="3">已下架</option>
                                    </select>
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
                                <label class="layui-form-label">视频</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="video" autocomplete="off" placeholder="请输入链接"
                                           class="layui-input">
                                </div>
                            </div>
                            {{--<div class="layui-inline">
                                <label class="layui-form-label">标签</label>
                                <div class="layui-input-inline">
                                    <input type="text" name="label" autocomplete="off" placeholder="请输入标签"
                                           class="layui-input">
                                </div>
                            </div>--}}
                            <div class="layui-inline">
                                <a class="layui-btn" lay-submit="" lay-filter="data-search-btn">搜索</a>
                                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                            </div>
                        </div>
                    </form>
                </div>
            </fieldset>

            <div class="layui-btn-group">
            </div>
            <table class="layui-hide" id="currentTableId" lay-filter="currentTableFilter"></table>
            <script type="text/html" id="currentTableBar">
                <a title="标签" lay-event="label"><i class="layui-icon layui-icon-note" style="font-size: 24px"></i></a>
                <a title="编辑" lay-event="edit"><i class="layui-icon" style="font-size: 24px">&#xe642;</i></a>
            </script>
        </div>
    </div>

    <script>
        document.getElementsByClassName('daohang')[1].classList.add('layui-this');

        layui.use(['form', 'table', 'laydate', 'jquery'], function () {
            var $ = layui.jquery,
                form = layui.form,
                table = layui.table;

            table.render({
                elem: '#currentTableId',
                url: "{{route('video_list')}}",
                cols: [[
                    {type: "checkbox", width: 50, fixed: "left"},
                    {field: 'id', title: 'ID', width: 100, sort: true},
                    {field: 'site', title: '站点', width: 150},
                    {field: 'category', title: '类型', width: 150},
                    {field: 'title', title: '标题'},
                    {
                        field: 'image', title: '图片', event: 'image', width: 150, templet: function (data) {
                            return '<div class="image_' + data.id + '"><img layer-src="' + data.image + '" src="' + data.image + '"></div>';
                        }
                    },
                    {
                        field: 'video', title: '视频', event: 'video', width: 100, templet: function () {
                            return '<i class="layui-icon layui-icon-play"></i>';
                        }
                    },
                    {field: 'time_long', title: '时长', width: 100},
                    {field: 'update_time', title: '更新时间', width: 100},
                    {
                        field: 'status', title: '状态', width: 240, templet: function (data) {
                            let checked1 = checked2 = checked3 = '';
                            switch (data.status) {
                                case 1:
                                    checked1 = 'checked';
                                    break;
                                case 2:
                                    checked2 = 'checked';
                                    break;
                                case 3:
                                    checked3 = 'checked';
                                    break;
                            }
                            return '<input type="radio" name="status' + data.id + '" value="' + data.id + '" lay-filter="status2" title="已上架" ' + checked2 + '>\n' +
                                '<input type="radio" name="status' + data.id + '" value="' + data.id + '" lay-filter="status3" title="已下架" ' + checked3 + '>\n' +
                                '<input type="radio" name="status' + data.id + '" value="' + data.id + '" lay-filter="status" title="待审核" ' + checked1 + ' disabled="">\n';
                        }
                    },
                    {title: '操作', width: 100, templet: '#currentTableBar', fixed: "right", align: "center"}
                ]],
                toolbar: '<div class="layui-table-tool">\n' +
                    '        <div class="layui-table-tool-temp">\n' +
                    '<button class="layui-btn layui-btn-sm" lay-event="shangJia">上架</button>' +
                    '<button class="layui-btn layui-btn-sm" lay-event="xiaJia">下架</button>' +
                    '        </div>\n' +
                    '        <div class="layui-table-tool-self">\n' +
                    '            <div class="layui-inline" title="筛选列" lay-event="LAYTABLE_COLS"><i class="layui-icon layui-icon-cols"></i></div>\n' +
                    '            <div class="layui-inline" title="导出" lay-event="LAYTABLE_EXPORT"><i class="layui-icon layui-icon-export"></i></div>\n' +
                    '            <div class="layui-inline" title="打印" lay-event="LAYTABLE_PRINT"><i class="layui-icon layui-icon-print"></i></div>\n' +
                    '        </div>\n' +
                    '    </div>',
                page: true,
                limit: 20,
                limits: [20, 50, 100, 200, 500, 1000],
                done: function (res, curr, count) {
                    $(res.data).each(function (k, v) {
                        if (3 === v.status) {
                            $('.layui-table-main tr[data-index=' + v.LAY_TABLE_INDEX + ']').css({'backgroundColor': 'antiquewhite'});
                        }
                    });
                }
            });

            //头工具栏事件
            table.on('toolbar(currentTableFilter)', function (obj) {
                var checkStatus = table.checkStatus(obj.config.id);
                let ids = [];
                $(checkStatus.data).each(function (k, v) {
                    ids.push(v.id)
                });
                if (0 === ids.length) {
                    layer.alert('未勾选操作记录');
                    return false;
                }
                switch (obj.event) {
                    case 'shangJia':
                        setStatus(ids.join(','), 2, 2);
                        break;
                    case 'xiaJia':
                        setStatus(ids.join(','), 3, 2);
                        break;
                }
            });
            form.on('radio(status2)', function (obj) {
                setStatus(obj.value, 2, 1);

                $(this).parents('tr').css({'backgroundColor': '#ffffff'});
            });
            form.on('radio(status3)', function (obj) {
                setStatus(obj.value, 3, 1);

                $(this).parents('tr').css({'backgroundColor': 'antiquewhite'});
            });

            function setStatus(id, status, type) {
                let status_index = layer.load(1, {
                    icon: 2,
                    shade: 0.8
                });
                $.get("{{route('video_status_update')}}", {id: id, status: status}, function (res) {
                    layer.close(status_index);
                    if (0 === res.code) {
                        if (1 === type) {
                            layer.msg('操作成功', {icon: 6});
                        } else {
                            table.reload('currentTableId', {
                                url: "{{route('video_list')}}",
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
                    url: "{{route('video_list')}}",
                    page: {curr: 1},
                    where: data.field
                });

                return false;
            });

            table.on('tool(currentTableFilter)', function (obj) {
                switch (obj.event) {
                    case 'edit':
                        layer.open({
                            type: 2,
                            title: false,
                            shade: 0.8,
                            area: ['60%', '70%'],
                            content: "{{route('video_edit')}}?id=" + obj.data['id'],
                            cancel: function () {
                                //执行搜索重载
                                // table.reload('currentTableId', {
                                {{--    url: "{{route('video_list')}}",--}}
                                // });
                                $.get("{{route('video_detailed')}}?id=" + obj.data['id'], function (res) {
                                    console.log(res);
                                    if (0 === res.code) {
                                        obj.update({
                                            site: res.data.site,
                                            category: res.data.category,
                                            title: res.data.title,
                                            image: res.data.image,
                                            time_long: res.data.time_long,
                                            status: res.data.status
                                        });
                                    }
                                });
                            }
                        });
                        break;
                    case 'image':
                        layer.open({
                            type: 1,
                            title: false,
                            area: ['60%', '60%'],
                            content: "<img src='" + obj.data['image'] + "' style='width:100%;height:100%;'>"
                        });
                        break;
                    case 'video':
                        layer.open({
                            type: 2,
                            title: false,
                            area: ['60%', '60%'],
                            content: "{{route('video_play')}}?url=" + obj.data['video']
                        });
                        break;
                    case 'label':
                        layer.open({
                            type: 2,
                            title: false,
                            area: ['80%', '80%'],
                            content: "{{route('video_label_index')}}?id=" + obj.data.id,
                            cancel: function () {
                                //执行搜索重载
                                table.reload('currentTableId', {
                                    url: "{{route('video_list')}}",
                                });
                            }
                        });
                        break;
                }
            });
        });
    </script>
@endsection

let num = 0;
let array = {};
let parameter = location.search.split('$')[1] || 0;
let api = '';
//分类获取传过来的
if (parameter) {
    parameter = unescape($.base64.decode(parameter));
    parameter = parameter.split('$');
} else{
    $('#tagTitle').text(decodeURI(location.search.split('=')[1]));
}
categoryVideoFun(1, parameter[0]);

function categoryVideoFun(page, Id) {
    $('#tagTitle').text(parameter[1]);
    array = {
        'page': page,
        'site_id':site_id
    }
    if(parameter[2] == 'dhl'){ //分类获取视频
        document.querySelectorAll(`[data_id="${parameter[0]}"]`)[0].className= classNames;
        array.category = Id;
        api = apiSuffix.vType;
    } else if(parameter[2] == 'bq'){  // 标签
        array.label_id = Id;
        api = apiSuffix.vLabel;
    } else if(location.search.indexOf('keyword') !== -1){ //搜索视频
        array.keyword = decodeURI(location.search.split('=')[1])
        api = apiSuffix.vSearch;
    } else if(location.search.indexOf('hotVideo') !== -1){ // 热门视频
        $('#hot').addClass(classNames)
        api = apiSuffix.vHot;
        array.all = 1;
    } else if(location.search.indexOf('newVideo') !== -1){ // 新的视频
        $('#new').addClass(classNames)
        api = apiSuffix.vLatest;
        array.all = 1;
    } else if(location.search.indexOf('recommendVideo') !== -1){ // 推荐视频
        $('#recommend').addClass(classNames)
        api = apiSuffix.vRecommended;
        array.all = 1;
    }
    $.post(api, array, function (data) {
        if (isMobile === 0) { //PC
            if (data.code == 0 && data.data.count > 0) {
                let dataList = data.data;
                videoFun(dataList.list); //视频列表
                num += 1;
                if (num <= 1) {
                    pageFun(page, Math.ceil(dataList.count / dataList.list.length), Id); //分页
                }
            } else {
                $(".index_row").empty().append('<li style="list-style-type:none;" class="no-content"><img src="/image/common/no-search.png" alt=""><p>抱歉，未搜所到相关内容～</p></li>');
            }
        } else { //手机
            dropdownVideo(page, parameter[0], data,api)
        }
    });
}
// 手机下拉
function dropdownVideo(page, categoryId, data,api) {
    if (page === 1) {
        videoList(data);
    }
    $('.index_row').dropload({
        scrollArea: window,
        loadUpFn: function (me) {
            $.post(api, array, function (data) {
                $('#videoList').empty();
                videoList(data);
                me.resetload();
            })
        },
        loadDownFn: function (me) {
            array.page++;
            $.post(api,array, function (data) {
                videoList(data);
                // 每次数据加载完，必须重置
                me.resetload();
            })
        }
    });
}

//手机视频列表
function videoList(data) {
    let videoList = $('#videoList')
    if (data.data) {
        data.data.list.forEach(vd => {
            let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
            + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] 
            + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
            videoList.append(`
                <div style="padding: 0px 0px 0px 0px;">
                    <div class="img-container">
                        <a href="../../mobile/video_player.html?dt=${dt}" class="atfib">
                            <img src="${vd.server}${vd.img}" id="slide92954"
                                alt="An alternative little hole" />
                        </a>
                    </div>
                    <div title="${vd.title}" style="padding: 12px 12px 0 12px;">
                        <h2 style="margin-bottom: 0px;">${vd.title}</h2>
                    </div>
                    <div style="padding: 6px 12px 42px 12px;font-size:14px;">
                        <span class="meta_data">
                            <i class="fa fa-clock-o" aria-hidden="true"></i>
                            ${vd.timelong}</span>
                        <span class="meta_data" id="slideShowPlayBtn92954">
                            <span class="idle">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                <a href="#" style="color: rgb(77, 102, 90);" class="click-trigger">${vd.visit}</a>
                            </span>
                            <span class="loading" style="display:none">
                                <i class="fa fa-circle-o-notch fa-spin fa-fw"></i>
                                loading...
                            </span>
                            <span class="playing" style="display:none">
                                <i class="fa fa-cog fa-spin fa-fw"></i>
                                playing...
                            </span>
                        </span>
                    </div>
                </div>
            `);
        });
    }

}

//PC视频列表
function videoFun(data) {
    let indexRow = $('.index_row');
    indexRow.empty();
    data.forEach(vd => {
        let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
        + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] 
        + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
        indexRow.append(`
            <div class="6u index_6u">
                <section class="box feature">
                        <a href="../../video_player.html?dt=${dt}"
                        class="image featured non-overlay atfib" style="margin: 0;">
                            <img id="cover_92927" src="${vd.server}${vd.img}"
                                alt="ass that everyone will be happy to fuck" />
                        </a>
                        <div id="span-case">
                            <h3 class="meta-data-title" title="${vd.title}"><a
                                href="javascript:;" class="click-trigger">${vd.title}</a></h3>
                            <span class="icon fa-clock-o meta-data">${vd.timelong}</span>
                        </div>
                </section>
            </div>
    `);
    });
}

function pageFun(pageNo, totalSize, categoryId) {
    $('#pageList').Paging({
        pagesize: pageNo,
        count: totalSize,
        callback: function (pageNo) { // 点击分页回调
            let data = categoryVideoFun(pageNo, parameter[0])
        }
    });

}
let num = 0;
let array_type_type = {};
let parameter = location.search.split('$')[1] || 0;
let api = '';
let typeId = '';
//分类获取传过来的
if (parameter) {
    parameter = unescape($.base64.decode(parameter));
    parameter = parameter.split('$');
    console.log(parameter)
    typeId = parameter[0];
    $('#tagTitle').text(parameter[1]);
} else{
    $('#tagTitle').text(decodeURI(location.search.split('=')[1]));
}
categoryVideoFun(1, typeId);

function categoryVideoFun(page, Id) {
    if(isMobile === 0){
        let navtext = $(`#nav${typeId} a`).text();
        let navtexts = $(`#${location.search.split('=')[0].replace('?','') } a`).text();
        $(`#${location.search.split('=')[0].replace('?','')}`).replaceWith('<li><span>'+navtexts+'</span></li>');
        $(`#nav${typeId}`).replaceWith('<li><span>'+navtext+'</span></li>');
    }
    array_type = {
        'page': page,
        'site_id':site_id
    }
    if(parameter[2] == 'dhl'){ //分类获取视频
        array_type.category = Id;
        api = apiSuffix.vType;
    } else if(parameter[2] == 'bq'){  // 标签
        array_type.label_id = Id;
        api = apiSuffix.vLabel;
    } else if(location.search.indexOf('keyword') !== -1){ //搜索视频
        array_type.keyword = decodeURI(location.search.split('=')[1])
        api = apiSuffix.vSearch;
    } else if(location.search.indexOf('vHot') !== -1){ // 热门视频
        api = apiSuffix.vHot;
        array_type.all = 1;
    } else if(location.search.indexOf('vNew') !== -1){ // 新的视频
        api = apiSuffix.vLatest;
        array_type.all = 1;
    } else if(location.search.indexOf('vRecommend') !== -1){ // 推荐视频
        api = apiSuffix.vRecommended;
        array_type.all = 1;
    }
    $.post(api, array_type, function (data) {
            if (data.code == 0) {
                let dataList = data.data;
                videoFun(dataList.list); //视频列表
                num += 1;
                if (num <= 1) {
                    pageFun(page, Math.ceil(dataList.count / dataList.list.length), Id); //分页
                }
            } else {
                $('.not_data').show();
            }
    });
}


//视频列表
function videoFun(data) {
    let videoType = $('#videoType');
    videoType.empty();
    if(data.length>0){
        data.forEach(vd => {
            let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
            + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] 
            + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
            videoType.append(`
                    <div class="thumb" itemscope>
                        <a href="../video_player.html?dt=${dt}">
                            <span class="img">
                                <img src="${vd.server}${vd.img}">
                                <span itemprop="duration" class="length">
                                ${vd.timelong}
                                </span>
                            </span>
                            <span class="thumb-info">
                                <b itemprop="name" title="${vd.title}">${vd.title}</b>
                                <meta itemprop="datePublished">
                                <span class="views">${vd.visit} Views </span>
                                <span class="item-rating">Porn Rating <span>100%</span></span>
                            </span>
                        </a>
                    </div>
                `);
        });
    }else{
        $('.paging-area').html('没有数据！');
        $('.paging-area').css('font-size','24px')
    }
}

function pageFun(pageNo, totalSize, categoryId) {
    $('#pageList').Paging({
        pagesize: pageNo,
        count: totalSize,
        callback: function (pageNo) { // 点击分页回调
            let data = categoryVideoFun(pageNo, typeId)
        }
    });

}
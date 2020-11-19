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
    $('#navText').text(`【${parameter[1]}】 的视频`);
} else{
    $('#navText').text(`【${decodeURI(location.search.split('=')[1])}】 的视频`);
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
            let timelong = ''
                if(vd.timelong !== '' && vd.timelong != null){
                    timelong = ` <div class="absolute-bottom-right"><span class="label">${vd.timelong}</span></div>`
            }
            videoType.append(`
            <div class="col-6 col-sm-4 col-lg-3">
            <div class="video-img-box mb-e-20">
                <div class="img-box cover-md">
                    <a href="../../video_player.html?dt=${dt}">
                        <img class="lazyload"
                            src="../images/placeholder-md.jpg"
                            data-src="${vd.server}${vd.img}">
                        <div class="absolute-bottom-left">
                            <span class="action hover-state d-none d-sm-flex" data-fav-video-id="2121"
                                data-fav-type="0">
                                <svg height="15" width="15">
                                    <use xlink:href="#icon-heart"></use>
                                </svg>
                            </span>
                        </div>
                        ${timelong}
                    </a>
                </div>
                <div class="detail">
                    <h6 class="title" title="${vd.title}">
                        <a href="../../video_player.html?dt=${dt}">${vd.title}
                        </a>
                    </h6>
                    <p class="sub-title">
                        <svg class="mr-1" height="15" width="15">
                            <use xlink:href="#icon-eye"></use>
                        </svg>${vd.visit}
                        | <span class="tag_s" title="${vd.tags}">&nbsp;${vd.tags}</span>
                    </p>
                </div>
            </div>
        </div>
                `);
        });
    }else{
        $('#pageList').hide();
        $('.not_data').show();
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
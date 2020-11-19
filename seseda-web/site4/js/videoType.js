let num = 0;
let array_type = {};
let parameter = location.search.split('$')[1] || 0;
let api = '';
let typeId = '';
//分类获取传过来的
if (parameter) {
    parameter = unescape($.base64.decode(parameter));
    parameter = parameter.split('$');
    console.log(parameter)
    typeId = parameter[0];
    $(`#nav${typeId}`).css('color','#eb2c33')
    $('#tagtitle').text(parameter[1])
} else{
    let title = location.search.split('=');
    $(`#${title[0].replace('?','')}`).css('color','#eb2c33')
    $('#tagtitle').text(decodeURI(title[1]));

}
categoryVideoFun(1, typeId);

function categoryVideoFun(page, Id) {
    if(isMobile === 0){
        let navtext = $(`#nav${typeId} a`).text();
        let navtexts = $(`#${location.search.split('=')[0].replace('?','') } a`).text();
        // $(`#${location.search.split('=')[0].replace('?','')}`).replaceWith('<li><span>'+navtexts+'</span></li>');
        // $(`#nav${typeId}`).replaceWith('<li><span>'+navtext+'</span></li>');
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
            <article class="pinbox">
            <div
                class="post-28041 post type-post status-publish format-standard has-post-thumbnail hentry category-medium-tits category-teens tag-blowjob tag-brunette tag-creampie tag-deep-throat tag-masturbation tag-natural-tits tag-pussy-licking tag-shaved-pussy tag-step-sister tag-toys pornstars-logan-long pornstars-maya-bijou producers-spy-fam series-unknown release_year-4707 duration-1598 where-bedroom">
                <div class="preview">
                    <p class="thumb">
                        <div id="i28041" class="playpreview"
                            onclick=""
                            data-cf-modified-ce492eb7976f05e76b824222-=""></div>
                        <div id="l28041" class="loading2"></div> <a
                            href="../video_player.html?dt=${dt}"> <img
                                id="28041"
                                src="${vd.server}${vd.img}"
                                width="350" height="197" alt="Stepsister Forced To Cum By Insane Sex Toy"> </a>
                    </p>
                </div>
                <div class="title">
                    <h3 class="title-2" title="${vd.title}"><a
                    href="../video_player.html?dt=${dt}">
                            ${vd.title}</a></h3>
                </div>
                <div
                    style="padding: 0px 10px 3px; color: #8a8a8a; text-align: center; font-size: 13px; font-weight: 400;">
                    <img src="../images/views.png" alt="Views"
                        style="margin-top: 2.3px; margin-right: 4px;">${vd.visit} Views</div>
                <div class="meta-data">
                    <ul class="clearfix">
                        <li class="border-color-1 empty">&nbsp;</li>
                        <li class="border-color-2 empty">&nbsp;</li>
                    </ul>
                </div>
            </div>
        </article>
                `);
        });
    }else{
        $('#pageList').hide();
        $('#recentlyUploaded').text('没有数据！')
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
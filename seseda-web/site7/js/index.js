function videoHome(divId,api){
    $.get(api, {
        'site_id': site_id,
        'all' : 1,
        'page': 1
    }, function (result) {
        if (result['code'] == 0) {
            result.data.list.forEach((vd,index) => {
                let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                if(index < 15){
                    divId.append(`
                    <div class="item">
                <a href="../video_player.html?dt=${dt}" title="HOT GIRL GIRL SHOW">
                    <div class="img">
                        <img class="thumb lazy-load"
                            src="${vd.server}${vd.img}"
                            alt="HOT GIRL GIRL SHOW" data-cnt="5" width="220" height="165" />
                        <span class="ico-fav-0 " title="Add to favorites" data-fav-video-id="4662"
                            data-fav-type="0"></span>
                        <span class="ico-fav-1 " title="Watch Later" data-fav-video-id="4662"
                            data-fav-type="1"></span>
                    </div>
                    <strong class="title" title="${vd.title}">
                        ${vd.title}
                    </strong>
                    <div class="wrap">
                        <div class="duration">${vd.timelong}</div>

                        <div class="rating positive">${vd.visit}</div>

                    </div>
                </a>
            </div>
                    `);
                }
            });
        }
    });
}

//热门视频
videoHome($('#hotVideo'),apiSuffix.vHot);
$('.vMoreDiv').eq(0).click(function(){
    $('.vMoreDiv').eq(0).find('a').attr("href",`videoType.html?vHot=热门`);
})

//更新视频
videoHome($('#newVideo'),apiSuffix.vLatest);
$('.vMoreDiv').eq(1).click(function(){
    $('.vMoreDiv').eq(1).find('a').attr("href",`videoType.html?vNew=更新`);
})

//推荐视频
videoHome($('#recommendVideo'),apiSuffix.vRecommended);
$('.vMoreDiv').eq(2).click(function(){
    $('.vMoreDiv').eq(2).find('a').attr("href",`videoType.html?vRecommend=推荐`);

})

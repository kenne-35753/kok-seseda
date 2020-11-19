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
                if(index < 8){
                        divId.append(`
                        <div class="col-md-3 col-sm-6 col-xs-6">
                            <div class="video-item">
                                <div class="featured-content-image">
                                    <a href="../../video_player.html?dt=${dt}">
                                        <img class="lazy" referrerpolicy="no-referrer" src="${vd.server}${vd.img}">
                                                <div class="link-overlay">
                                                </div>
                                    </a>
                                <span class="model-view">${vd.visit} Views</span></div>
                            </div>
                            <div class="entry-title">
                                <a href="../../video_player.html?dt=${dt}" rel="nofollow">${vd.title}</a>
                            </div>
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
    $('.vMoreDiv').eq(0).find('a').attr("href",`videoType.html?hotVideo=热门`);
})

//更新视频
videoHome($('#newVideo'),apiSuffix.vLatest);
$('.vMoreDiv').eq(1).click(function(){
    $('.vMoreDiv').eq(1).find('a').attr("href",`videoType.html?newVideo=更新`);
})

//推荐视频
videoHome($('#recommendVideo'),apiSuffix.vRecommended);
$('.vMoreDiv').eq(2).click(function(){
    $('.vMoreDiv').eq(2).find('a').attr("href",`videoType.html?recommendVideo=推荐`);

})
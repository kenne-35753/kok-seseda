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
                    <div class="thumb pimp-thumb">
                    <a href="../../video_player.html?dt=${dt}">
                        <span class="img">
                        <img class="lazy" src="${vd.server}${vd.img}"
                                        alt="Too Intense Sucking And Fucking" width="145" height="105">
                                        <span class="length">${vd.timelong}</span><span class="hd">HD</span></span>
                                        <span class="thumb-info"><b>${vd.title}</b></span>
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

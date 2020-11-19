
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
                let timelong = ''
                if(vd.timelong != ''){
                    timelong = `<span class="videoBox-time">${vd.timelong}</span>`
                }
                if(index < 8){
                        divId.append(`
                    <div class="col-style d-4 m-2 lazy loaded"><a href="../video_player.html?dt=${dt}" class="videoBox">
                        <div class="videoBox_wrap">
                            <div class="videoBox-cover"
                                style="background-image: url(&quot;${vd.server}${vd.img}&quot;);">
                            </div> <span class="video-tag free">免费</span> ${timelong}
                        </div>
                        <div class="videoBox-info"><span class="title" title="${vd.title}">${vd.title}</span>
                        </div>
                        <div class="videoBox-action"><span class="views"><i class="fa fa-eye"></i><span
                                    class="number">${vd.visit}</span><p class="number tags"> | ${vd.tags}</p></span> </div>
                    </a></div>
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

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
                let timelong = '';
                if(vd.timelong != ''){
                    timelong = `<div class="duration ico time">${vd.timelong}</div>`;
                }
                if(index < 12){
                    divId.append(`
                    <div class="item i-store-item  " data-id="141374">
                    <a href="../video_player.html?dt=${dt}"
                        title="Japanese swimsuit fuck in shower">
                        <div class="img">
                            <img class="thumb EoCk7"
                                src="${vd.server}${vd.img}"
                                alt="Japanese swimsuit fuck in shower" data-cnt="28" width="240"
                                height="180" data-sgid="1" data-video-id="141374">
                        </div>
                        <strong class="title">
                                ${vd.title}
                        </strong>
                        <div class="wrap">
                            ${timelong}
                            <div class="views ico ico-eye">${vd.visit}</div>
                        </div>
                        <div class="tags" style="color:#000"><p>${vd.tags}</p></div>
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

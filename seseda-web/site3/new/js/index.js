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
                if(index < 12){
                    if (isMobile === 0) {
                        divId.append(`
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
                    }else{
                        divId.append(`
                        <div class="indexVideo" style="padding: 0px 0px 0px 0px;">
                            <div class="img-container">
                                <a href="../../mobile/video_player.html?dt=${dt}" class="atfib">
                                    <img src="${vd.server}${vd.img}" id="slide92954"
                                        alt="An alternative little hole" />
                                </a>
                            </div>
                            <div title="${vd.title}" style="padding: 12px 12px 0 12px;">
                                <p class="videoTitle" style="margin-bottom: 0px;">${vd.title}</p>
                            </div>
                            <div style="padding: 6px 12px 5px 12px;font-size:14px;">
                                <span class="meta_data">
                                    <i class="fa fa-clock-o" aria-hidden="true"></i> ${vd.timelong}
                                </span>
                                <span class="meta_data">
                                    <i class="fa fa-eye" aria-hidden="true"></i> ${vd.visit}
                                </span>
                                <span class="meta_data" id="slideShowPlayBtn92954">
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
                    }
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
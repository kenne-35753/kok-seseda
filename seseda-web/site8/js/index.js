//首页 轮播
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



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
                let titleId = $('#owl-carousel .item'); //推荐视频
                if(divId === 1){
                    if(index < 10){
                        titleId.eq(index).append(`
                            <a class="img_post icont icon_kiss" href="../video_player.html?dt=${dt}">
                                <img class="img" src="${vd.server}${vd.img}" data-reload="3">
                            </a>
                        `);
                        titleId.eq(index+10).append(`
                            <a class="img_post icont icon_kiss" href="../video_player.html?dt=${dt}">
                                <img class="img" src="${vd.server}${vd.img}" data-reload="3">
                            </a>
                        `);
                    }
                } else {
                    if(index < 12){
                        divId.append(`
                            <div class="grid_item">
                            <a class="link" href="../video_player.html?dt=${dt}">
                            <div class="img_post icont icon_kiss">
                                <span class="info_lable">
                                <i class="info-item">HD</i> </span>
                                <img class="img" src="${vd.server}${vd.img}" data-reload="3">
                            </div>
                            <p class="description" title="${vd.title}"><span class="span"></span>${vd.title}</p>
                            <div class="inform">
                                <span class="num">${vd.tags}</span>
                                <span class="icon-eye-open"> ${vd.visit}</span>
                            </div>
                            </a>
                        </div>
                        `)
                    }
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
videoHome(1,apiSuffix.vRecommended);
$('.vMoreDiv').eq(2).click(function(){
    $('.vMoreDiv').eq(2).find('a').attr("href",`videoType.html?vRecommend=推荐`);

})



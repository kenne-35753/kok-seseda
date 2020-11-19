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

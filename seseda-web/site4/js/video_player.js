let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    console.log(dts[0])
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4]+dts[5];
        $('#timelong').text(dts[6])
        console.log(dts[6])
        $('#visit').text(dts[7])
		const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
		if (!Hls.isSupported()) {
			video.src = source;
		} else {
			const hls = new Hls();
			hls.loadSource(source);
			hls.attachMedia(video);
			window.hls = hls;
			player.on('languagechange', () => {
				setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
			});
		}
		window.player = player;
	});
    $('.video_title').text(dts[2])

    $.get(apiSuffix.vWatch, {
        'video_id': dts[3],
        'site_id': site_id
    }, function (data) {
    })
    getLinkVideo();
    //猜你喜欢
    function getLinkVideo() {
        let likeRight = $('#like_right');
        let bottomVideo = $('#bottomVideo');
        $.get(apiSuffix.vLink, {
            'id': dts[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    if(vd.timelong != '' && vd.timelong !=null){
                        timelong = `<img
                        src="../images/duration.png"
                        style="margin-left: 20px; margin-right: 5px" title="duration">${vd.timelong}`
                    }
                    if (index < 7) {
                        likeRight.append(`
                    <article class="pinbox">
                        <div class="preview">
                            <p class="thumb">
                                <div id="i8715" class="playpreview"
                                    data-cf-modified-3e2d4b634c32fdd33ddbce58-=""></div>
                                <div id="l8715" class="loading2"></div> <a
                                    href="../video_player.html?dt=${dt}"> <img id="8715"
                                    src="${vd.server}${vd.img}"
                                        width="350" height="197" alt="Lexi Lore Hot Shower"> </a>
                            </p>
                        </div>
                        <div class="title">
                            <h2 class="title-2"><a href="https://netfapx.com/lexi-lore-hot-shower/"
                                    title="Lexi Lore Hot Shower">${vd.title}</a></h2>
                        </div>
                        <div
                            style="padding: 0px 10px 3px; color: #8a8a8a; text-align: center; font-size: 13px; font-weight: 400;">
                            <img src="../images/views.png"
                                style="margin-top: 2.3px; margin-right: 4px;">${vd.visit} Views ${timelong}</div>
                    </article>
                    `);
                    } else {
                        bottomVideo.append(`
                    <article class="pinbox">
					<div
						class="post-28041 post type-post status-publish format-standard has-post-thumbnail hentry category-medium-tits category-teens tag-blowjob tag-brunette tag-creampie tag-deep-throat tag-masturbation tag-natural-tits tag-pussy-licking tag-shaved-pussy tag-step-sister tag-toys pornstars-logan-long pornstars-maya-bijou producers-spy-fam series-unknown release_year-4707 duration-1598 where-bedroom">
						<div class="preview">
							<p class="thumb">
								<div id="i28041" class="playpreview"
									data-cf-modified-ce492eb7976f05e76b824222-=""></div>
								<div id="l28041" class="loading2"></div> <a
									href="../video_player.html?dt=${dt}"> <img
										id="28041"
										src="${vd.server}${vd.img}"  class="bottomVideoimg"
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
								style="margin-top: 2.3px; margin-right: 4px;">${vd.visit} Views ${timelong}</div>
						<div class="meta-data">
							<ul class="clearfix">
								<li class="border-color-1 empty">&nbsp;</li>
								<li class="border-color-2 empty">&nbsp;</li>
							</ul>
						</div>
					</div>
				</article>
                    `)
                    }
                });
            } else {
                bottomVideo.html('<p style="width: 100%;text-align: center;font-size: 18px;">没有数据！</p>');
            }
        })
    }
}
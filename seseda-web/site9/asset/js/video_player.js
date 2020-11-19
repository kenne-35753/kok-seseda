let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4]+dts[5];
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
        let likeVideo = $('#likeVideo');
        $.get(BaseURL + "getLinkVideo", {
            'id': dts[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags'] + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] + vd['img']);
                    likeVideo.append(`
                    <div class="col-md-3 col-sm-6 col-xs-6">
                        <div class="video-item">
                            <div class="video-image"> <a href="../../video_player.html?dt=${dt}"
                                    rel="nofollow"><img class="lazy" referrerpolicy="no-referrer"
                                    src="${vd.server}${vd.img}"
                                        alt="FC2PPV-1128519">
                                    <div class="link-overlay"></div>
                                </a> <span class="model-view">${vd.visit} Views</span> </div>
                            <div class="entry-title"> <a title="FC2PPV-1128519"
                                    href="../../94372/fc2ppv_1128519/index.html">${vd.title}</a>
                            </div>
                        </div>
                    </div>
                    `)
                });
            } else {
                likeVideo.html(`
                    <p style="width: 100%;text-align: center;font-size: 18px;height: 35px;line-height: 35px;color: #fff;margin-top: 10px;font-weight: bold;">
                        没有相关数据！
                    </p>
                `);
            }
        })
    }
}
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
        let likeVideo = $('#list_videos_related_videos_items');
        $.get(apiSuffix.vLink, {
            'id': dts[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    likeVideo.append(`
                    <div class="item  ">
                <a href="../video_player.html?dt=${dt}" title="She Putting In Work">
                    <div class="img">
                        <img class="thumb lazy-load"
                            src="${vd.server}${vd.img}"
                            alt="She Putting In Work" data-cnt="5" width="220" height="165" />
                        <span class="ico-fav-0 " title="Add to favorites" data-fav-video-id="73"
                            data-fav-type="0"></span>
                        <span class="ico-fav-1 " title="Watch Later" data-fav-video-id="73"
                            data-fav-type="1"></span>
                        <span class="ico-hd "></span>
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
                    `)
                });
            } else {
                likeVideo.html(`
                    <p style="width: 100%;text-align: center;font-size: 18px;height: 35px;line-height: 35px;color: #345a81;margin-top: 10px;">
                        没有相关数据！
                    </p>
                `);
            }
        })
    }
}
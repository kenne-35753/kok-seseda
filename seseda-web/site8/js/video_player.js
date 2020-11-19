let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4]+dts[5];
        $('#videoImg').attr('src',dts[4]+dts[5])
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
            if(data.data.length>0){
                if (data['code'] == 0) {
                    data.data.forEach((vd, index) => {
                        let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                        + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                        + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                        likeVideo.append(`
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
                    });
                }
            } else {
                likeVideo.replaceWith(`<div style="color:#000;text-align: center;font-size: 24px;margin: 40px 0;">没有数据！</div>`)
            }
        })
    }
}
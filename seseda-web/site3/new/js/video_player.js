let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4];
        $('#videoTime').text(dts[6])
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
    $('.video_title').text(dts[2]);
    $('.video_Tags').text(dts[1]);
    $('#watchNum').text(dts[7]);
    $('.mainMenuButton').click(function(){
        $('.mainMenuWrapper').toggle(300);
    })
    $.get(apiSuffix.vWatch, {
        'video_id': dts[3],
        'site_id': site_id
    }, function (data) {

    })

    getLinkVideo();
    //猜你喜欢
    function getLinkVideo() {
        let likeVideo = $('#likeVideo');
        $.get(apiSuffix.vLink, {
            'id': dts[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 0) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] 
                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    likeVideo.append(`
                        <div class="4u">
                            <section class="box feature">
                                <a href="${videoUrl}${dt}"
                                    class="image featured non-overlay atfib" style="margin: 0;">
                                    <div style='margin: 0 0 2em 0;'>
                                        <img id="videoImg" style="width: 100%;" src="${vd.server}${vd.img}"
                                            alt="it's different to be with women" />
                                    </div>
                                </a>
                                <div class="hide_noscript" id="span-case"
                                    style="font-size: 0.6em;margin-top: -1.8em;"></div>
                                <div id="span-case" style="margin-bottom:5px;">
                                    <h3 class="meta-data-title" style="text-align: center;margin-bottom:2px;"><a
                                            href=""
                                            class="click-trigger">${vd.title}">${vd.title}</a></h3>
                                    <span class="fa fa-clock-o meta-data" style="margin-left: 5px;"> ${vd.timelong}</span>
                                    <span class="fa fa-eye meta-data" style="margin-left: 5px;"> ${vd.visit}</span>
                                </div>
                            </section>
                        </div>
                    `)
                });
            }else{
                likeVideo.append('<p style="width: 100%;text-align: center;font-size: 20px;">没有相关的视频...</p>');
            }
        })
    }
}
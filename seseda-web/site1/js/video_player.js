let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4];
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



    getLinkVideo();
    //猜你喜欢
    function getLinkVideo() {
        let topVideo = $('#top_video');
        let bottomVideo = $('#bottom_video');
        $.get(apiSuffix.vLink, {
            'id': dts[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags'] + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] + vd['img']);
                    if (index < 4) {
                        topVideo.append(`
                    <div class="thumb pimp-thumb">
                    <a href="../video_player.html?dt=${dt}">
                    <span class="img"><img
                                class="lazy"
                                src="${vd.server}${vd.img}"
                                data-original="../images_new/placeholder_vids.gif"
                                alt="These Fishnets Will Drive You Crazy!" width="145"
                                height="105"><span class="length">05:14</span><span
                                class="hd">HD</span></span>
                                    <span class="thumb-info">
                                        <b title="${vd.title}" class="v_title">${vd.title}</b>
                                    </span>
                                </a>
                        </div>
                    `);
                    } else {
                        bottomVideo.append(`
                    <div class="thumb" itemscope>
                    <a href="../video_player.html?dt=${dt}">
                        <span class="img" data-id="3196380">
                            <img src="${vd.server}${vd.img}"
                                alt="AgedLovE Redhead Mature And Horny Man Hardcore">
                            <span itemprop="duration" class="length">
                                8:24
                            </span>
                            <span class="hd">HD</span>
                        </span>
                        <span class="thumb-info">
                            <b title="${vd.title}" itemprop="name" class="v_title">${vd.title}</b>
                            <meta itemprop="datePublished" content='2019-07-25'>
                            <span class="views">41 Views | 1 week ago</span>
                            <span class="item-rating">Porn Rating <span>50%</span></span>
                        </span>
                    </a>
                    <span class="block-fav">
                        <button title="Add To Favorites" data-id="3196380">Favorites</button>
                        <span class="success">Video Added</span>
                        <span class="fail">You have to <a
                                href="https://www.fetishshrine.com/login.php">Log In</a></span>
                    </span>
                </div>
                    `)
                    }
                });
            } else{
                bottomVideo.html('<p style="width: 100%;text-align: center;font-size: 18px;">没有数据！</p>');
            }
        })
    }
}
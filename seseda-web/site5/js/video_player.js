let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4]+dts[5];
        $('#vWatch').text(dts[7])
        $('#vWatch_m').text(dts[7])
        const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
        player.on('play', () => { //开始播放监听事件
            $('.video_as').hide();
        });
        player.on('pause', () => { //暂停播放监听事件
            $('.video_as').show();
        });
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

    //添加播放次数
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
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    let timelong = ''
                    if(vd.timelong != ''){
                        timelong = `<span class="videoBox-time">${vd.timelong}</span>`
                    }
                    likeVideo.append(`
                    <div class="col-style d-4 m-2 lazy loaded"><a href="../video_player.html?dt=${dt}" class="videoBox">
                            <div class="videoBox_wrap">
                                <div class="videoBox-cover"
                                    style="background-image: url(&quot;${vd.server}${vd.img}&quot;);">
                                </div> <span class="video-tag free">免费</span>${timelong}
                            </div>
                            <div class="videoBox-info"><span class="title" title="${vd.title}">${vd.title}</span></div>
                            <div class="videoBox-action"><span class="views"><i class="fa fa-eye"></i><span
                                        class="number" style="line-height: 20px;">${vd.visit}</span><p class="number tags"> | ${vd.tags}</p></span></div>
                        </a></div>
                    `)
                });
            } else {
                likeVideo.html('<p style="width: 100%;text-align: center;font-size: 20px;">猜你喜欢无数据！</p>');
            }
        })
    }
}

window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        initialSlide :0,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
}
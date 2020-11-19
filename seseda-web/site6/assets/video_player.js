let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4]+dts[5];
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


    $.get(apiSuffix.vWatch, {
        'video_id': dts[3],
        'site_id': site_id
    }, function (data) {
    })

    getLinkVideo();
    //猜你喜欢
    function getLinkVideo() {
        let likeVideo = $('#list_videos2_related_videos');
        $.get(apiSuffix.vLink, {
            'id': dts[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    let timelong = '';
                    if(vd.timelong != ''){
                        timelong = `<div class="duration ico time">${vd.timelong}</div>`;
                    }
                    likeVideo.append(`
                    <div class="item i-store-item" data-id="46256">
                        <a href="../video_player.html?dt=${dt}" title="Best Japanese chick in Horny Group Sex, Small Tits JAV movie">
                            <div class="img">
                                <img class="thumb EoCk7" src="${vd.server}${vd.img}" alt="Best Japanese chick in Horny Group Sex, Small Tits JAV movie" data-custom3="tc:3945543:4" width="240" height="180" data-sgid="1" data-video-id="46256"
                                data-ky6d="1" <span class="ico-fav-1" data-fancybox="ajax"></span> 
                                <div class="i-store-item__save"></div>
                            </div>
                        </a> <strong class="title">${vd.title}</strong> 
                        <div class="wrap">
                            ${timelong}
                            <div class="views ico ico-eye">${vd.visit}</div>
                        </div>
                        <div class="tags" style="color:#000"><p>${vd.tags}</p></div>
                    </div>
                    `)
                });
            } else {
                likeVideo.html(`
                    <p style="width: 100%;text-align: center;font-size: 18px;height: 35px;line-height: 35px;color: #345a81;margin-top: 10px;">
                        推荐视频无数据！
                    </p>
                `);
            }
        })
    }
}
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
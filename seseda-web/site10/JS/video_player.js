let dts = location.search.split('=')[1];
if (dts) {
    dts = unescape($.base64.decode(dts));
    dts = dts.split('$');
    document.addEventListener('DOMContentLoaded', () => {
		const source = dts[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dts[4]+dts[5];
        $('#vWatch').text(dts[7]);
        $('#tags').text(dts[1]);
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
        let likeVideo = $('#likeVideo');
        $.get(BaseURL + "getLinkVideo", {
            'id': dts[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd, index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    // if (index < 11) {
                    //     likeVideo.append(`
                    //     <div class="detailreclist" style="width: 380px;">
                    //         <a href="../video_player.html?dt=${dt}" class="interlink"><img
                    //                 src="${vd.server}${vd.img}" /></a>
                    //         <div class="detailrecinfo" style="width: 215px;">
                    //             <div class="detailreclistname"
                    //                 title="${vd.title}"><a
                    //                     href="../video_player.html?dt=${dt}" class="interlink">${vd.title}</a></div>
                    //         <div class='videointro'><i class='fa fa-eye' aria-hidden='true'></i> ${vd.visit} |  ${vd.tags}</div>
                    //         </div>
                    //     </div>
                    // `);
                    // }else{
                        $('#disqus_thread').append(`
                        <div class='videobrick' style="width: 22%;">
                                <a href='../video_player.html?dt=${dt}' class='interlink'>
                                    <div class='videocontentblock'>
                                        <img src="${vd.server}${vd.img}"/>
                                        <div video_src="" class='video-data'>
                                        </div>
                                    </div>
                                </a>
                                <a href='detail.php-vid=MTkwNA==.html' class='interlink'>
                                    <div class='videotitle' title='${vd.title}'>
                                    ${vd.title}
                                    </div>
                                </a>
                                <div class='videointro' style="margin-bottom: 5px;">${vd.timelong}  <i class='fa fa-eye' aria-hidden='true'></i>${vd.visit} |  ${vd.tags}</div>

                        </div>
                        `);
                    // }
                });
            }else {
                $('#disqus_thread').html(`
                    <p style="width: 100%;text-align: center;font-size: 18px;height: 35px;line-height: 35px;color: #345a81;margin-top: 10px;">
                        没有数据！
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
let dt = location.search.split('=')[1];
if (dt) {
    dt = unescape($.base64.decode(dt));
    dt = dt.split('$');
    $('.video_title').text(dt[2]);
    if(dt[6] != ''){
        $('.time_icon').show();
        $('#vTime').text(dt[6]);
    }
    $('#tags').text(dt[1]);
    $('#vWatch').text(dt[7])
    var hlsUrl = `${dt[0]}`;
    document.addEventListener('DOMContentLoaded', () => {
		const source = dt[0];
        const video = document.querySelector('video');
        document.getElementById('myVideo').poster = dt[4]+dt[5];
        $('#vWatch').text(dt[7])
        $('#vWatch_m').text(dt[7])
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


    // $('#player').attr('poster', `${dt[4]+dt[5]}`)
    // var tagUrl = '#';//https://syndication.exosrv.com/splash.php?idzone=3377419
    // var video = document.querySelector('video');

    // if (Hls.isSupported()) {
    //     var hls = new Hls({
    //         autoStartLoad: false,
    //         maxBufferLength: 16,
    //         maxMaxBufferLength: 32,
    //         maxBufferSize: 30 * 1000 * 1000,
    //         appendErrorMaxRetry: 5,
    //         startFragPrefetch: false,
    //         capLevelToPlayerSize: true,
    //         manifestLoadingTimeOut: 20000,
    //         manifestLoadingMaxRetry: 3
    //     });
    //     hls.loadSource(hlsUrl);
    //     hls.attachMedia(video);
    // } else {
    //     video.src = hlsUrl;
    // }

    // video.addEventListener('play', function () {
    //     hls.startLoad();
    // }, {
    //     once: true
    // });

    // new Plyr(video, {
    //     ratio: '16:9',
    //     fullscreen: {
    //         enabled: true,
    //         fallback: true,
    //         iosNative: true
    //     },
    //     ads: {
    //         enabled: true,
    //         tagUrl: tagUrl
    //     }
    // });
    // var a = ['cGxheQ==', 'MTY6OQ==', 'cXVlcnlTZWxlY3Rvcg==', 'dmlkZW8=', 'aXNTdXBwb3J0ZWQ=', 'bG9hZFNvdXJjZQ==',
    //     'YXR0YWNoTWVkaWE=', 'c3Jj', 'YWRkRXZlbnRMaXN0ZW5lcg=='
    // ];
    // (function (c, d) {
    //     var e = function (f) {
    //         while (--f) {
    //             c['push'](c['shift']());
    //         }
    //     };
    //     e(++d);
    // }(a, 0x173));
    // var b = function (c, d) {
    //     c = c - 0x0;
    //     var e = a[c];
    //     if (b['qcJYBV'] === undefined) {
    //         (function () {
    //             var f;
    //             try {
    //                 var g = Function('return\x20(function()\x20' +
    //                     '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
    //                 f = g();
    //             } catch (h) {
    //                 f = window;
    //             }
    //             var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    //             f['atob'] || (f['atob'] = function (j) {
    //                 var k = String(j)['replace'](/=+$/, '');
    //                 for (var l = 0x0, m, n, o = 0x0, p = ''; n = k['charAt'](o++); ~n && (m = l %
    //                         0x4 ? m * 0x40 + n : n, l++ % 0x4) ? p += String['fromCharCode'](0xff &
    //                         m >> (-0x2 * l & 0x6)) : 0x0) {
    //                     n = i['indexOf'](n);
    //                 }
    //                 return p;
    //             });
    //         }());
    //         b['AfvilK'] = function (q) {
    //             var r = atob(q);
    //             var s = [];
    //             for (var t = 0x0, u = r['length']; t < u; t++) {
    //                 s += '%' + ('00' + r['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);
    //             }
    //             return decodeURIComponent(s);
    //         };
    //         b['UWApAa'] = {};
    //         b['qcJYBV'] = !![];
    //     }
    //     var v = b['UWApAa'][c];
    //     if (v === undefined) {
    //         e = b['AfvilK'](e);
    //         b['UWApAa'][c] = e;
    //     } else {
    //         e = v;
    //     }
    //     return e;
    // };
    // var c = document[b('0x0')](b('0x1'));
    // if (Hls[b('0x2')]()) {
    //     var d = new Hls({
    //         'autoStartLoad': ![],
    //         'maxBufferLength': 0x10,
    //         'maxMaxBufferLength': 0x20,
    //         'maxBufferSize': 0x1e * 0x3e8 * 0x3e8,
    //         'appendErrorMaxRetry': 0x5,
    //         'startFragPrefetch': ![],
    //         'capLevelToPlayerSize': !![],
    //         'manifestLoadingTimeOut': 0x4e20,
    //         'manifestLoadingMaxRetry': 0x3
    //     });
    //     d[b('0x3')](hlsUrl);
    //     d[b('0x4')](c);
    // } else {
    //     c[b('0x5')] = hlsUrl;
    // }
    // c[b('0x6')](b('0x7'), function () {
    //     d['startLoad']();
    // }, {
    //     'once': !![]
    // });
    // new Plyr(c, {
    //     'ratio': b('0x8'),
    //     'fullscreen': {
    //         'enabled': !![],
    //         'fallback': !![],
    //         'iosNative': !![]
    //     },
    //     'ads': {
    //         'enabled': !![],
    //         'tagUrl': tagUrl
    //     }
    // });

    $.get(apiSuffix.vWatch, {
        'video_id': dt[3],
        'site_id': site_id
    }, function (data) {
    })

    getLinkVideo();
    //猜你喜欢
    function getLinkVideo() {
        let videoType = $('#getLinkVideo');
        let videoright = $('#videoright');
        $.get(apiSuffix.vLink, {
            'id': dt[3],
            'site_id': site_id
        }, function (data) {
            if (data['code'] == 0 && data.data.length > 1) {
                data.data.forEach((vd,index)=> {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] 
                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    let timelong = ''
                    if(vd.timelong != ''){
                         timelong = ` <div class="absolute-bottom-right"><span class="label">${vd.timelong}</span></div>`
                     }
                    // if(index <12){
                        videoType.append(`
                    <div class="col-6 col-sm-4 col-xl-3">
                        <div class="video-img-box mb-e-20">
                            <div class="img-box cover-md">
                            <a href="../../video_player.html?dt=${dt}">
                            <img class="lazyload"
                                        src="../images/placeholder-md.jpg"
                                        data-src="${vd.server}${vd.img}"
                                        data-preview="JavaScript:;">
                                    <div class="absolute-bottom-left">
                                        <span class="action hover-state d-none d-sm-flex"
                                            data-fav-video-id="1482" data-fav-type="0">
                                            <svg height="15" width="15">
                                                <use xlink:href="#icon-heart"></use>
                                            </svg>
                                        </span>
                                    </div>
                                    ${timelong}
                                </a>
                            </div>
                            <div class="detail">
                                <h6 class="title" title="${vd.title}">
                                    <a href="../../video_player.html?dt=${dt}">
                                        ${vd.title}
                                    </a>
                                </h6>
                                <p class="sub-title">
                                    <svg class="mr-1" height="15" width="15">
                                        <use xlink:href="#icon-eye"></use>
                                    </svg>${vd.visit}
                                    | <span class="tag_s" title="${vd.tags}">&nbsp;${vd.tags}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                        `);
                    // }else{
                    //     if(vd.timelong != ''){
                    //         timelong = `<span class="label">${vd.timelong}</span>`
                    //     }
                    //     videoright.append(`
                    //         <div class="col-6 col-sm-4 col-lg-12">
                    //             <div class="video-img-box mb-e-20">
                    //                 <div class="img-box cover-md">
                    //                     <a href="../../video_player.html?dt=${dt}">
                    //                         <img class="lazyload"
                    //                             src="../images/placeholder-md.jpg"
                    //                             data-src="${vd.server}${vd.img}"
                    //                             data-preview="JavaScript:;">
                    //                         <div class="absolute-bottom-left">
                    //                             <span class="action hover-state d-none d-sm-flex" data-fav-video-id="872"
                    //                                 data-fav-type="0">
                    //                                 <svg height="15" width="15">
                    //                                     <use xlink:href="#icon-heart"></use>
                    //                                 </svg>
                    //                             </span>
                    //                         </div>
                    //                         <div class="absolute-bottom-right">
                    //                             ${timelong}
                    //                         </div>
                    //                     </a>
                    //                 </div>
                    //                 <div class="detail">
                    //                     <h6 class="title" title="${vd.title}">
                    //                         <a href="../../video_player.html?dt=${dt}">${vd.title}</a>
                    //                     </h6>
                    //                 </a>
                    //             </h6>
                    //                     <p class="sub-title">
                    //                         <svg class="mr-1" height="15" width="15">
                    //                             <use xlink:href="#icon-eye"></use>
                    //                         </svg>${vd.visit}
                    //                         | <span class="tag_s tag_s_video" title="${vd.tags}">&nbsp;${vd.tags}</span>
                    //                     </p>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     `)
                    // }
                });
            }else{
                videoType.html('<p style="width: 100%;text-align: center;font-size: 18px;font-weight: bold;">猜你喜欢无数据！</p>');
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
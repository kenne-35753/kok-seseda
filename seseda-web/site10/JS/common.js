var isMobile = 0;
let site_id = 10;
//let Arr = ['https://i.ncservice.xyz/','https://i2.ncservice.xyz/'];
//let Arr = ['http://ssdapi.zhyin88.com/'];
let Arr = getApiUrl();

let n = Math.floor(Math.random() * Arr.length + 1) - 1;
var BaseURL = Arr[n];
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    isMobile = 1;
}


let apiSuffix = {
    vHome: `${BaseURL}video/home`, // 首页视频
    vLink: `${BaseURL}getLinkVideo`, //获取相关视频
    vLabel: `${BaseURL}video/label`, //标签视频
    vType: `${BaseURL}video`, //按分类获取视频
    vSearch: `${BaseURL}video/search`, // 搜索获取视频
    vHot: `${BaseURL}video/hot`, //热门视频
    vRecommended: `${BaseURL}video/recommended`, //推荐视频
    vLatest: `${BaseURL}video/latest`, //最近更新
    vCates: `${BaseURL}getCates`, //视频分类与分类视频数量
    vLinks: `${BaseURL}getLinks`, //获取友链
    vTags: `${BaseURL}getTags`, //获取标签
    vAdvs: `${BaseURL}getAdvs`, //获取广告
    vWatch: `${BaseURL}video/watch`, //观看数量增加
    vSinfo: `${BaseURL}site/info` //站点信息
}
let msryGgUl = $('.msry_gg_ul')
let msryMggUl = $('.msry_mgg_ul')
var bottomAs = $('#bottom_as') // PC底部悬浮 广告
var videoAs = $('#video_as') //视频播放中心 广告
var bottomBanner = $('#bottomBanner') //pc-底部横幅 
var swiperAs = $('#swiper_as') //视频播放中心 右侧轮播广告
var suspensionLeft = $('#suspensionLeft') // PC左边悬浮 广告
var suspensionRight = $('#suspensionRight') // PC左边悬浮 广告
var videoBottom = $('#videoBottom') // 视频下方

//广告
$.get(apiSuffix.vAdvs, {
'site_id': site_id
}, function (data) {
if (data['code'] == 0) {
    data.data[0].forEach(ad => {
        if (ad.state === 1) {
            msryGgUl.append('<li><a href="javascript:void(0)" target="_blank" onclick="this.href=\'' + ad.address + '\'"><img bh="' + ad.id + '" src=' + ad.image + '></a></li>');
        }
        if(ad.state === 51){
            msryMggUl.append('<li><a href="javascript:void(0)" target="_blank" onclick="this.href=\'' + ad.address + '\'"><img bh="' + ad.id + '" src=' + ad.image + '></a></li>');
        }
        if (ad.state === 4) {
            swiperAs.append(
                `<div class="swiper-slide">
                    <a href="${ad.address}" target="_blank">
                        <img src="${ad.image}" alt="">
                    </a>
                </div>`
            );
        }
      	if(ad.state === 3){
            bottomBanner.append(tagAhref(ad.address,ad.image));
        }
        if(ad.state === 2){
            videoBottom.append(tagAhref(ad.address,ad.image));
        }
       if (ad.state === 5) {
                bottomAs.append(
                    `${tagAhref(ad.address,ad.image)}
                    <span class="clone_gs"></span>`
                );
            }else if (ad.state === 8) {
            videoAs.append(`
                    <div class="video_as_banner">
                        <a href="${ad.address}" target="_blank">
                            <img src="${ad.image}" alt="">
                        </a>
                        <span class="video_as_span"></span>
                    </div>
            `);
            }
        if(isMobile === 0){
             if (ad.state === 6) {
                suspensionLeft.append(tagAhref(ad.address, ad.image));
            } else if (ad.state === 7) {
                suspensionRight.append(tagAhref(ad.address, ad.image));
            }
        }
    });
    $('.clone_gs').click(function () {
        $('.bottom_as').hide();
    })
    $('.video_as_span').click(function () {
        $('#video_as').hide();
    })
}
});

function tagAhref(address, image) {
    return `<a href="${address}" target="_blank"><img class="ad_banner" src="${image}" alt=""></a>`
}

$.ajaxSettings.async = false; //同步
//导航栏
let array = [
    {
        "category": "最近更新",
        "count": 0,
        "id": 82
    },
    {
        "category": "热门影片",
        "count": 0,
        "id": 81
    },
    {
        "category": "站长推荐",
        "count": 0,
        "id": 83
    }
]

//导航栏
$.get(apiSuffix.vCates, {
    'site_id': site_id
}, function (data) {
   let data_list = array.concat(data.data);
    data_list.forEach((ty, index) => {
        let parameter = $.base64.encode(escape(ty.id + "$" + ty.category + "$dhl"));
      	let hot = '';
        let hrefUrl = `../videoType.html?parameter=$${parameter}`
        let newWindow = ''
        if(ty.hot_gif == 1){
          hot = 'hot';
          hrefUrl='http://haboav88.vip?channelCode=9FH4B4'
        }
        if(ty.category == '直播APP'){
            newWindow = '_blank'
        }
        $('#nav').append(`
                <a href="${hrefUrl}" target="${newWindow}" class='interlink'>
                    <li id="nav${ty.id}" class="${hot}">
                        <div class='text'>${ty.category}</div>
                        <img src='img/tag%20image/${ty.id}.png'
                            alt='Uncensored Hentai'>
                    </li>
                </a>
            `)
    });
});
$.ajaxSettings.async = true; //同步


//友链
$.get(apiSuffix.vLinks, {
    'site_id': site_id
}, function (data) {
    let vLink = $('#vLink')
    if (data['code'] == 0) {
            data.data.forEach(ad => {
                vLink.append(`
                    <a style="display: inline-block;margin: 0 5px;" href="${ad.url}" target="_blank">${ad.name}</a> <br />
                `);
            });
    }
});

//站点信息
$.get(apiSuffix.vSinfo, {
    'site_id': site_id
}, function (data) {
    if (data['code'] == 0) {
        data.data.email.forEach((ad,index) => {
            if(index < 1){
                $('#guangEmail').append(`<a href="mailto:${ad}" rel="nofollow">${ad}</a>`)
            }else{
                $('#tousEmail').append(`<a href="mailto:${ad}" rel="nofollow">${ad}</a>`)
            }
        });
    }
});
if(isMobile === 0){
    $(window).scroll(function (event) {
        var scrollTop = $(this).scrollTop();
        if(location.href.indexOf('video_player') != -1){
            if(scrollTop > 288 && scrollTop < 1070){
                $('#tagcont').css("height","794px");
                $('#nav_xf').css({"position":"fixed","width": "200px","top": "0"})
                $('.hometagcontainer .sidecontainertitle').css('margin-top','15px')
            }else if(scrollTop < 288 && scrollTop > 1070){
                $('#nav_xf').css({"position":"relative","width": "200px","top": "0"});
            }else if(scrollTop > 1070){
                $('#nav_xf').css({"position":"relative","width": "200px","top": "0"});
                $('.hometagcontainer .sidecontainertitle').css('margin-top','750px')
            }else{
                $('#nav_xf').css({"position":"relative","width": "200px","top": "0"});
            }
        }else{
            if(scrollTop > 288 && scrollTop < 1558){
                $('#tagcont').css("height","794px");
                $('#nav_xf').css({"position":"fixed","width": "200px","top": "0"})
                $('.hometagcontainer .sidecontainertitle').css('margin-top','15px')
            }else if(scrollTop < 288 && scrollTop > 1558){
                $('#nav_xf').css({"position":"relative","width": "200px","top": "0"});
            }else if(scrollTop > 1558){
                $('#nav_xf').css({"position":"relative","width": "200px","top": "0"});
                let marginTop = '1200px'
                if(location.href.indexOf('videoType') != -1){
                    marginTop = '1287px'
                }
                $('.hometagcontainer .sidecontainertitle').css('margin-top',`${marginTop}`)
            }else{
                $('#nav_xf').css({"position":"relative","width": "200px","top": "0"});
            }
        }
    })
}

document.onkeydown = function (e) { // 回车提交表单
    // 兼容FF和IE和Opera
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
        searchs();
    }
}


function searchs() {
    let inputSearch = $('#inputSearch').val();
    if (inputSearch !== null && inputSearch !== '') {
        window.location.href = `../../videoType.html?keyword=${$('#inputSearch').val()}`
    }
}

$('.homeleftpromotioncard').hover(
    function(){
        $('.leftpromotetext').css('color','#000')
    } ,
    function(){
        $('.leftpromotetext').css('color','#fff')
    }
) ;
if(location.href.indexOf('videoType') != -1 || location.href.indexOf('video_player') != -1){
 var _hmt = _hmt || [];
  if(location.href.indexOf('ddm88.vip') !== -1){
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?8b0424f0c27b8983409feb8d2280c557";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
}else{
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2f5e48386f6d5a4cd6c0880e6ed9591d";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
}
}


//获取主域名
function getMainHost() {
  let key  = `mh_${Math.random()}`;
  let keyR = new RegExp( `(^|;)\\s*${key}=12345` );
  let expiredTime = new Date( 0 );
  let domain = document.domain;
  let domainList = domain.split( '.' );
 
  let urlItems   = [];
  // 主域名一定会有两部分组成
  urlItems.unshift( domainList.pop() );
  // 慢慢从后往前测试
  while( domainList.length ) {
    urlItems.unshift( domainList.pop() );
    let mainHost = urlItems.join( '.' );
    let cookie   = `${key}=${12345};domain=.${mainHost}`;
 
    document.cookie = cookie;
 
    //如果cookie存在，则说明域名合法
    if ( keyR.test( document.cookie ) ) {
      document.cookie = `${cookie};expires=${expiredTime}`;
      return mainHost;
    }
  }
}

//拼接主域名,返回接口数组
function getApiUrl() {
	let url_arr = new Array();
	url_arr[0] = 'https://api.' + getMainHost() + '/'
	return url_arr;
}

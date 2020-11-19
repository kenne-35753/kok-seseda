var isMobile = 0;
let site_id = 6;
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

var msryGgUl = $('.msry_gg_ul') // PC顶部 广告
var msryMggUl = $('.msry_mgg_ul') //手机顶部广告
var bottomAs = $('#bottom_as') // PC底部悬浮 广告
var suspensionLeft = $('#suspensionLeft') // PC左边悬浮 广告
var suspensionRight = $('#suspensionRight') // PC左边悬浮 广告
var videoAs = $('#video_as') //视频播放中心 广告
var swiperAs = $('#swiper_as') //视频播放中心 右侧轮播广告
//广告
$.get(apiSuffix.vAdvs, {
'site_id': site_id
}, function (data) {
if (data['code'] == 0 && data.data) {
    // if (isMobile === 0) { //PC 广告
        bottomBanner(data.data[0], 3, 'bottomBanner',3); //pc-底部横幅 3
        bottomBanner(data.data[0], 2, 'videoBottom',2); //视频下方
    // }else{
    //     bottomBanner(data.data[0], 3, 'bottomBanner',53); //手机-底部横幅 53
    //     bottomBanner(data.data[0], 2, 'videoBottom',52); //视频下方
    // }
    data.data[0].forEach(ad => {
        if (ad.state === 4) {
            swiperAs.append(
                `<div class="swiper-slide">
                    <a href="${ad.address}" target="_blank">
                        <img src="${ad.image}" alt="">
                    </a>
                </div>`
            );
        }
        if (ad.state === 1) {
            msryGgUl.append('<li><a href="javascript:void(0)" target="_blank" onclick="this.href=\'' + ad.address + '\'"><img bh="' + ad.id + '" src=' + ad.image + '></a></li>');
        }
        if(ad.state === 51){
            msryMggUl.append('<li><a href="javascript:void(0)" target="_blank" onclick="this.href=\'' + ad.address + '\'"><img bh="' + ad.id + '" src=' + ad.image + '></a></li>');
        }
      	if (ad.state === 5) {
                bottomAs.append(
                    `${tagAhref(ad.address,ad.image)}
                    <span class="clone_gs"></span>`
                );
            }
      if (ad.state === 8) {
                videoAs.append(
                    `<div class="video_as_banner">
                    <a href="${ad.address}" target="_blank">
                        <img src="${ad.image}" alt="">
                    </a>
                    <span class="video_as_span"></span>
                </div>`
                );
            }
        if (isMobile === 0) { //PC 广告
             if (ad.state === 6) {
                suspensionLeft.append(tagAhref(ad.address, ad.image));
            } else if (ad.state === 7) {
                suspensionRight.append(tagAhref(ad.address, ad.image));
            }  
        }
        $('.clone_gs').click(function () {
            $('.bottom_as').hide();
        })
        $('.video_as_span').click(function () {
            $('#video_as').hide();
        })
    });
}
});

function tagAhref(address, image) {
    return `<a href="${address}" target="_blank"><img src="${image}" alt=""></a>`
}

function bottomBanner(data, num, idName,indexAs) {
    var bottomList = []
    data.forEach(ad => {
        if (ad.state === indexAs) {
            bottomList.push(ad)
        }
    })

    bottomList.forEach((ad, index) => {
        index = index + 1;
        if (index % num === 1) {
            $(`#${idName}1`).append(tagAhref(ad.address, ad.image));
        } else if (index % num === 2) {
            $(`#${idName}2`).append(tagAhref(ad.address, ad.image));
        } else if (index % num === 0) {
            $(`#${idName}3`).append(tagAhref(ad.address, ad.image));
        }
    })
}

$.ajaxSettings.async = false; //同步
//导航栏
$.get(apiSuffix.vCates, {
    'site_id': site_id
}, function (data) {
   data.data.forEach((ty, index) => {
        let parameter = $.base64.encode(escape(ty.id + "$" + ty.category + "$dhl"));
        let hot = '';
        let hrefUrl = `../videoType.html?parameter=$${parameter}`
        if(ty.hot_gif == 1){
            hot = 'hot';
            hrefUrl='http://haboav88.vip?channelCode=6AS1FY'
        }
        $('#navUl').append(`
        <li id="navLi${ty.id}">
			<a class="${hot}" href="${hrefUrl}" id="item${ty.id}">${ty.category}</a>
        </li>`)
    })
});
$.ajaxSettings.async = true; //同步

// 获取标签
$.get(apiSuffix.vTags, {
    'site_id': site_id
},function (data) {
    data.data.forEach((ty, index) => {
        let parameter = $.base64.encode(escape(ty.id + "$" + ty.name + "$bq"));
        //PC
        $('#vTags').append(`
            <a title="${ty.name}" href="videoType.html?parameter=$${parameter}" style="font-weight: bold; font-size: 16px;">${ty.name}</a>
        `)
    });
});

$('.show-search-btn').click(function(){
    $('#search_s').addClass('search-is-active');
})
$('.close-search-btn').click(function(){
    $('#search_s').removeClass('search-is-active');
})
$('#nav_s').click(function(){
    $('#nav_s').toggleClass('open');
})

//友链
$.get(apiSuffix.vLinks, {
    'site_id': site_id
}, function (data) {
    let vLink = $('#vLink')
    if (data['code'] == 0) {
            data.data.forEach(ad => {
                vLink.append(`
                    <li><a href="${ad.url}" target="_blank">${ad.name}</a></li>
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


$('.copyright').append(`2015-2019 <a href="http://dxav6.com/">dxav6.com</a><br /> All rights reserved.`)

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
if(location.href.indexOf('videoType') != -1 || location.href.indexOf('video_player') != -1){
   var _hmt = _hmt || [];
      if(location.href.indexOf('dxav6.com') !== -1){
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?76458654a4cedaa6d26c9ba620c927f2";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    }else{
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c30360b970fbf98a65c1a411276ea3c2";
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

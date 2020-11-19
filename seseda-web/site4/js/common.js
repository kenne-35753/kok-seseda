let isMobile = 0;
let site_id = 4;
let timelong = '';
// let Arr = ['http://i.ncservice.xyz/'];
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
//广告
$.get(apiSuffix.vAdvs, {
    'site_id': site_id
}, function (data) {
    if (data['code'] == 0) {
        data.data[0].forEach(ad => {
            if (ad.state === 1) {
                msryGgUl.append('<li><a href="javascript:void(0)" target="_blank" onclick="this.href=\'' + ad.address + '\'"><img bh="' + ad.id + '" src=' + ad.image + '></a></li>');
            }else if(ad.state === 51){
                msryMggUl.append('<li><a href="javascript:void(0)" target="_blank" onclick="this.href=\'' + ad.address + '\'"><img bh="' + ad.id + '" src=' + ad.image + '></a></li>');
            }
        });
    }
});

$.ajaxSettings.async = false; //同步

let array = [
    {
        "category": "热门影片",
        "count": 0,
        "id": 81,
        "url": 'videoType.html?vHot=热门',
        'cs': 'vHot'
    },
    {
        "category": "最近更新",
        "count": 0,
        "id": 82,
        "url": 'videoType.html?vNew=更新',
        'cs': 'vNew'
    },
    {
        "category": "站长推荐",
        "count": 0,
        "id": 83,
        "url": 'videoType.html?vRecommend=推荐',
        'cs': 'vRecommend'
    }
]

//导航栏
$.get(apiSuffix.vCates, {
    'site_id': site_id
}, function (data) {
   let data_list = array.concat(data.data);
    data_list.forEach((ty, index) => {
        let parameter = $.base64.encode(escape(ty.id + "$" + ty.category + "$dhl"));
        if(ty.id === 81 || ty.id === 82 || ty.id === 83){
            $('.navUl').append(`
            <li class="drop">
                <a id="${ty.cs}" href="${ty.url}">${ty.category}</a>
            </li>`)
        } else{
            $('.navUl').append(`
            <li class="drop">
                <a id="nav${ty.id}" href="videoType.html?parameter=$${parameter}">${ty.category}</a>
            </li>`)
        }
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
                    <li><a href="http://${ad.url}" target="_blank">${ad.name}</a></li>
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
                $('#guangEmail').text(ad);
            }else{
                $('#tousEmail').text(ad); 
            }
        });
    }
});

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

$('#search').click(function () {
    let searchValue = $('#searchValue')
    if (searchValue.val() !== '' && searchValue.val() !== null) {
        return true;
    }
    alert('请输入搜索内容...')
    return false;
})


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

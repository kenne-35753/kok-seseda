$('.loader').css('display','block');
let num = 0;
let array_type_type = {};
let parameter = location.search.split('$')[1] || 0;
let api = '';
let typeId = '';
let page = 1;
//分类获取传过来的
if (parameter) {
    parameter = unescape($.base64.decode(parameter));
    parameter = parameter.split('$');
    typeId = parameter[0];
    $('#titleName').text(parameter[1]);
} else{
    $('#titleName').text(decodeURI(location.search.split('=')[1]));
}
categoryVideoFun(typeId)


function categoryVideoFun(Id) {
    array_type = {
        'page': page,
        'site_id':site_id
    }
    if(parameter[2] == 'dhl'){ //分类获取视频
        array_type.category = Id;
        api = apiSuffix.vType;
    } else if(parameter[2] == 'bq'){  // 标签
        array_type.label_id = Id;
        api = apiSuffix.vLabel;
    } else if(location.search.indexOf('keyword') !== -1){ //搜索视频
        array_type.keyword = decodeURI(location.search.split('=')[1])
        api = apiSuffix.vSearch;
    } else if(location.search.indexOf('vHot') !== -1){ // 热门视频
        api = apiSuffix.vHot;
        array_type.all = 1;
    } else if(location.search.indexOf('vNew') !== -1){ // 新的视频
        api = apiSuffix.vLatest;
        array_type.all = 1;
    } else if(location.search.indexOf('vRecommend') !== -1){ // 推荐视频
        api = apiSuffix.vRecommended;
        array_type.all = 1;
    }
    $.post(api, array_type, function (data) {
            if (data.code == 0) {
                let dataList = data.data;
                videoFun(dataList.list); //视频列表
            } else {
                $('.not_data').show();
            }
    });
}


//视频列表
function videoFun(data) {
    let videoList = $('#app');
    if(data.length>0){
        data.forEach(vd => {
            let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
            + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
            + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
            $('.loader').css('display','none');
            let timelong = ''
            if(vd.timelong != ''){
                timelong = `<span class="videoBox-time">${vd.timelong}</span>`
            }
            videoList.append(`
                <div class="col-style d-4 m-2 lazy loaded">
                    <a href="../video_player.html?dt=${dt}" class="videoBox">
                        <div class="videoBox_wrap">
                            <div class="videoBox-cover"  style="background-image: url(&quot;${vd.server}${vd.img}&quot;);"></div>
                            ${timelong}
                        </div>
                        <div class="videoBox-info"><span class="title" title="${vd.title}">${vd.title}</span>
                        </div>
                        <div class="videoBox-action"><span class="views"><i class="fa fa-eye"></i>
                        <span class="number">${vd.visit}</span><p class="number tags"> | ${vd.tags}</p></span>
                        </div>
                    </a>
                </div>
                `);
        });
    }else{
        $('#comLoader').hide();
        $('#loadMoreActorBtn').replaceWith(`<div style="text-align: center;font-size: 24px;">没有数据！</div>`)
    }
}
//点击更多 查找下一页
$('.loadMoreBtn').click(function(){
        page++;
        categoryVideoFun(typeId);
})



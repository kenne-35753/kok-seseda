$('.loader').css('display', 'block');
//获取传过来的
let num = 0;
let array_type_type = {};
let parameter = location.search.split('$')[1] || 0;
let api = '';
let typeId = '';
//分类获取传过来的
if (parameter) {
    parameter = unescape($.base64.decode(parameter));
    parameter = parameter.split('$');
    typeId = parameter[0];
    $(`#navLi${typeId}`).addClass('active');
    $('#titleName').text(parameter[1]);
}else{
    $('#titleName').text(decodeURI(location.search.split('=')[1]));
    $(`#${location.search.split('=')[0].replace('?','')}`).addClass('active');
}
categoryVideoFun(1,typeId)


function categoryVideoFun(page,Id) {
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
            num += 1;
            if (num <= 1) {
                pageFun(page, Math.ceil(dataList.count / dataList.list.length), Id); //分页
            }
        } else {
            $('.not_data').show();
        }
    });
}


//视频列表
function videoFun(data) {
    let videoList = $('#videoList');
    videoList.empty();
    if (data.length > 0) {
        data.forEach(vd => {
            let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
            + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
            + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
            $('.loader').css('display', 'none');
            videoList.append(`
            <div class="grid_item">
          <a class="link" href="../video_player.html?dt=${dt}">
            <div class="img_post icont icon_kiss">
              <span class="info_lable">
                <i class="info-item">HD</i> </span>
              <img class="img" src="${vd.server}${vd.img}"
                data-reload="3">
            </div>
            <p class="description">${vd.title}</p>
            <div class="inform">
              <span class="num">${vd.tags}</span>
              <span class="icon-eye-open"> ${vd.visit}</span>
            </div>
          </a>
        </div>
                `);
        });
    } else {
        $('.box-padding').hide()
        $('#pageList').replaceWith(`<div style="color:#000;text-align: center;font-size: 24px;margin: 40px 0;">没有数据！</div>`)
    }
}
//点击更多 查找下一页
function pageFun(pageNo, totalSize, categoryId) {
    $('#pageList').Paging({
        pagesize: pageNo,
        count: totalSize,
        callback: function (pageNo) { // 点击分页回调
            let data = categoryVideoFun(pageNo, typeId)
        }
    });

}
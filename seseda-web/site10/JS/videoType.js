//获取传过来的
let num = 0;
let array_type = {};
let parameter = location.search.split('$')[1] || 0;
let api = '';
let typeId = '';
//分类获取传过来的
if (parameter) {
    parameter = unescape($.base64.decode(parameter));
    parameter = parameter.split('$');
    typeId = parameter[0];
    $('#titleName').text(parameter[1]);
    $(`#nav${typeId} img`).css('opacity','0.85');
    $(`#nav${typeId} div`).css('color','#000');
}else{
    let title = location.search.split('=');
    $('#titleName').text(`${decodeURI(title[1])}`);

}
categoryVideoFun(1, typeId)

function categoryVideoFun(page, Id) {
    array_type = {
        'page': page,
        'site_id':site_id
    }
    if(parameter[2] == 'dhl'){ //分类获取视频
        if(Id === "81"){
            api = apiSuffix.vHot;
            array_type.all = 1;
        } else if(Id === "82"){
            api = apiSuffix.vLatest;
            array_type.all = 1;
        } else if(Id === "83"){
            api = apiSuffix.vRecommended;
            array_type.all = 1;
        } else {
            array_type.category = Id;
            api = apiSuffix.vType;
        }
    } else if(parameter[2] == 'bq'){  // 标签
        array_type.label_id = Id;
        api = apiSuffix.vLabel;
    } else if(location.search.indexOf('keyword') !== -1){ //搜索视频
        array_type.keyword = decodeURI(location.search.split('=')[1])
        api = apiSuffix.vSearch;
    }
    $.post(api, array_type,function (data) {
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
    if(data.length>0){
        data.forEach(vd => {
            let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
            + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server'] 
            + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
            let timelong = '';
            if(vd.timelong != ''){
                timelong =  `<div class='subtag'>${vd.timelong}</div>`
            }
            videoList.append(`
            <div class='videobrick' style="width: 384px;">
                            <a href='../video_player.html?dt=${dt}' class='interlink'>
                                <div class='videocontentblock'>
                                    <div class='videosubcontainer'>
                                        ${timelong}
                                    </div>
                                    <img src="${vd.server}${vd.img}" />
                                    <div video_src="" class='video-data'>
                                    </div>
                                </div>
                            </a>
                            <a href='detail.php-vid=MTkwNA==.html' class='interlink'>
                                <div class='videotitle' title='${vd.title}'>
                                    ${vd.title}
                                </div>
                            </a>
                            <div class='videointro'><i class='fa fa-eye' aria-hidden='true'></i> ${vd.visit} |  ${vd.tags}</div>

			        </div>
                `);
        });
    }else{
        $('#pageList').hide();
        $('.pagination').text('没有数据！')
    }
}

function pageFun(pageNo, totalSize, categoryId) {
    $('#pageList').Paging({
        pagesize: pageNo,
        count: totalSize,
        callback: function (pageNo) { // 点击分页回调
            let data = categoryVideoFun(pageNo, typeId)
        }
    });

}
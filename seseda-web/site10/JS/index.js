$(function(){
	$.get(apiSuffix.vHome, {
		'site_id': site_id
	}, function (result) {
		if (result['code'] == 0) {
			let dataList = result.data;
			let videobrickwrap = $('#videobrickwrap'); //最近上传
			dataList.forEach((vd,index) => {
                let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                                    + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                                    + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                 let timelong = '';
                if(vd.timelong != ''){
                     timelong =  `<div class='subtag'>${vd.timelong}</div>`
                }
                videobrickwrap.append(`
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
		}
	});
})

function hotVideo(result){
    if (result['code'] == 0) {
        let dataList = result.data.list;
        let _data = [];
        let FunData = (e) => {
            let proportion = 2; //按照比例切割
            let num = 0;
            let _data = [];
            for (let i = 0; i < e.length; i++) {
                if (i % proportion == 0 && i != 0) {
                    _data.push(e.slice(num, i));
                    num = i;
                }
                if ((i + 1) == e.length) {
                    _data.push(e.slice(num, (i + 1)));
                }
            }
            return _data;
        }
        dataList = FunData(dataList);
        let hotVideo = $('#hotVideo .item')
        dataList.forEach((vd,index) => {
                if(index <= 5){
                    hotVideo.eq(index).append(`
                    <div class="video-img-box mb-e-20">
                        <div class="img-box">
                            <a href="../../video_player.html?dt=${$.base64.encode(escape(vd[0]['server'] + vd[0]['video'] + "$"
                            + vd[0]['tags'] + "$" + vd[0]['title']) + "$"
                            + vd[0]['id'] + "$" + vd[0]['server'] + "$" + vd[0]['img']
                            + "$" + vd[0]['timelong'] + "$" + vd[0]['visit'])}">
                                <img class="lazyload"
                                    src="../images/placeholder-md.jpg"
                                    data-src="${vd[0].server}${vd[0].img}"
                                    data-preview="JavaScript:;">
                                <div class="absolute-bottom-left">
                                    <span class="action hover-state d-none d-sm-flex"
                                        data-fav-video-id="2121" data-fav-type="0">
                                        <svg height="15" width="15">
                                            <use xlink:href="#icon-heart"></use>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="detail">
                            <h6 class="title">
                            <a href="../../video_player.html?dt=${$.base64.encode(escape(vd[0]['server'] + vd[0]['video'] + "$" 
                            + vd[0]['tags'] + "$" + vd[0]['title']) + "$" + vd[0]['id']
                            + "$" + vd[0]['server'] + "$" + vd[0]['img'] + "$" + vd[0]['timelong']
                            + "$" + vd[0]['visit'])}" title="${vd[0].title}"> ${vd[0].title} </a>
                            </h6>
                            <p class="sub-title">
                                <svg class="mr-1" height="15" width="15">
                                    <use xlink:href="#icon-eye"></use>
                                </svg>${vd[0].visit}
                                | <span class="tag_s" title="${vd[0].tags}">&nbsp;${vd[0].tags}</span>
                            </p>
                        </div>
                    </div>
                    <div class="video-img-box mb-e-20">
                        <div class="img-box">
                            <a href="../../video_player.html?dt=${$.base64.encode(escape(vd[1]['server'] + vd[1]['video'] 
                            + "$" + vd[1]['tags'] + "$" + vd[1]['title'])
                            + "$" + vd[1]['id'] + "$" + vd[1]['server']
                            + "$" + vd[1]['img'] + "$" + vd[1]['timelong'] + "$" + vd[1]['visit'])}">
                                <img class="lazyload"
                                    src="../images/placeholder-md.jpg"
                                    data-src="${vd[1].server}${vd[1].img}"
                                    data-preview="JavaScript:;">
                                <div class="absolute-bottom-left">
                                    <span class="action hover-state d-none d-sm-flex"
                                        data-fav-video-id="2120" data-fav-type="0">
                                        <svg height="15" width="15">
                                            <use xlink:href="#icon-heart"></use>
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="detail">
                            <h6 class="title">
                                <a href="../../video_player.html?dt=${$.base64.encode(escape(vd[1]['server'] + vd[1]['video']
                                + "$" + vd[1]['tags'] + "$" + vd[1]['title']) + "$" + vd[1]['id']
                                + "$" + vd[1]['server'] + "$" + vd[1]['img'] + "$" + vd[1]['timelong'] + "$" + vd[1]['visit'])}" title="${vd[1].title}">
                                    ${vd[1].title}
                                </a>
                            </h6>
                            <p class="sub-title">
                                <svg class="mr-1" height="15" width="15">
                                    <use xlink:href="#icon-eye"></use>
                                    </svg>${vd[1].visit}
                                | <span class="tag_s" title="${vd[1].tags}">&nbsp;${vd[1].tags}</span>
                            </p>
                        </div>
                    </div>
                `);
                }
        });
    }
}

function videoHome(divId,api){
    $.post(api, {
        'site_id': site_id,
        'all' : 1,
        'page': 1
    }, function (result) {
        if(divId === 1){
            if (result['code'] == 0) {
                hotVideo(result);
            }
        } else {
            if (result['code'] == 0) {
                result.data.list.forEach((vd,index) => {
                    let dt = $.base64.encode(escape(vd['server'] + vd['video'] + "$" + vd['tags']
                                        + "$" + vd['title']) + "$" + vd['id'] + "$" + vd['server']
                                        + "$" + vd['img'] + "$" + vd['timelong'] + "$" + vd['visit']);
                    let timelong = ''
                    if(vd.timelong !== '' && vd.timelong != null){
                        timelong = ` <div class="absolute-bottom-right"><span class="label">${vd.timelong}</span></div>`
                    }
                    if(index < 12){
                            divId.append(`
                        <div class="col-6 col-sm-4 col-lg-3">
						<div class="video-img-box mb-e-20">
							<div class="img-box cover-md">
								 <a href="../../video_player.html?dt=${dt}">
									<img class="lazyload" src="${vd.server}${vd.img}">
									<div class="absolute-bottom-left">
										<span class="action hover-state d-none d-sm-flex" data-fav-video-id="2026"
											data-fav-type="0">
											<svg height="15" width="15">
												<use xlink:href="#icon-heart"></use>
											</svg>
										</span>
									</div>
										${timelong}
								</a>
							</div>
							<div class="detail">
								<h6 class="title"><a href="videos/ssni-516/index.html" title="${vd.title}">${vd.title}</a></h6>
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
                    }
                });
            }
        }
    });
}

//热门视频
videoHome(1,apiSuffix.vHot);

//更新视频
videoHome($('#newVideo'),apiSuffix.vLatest);

//推荐视频
videoHome($('#recommendVideo'),apiSuffix.vRecommended);

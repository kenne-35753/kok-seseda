$(document).ready(function(){			   

	videocontainerabso();
	$(window).resize(function(){ videocontainerabso(); adabso();}); 
	

/*
if(!sessionStorage.dismissnotify) {
$('.videolistcontainer .notificationcontainer').slideDown(400); }
else{ $('.videolistcontainer .notificationcontainer').remove(); }



	$('.videolistcontainer .notificationcontainer span#dismiss').click(function(){
       $('.videolistcontainer .notificationcontainer').fadeOut(200);
	   sessionStorage.dismissnotify='True';
	      
    });
	
*/	
	
	$('.listadcontainer i').click(function(){
			 $(this).parent('.listadcontainer').hide();
															   
		  });


		
	


	
     });




function checkvideo(videoobject,url){	
		$.ajax({
		url:url,
		type:'HEAD',
		error: function()
		{  videoobject.parent('.videocontentblock').find('.video-loading').remove();
		  
		},
		success: function()
		{	videoobject.parent('.videocontentblock').find('.video-loading').remove();
			videoobject.show();
			videoobject.append('<video loop autoplay muted><source src="'+url+'" type="video/mp4">Your browser does not support the video tag</video>');
			videoobject.parent('.videocontentblock').children('img').css('visibility','hidden');
		}
	       });
	
}



function disableallothervideo(selfobject)
{
	$('.videocontentblock').each(function() {
		  if($(this).children('.video-data')!=selfobject)
		  { if($(this).find('.video-data').length){	
				$(this).children('.video-data').hide();
				$(this).children('.video-data').find('video').remove();
			}
			if($(this).find('video').length){
				$(this).find('.video-loading').remove();
			}
			if($(this).children('img').css('visibility')=='hidden'){
			$(this).children('img').css('visibility','visible'); } }
});
	
	
}



function bindhover(){
	
	$('.videocontentblock').mouseenter(function(){
    if($(window).width()>768){									   
			if($(this).find('.video-data').length){
			var newvideo=$(this).children('.video-data');
			var videolink=newvideo.attr('video_src');
					if(!newvideo.find('video').length){
						if(!$(this).find('.video-loading').length){
								margin_num=parseInt($(this).css('height'))+4;
								$(this).append("<div class='video-loading' style='margin-top:-"+margin_num+"px'></div>")
						}
						checkvideo(newvideo,videolink);
						disableallothervideo(newvideo);
					}
				  }
			} 
    });
	
	$('.videocontentblock').mouseleave(function(){
        if($(window).width()>768){		
			if($(this).find('.video-data').length){	
			$(this).children('.video-data').hide()
			$(this).children('.video-data').find('video').remove();
			}
			if($(this).find('video').length){
			$(this).find('.video-loading').remove();
			}
			if($(this).children('img').css('visibility')=='hidden'){
			$(this).children('img').css('visibility','visible'); }
	   }
    });
	 
	 }



function videocontainerabso(){
	
	if($(window).width()>1680)
		{$('.videolistcontainer').css('width',$(window).width()-240)
		$('.sortcontainer').css('width',$(window).width()-270)
		$('.videobrick').css('width',($(window).width()-270)/4-15)
		$('.videocontentblock').css('height',(($(window).width()-270)/4-15)*288/512)
		$('.videolistcontainer .videocontentblock .video-data').css('marginTop',-7-(($(window).width()-270)/4-15)*288/512)
		$('.videolistcontainer .listadcontainer').css('width',$(window).width()-270);
		$('.videolistcontainer .notificationcontainer').css('width',$(window).width()-270-24);
		
		$('.videolistcontainer .listadcontainer i').css('marginLeft',($(window).width()-260-728)/2+5);
		
	}
	else if($(window).width()<=1680&$(window).width()>1280)
	{$('.videolistcontainer').css('width',$(window).width()-240)
		$('.sortcontainer').css('width',$(window).width()-270)
		$('.videobrick').css('width',($(window).width()-270)/3-15)
		$('.videocontentblock').css('height',(($(window).width()-270)/3-15)*288/512)
		$('.videolistcontainer .videocontentblock .video-data').css('marginTop',-7-(($(window).width()-270)/3-15)*288/512)
		$('.videolistcontainer .listadcontainer').css('width',$(window).width()-270);
		$('.videolistcontainer .notificationcontainer').css('width',$(window).width()-270-24);
		
		$('.videolistcontainer .listadcontainer i').css('marginLeft',($(window).width()-260-728)/2+5);
	}
	else if($(window).width()<=1280&$(window).width()>768)
		{$('.videolistcontainer').css('width',$(window).width()-240)
		$('.sortcontainer').css('width',$(window).width()-270)
		$('.videobrick').css('width',($(window).width()-270)/2-15)
		$('.videocontentblock').css('height',(($(window).width()-270)/2-15)*288/512)
		$('.videolistcontainer .videocontentblock .video-data').css('marginTop',-7-(($(window).width()-270)/2-15)*288/512) 
		
		$('.videolistcontainer .listadcontainer').css('width',$(window).width()-270)
		$('.videolistcontainer .notificationcontainer').css('width',$(window).width()-270-24);
		
		if($(window).width()-230-728>=0)
		{ 
		  $('.videolistcontainer .listadcontainer i').css('marginLeft',($(window).width()-260-728)/2+5);	
		}
		else
		{ 
		 $('.videolistcontainer .listadcontainer i').css('marginLeft',5);}
	
	
	}

	else if($(window).width()<=768&$(window).width()>568)
		{$('.videolistcontainer').css('width',$(window).width())
		$('.sortcontainer').css('width',$(window).width()-20)
		$('.videobrick').css('width',($(window).width()-20)/2-15)
		$('.videocontentblock').css('height',(($(window).width()-20)/2-15)*288/512)
		$('.videolistcontainer .videocontentblock .video-data').css('marginTop',-7-(($(window).width()-20)/2-15)*288/512) 
		
		$('.videolistcontainer .listadcontainer').css('width',$(window).width()-20)
		$('.videolistcontainer .notificationcontainer').css('width',$(window).width()-20-24);
		
		$('.videolistcontainer .listadcontainer i').css('marginLeft',0);
	
	
	}

	else
		{$('.videolistcontainer').css('width',$(window).width())
		$('.sortcontainer').css('width',$(window).width()-20)
		$('.videobrick').css('width',$(window).width()-30)
		$('.videocontentblock').css('height',($(window).width()-30)*288/512)
		$('.videolistcontainer .videocontentblock .video-data').css('marginTop',-7-($(window).width()-30)*288/512)
		
		$('.videolistcontainer .listadcontainer').css('width',$(window).width()-20)
		$('.videolistcontainer .notificationcontainer').css('width',$(window).width()-20-24);
		
		$('.videolistcontainer .listadcontainer i').css('marginLeft',($(window).width()-300)/2-5);
	
	
}


}



function adabso(){

if($(window).width()>1680)
		{
		 $('.listleaderboardcontainer').css('marginLeft',($(window).width()-260-728)/2);	
		
		
	}
	else if($(window).width()<=1680&$(window).width()>1280)
	{
		
		 $('.listleaderboardcontainer').css('marginLeft',($(window).width()-260-728)/2);	
		
	}
	else if($(window).width()<=1280&$(window).width()>768)
		{
		
		if($(window).width()-230-728>=0)
		{ 
		   $('.listleaderboardcontainer').css('marginLeft',($(window).width()-260-728)/2);	

		}
		else
		{ 

		  $('.listleaderboardcontainer').css('marginLeft',0);	
		 }
	
	
}

	else if($(window).width()<=768&$(window).width()>568)
		{
		
		 $('.listleaderboardcontainer').css('marginLeft',0);	
	
	
}

	else
		{
		$('.listleaderboardcontainer').css('marginLeft',($(window).width()-300)/2-10);	
	
		}
	
	
}



function getrecommendevideo(pagination,sortorder)
{  
	if(localStorage.userFavorite){	
		 $.ajax({
            type : 'POST',
            url : 'process/recommend_video.php',           
            data: {
                rec_id : localStorage.userFavorite,
				page:pagination,
				sort_order:sortorder
            },
            success:function (data) {
			if(data!=-1){
              var videodata=JSON.parse(data);
			  $("<div class='videobrickwrap'>"+videodata['output']+"</div>").insertAfter('.sortcontainer');
			  videocontainerabso();
			  /* bindhover(); */
			  }
			  else
			  {  norecommended();  }
			  
            }          
        });
	
	}
	
	else{  norecommended(); }
	
	}


function norecommended(){  
$('.sortcontainer').hide();
$("<div class='noresulttext'><a href='index.php'><img src='img/nolike.png'></a><div class='noresulttitle'>Opps, seems no data here, it may be caused by<br><span><i class='fa fa-ellipsis-v' aria-hidden='true'></i> You have not liked any videoes yet, you can go to check our latest hentai videoes <a href='index.php'>here</a> and favoirte any thing you want</span><br><span><i class='fa fa-ellipsis-v' aria-hidden='true'></i> You may clear your browser cache recently.</span></div></div>").insertAfter('.sortcontainer');   }

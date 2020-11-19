$(document).ready(function(){			   

	detailcontainerabso();
	$(window).resize(function(){ detailcontainerabso(); detailadvertiseabso();}); 
	

	
	$('.embedbutton').click(function(){
			if($(this)[0].hasAttribute('id'))
			{ $(this).removeAttr('id');
			 $('.detailtextarea').slideUp(50);
			}
			else
			{ $(this).attr('id','selected'); 
			$('.detailtextarea').slideDown(50);
				if($('.downloadbutton')[0].hasAttribute('id')){
					$('.downloadbutton').removeAttr('id');
					$('.downloadlinkcontainer').slideUp(50);
				}
			}
							  
								  
								  });
	
	
	$('.downloadbutton').click(function(){
			if($(this)[0].hasAttribute('id'))
			{ $(this).removeAttr('id');
		  	
			 $('.downloadlinkcontainer').slideUp(50);
			}
			else
			{ $(this).attr('id','selected'); 
			$('.downloadlinkcontainer').slideDown(50);
			if($('.embedbutton')[0].hasAttribute('id')){
					$('.embedbutton').removeAttr('id');
					$('.detailtextarea').slideUp(50);
				}

				
			}
							  
								  
								  });
	

	$('.detailcontentad i').click(function(){
			 $(this).parent('.detailcontentad').hide();
															   
		  });
	
	$('.detailleftad i').click(function(){
			 $(this).parent('.fullwidth').parent('.detailleftad').hide();
															   
		  });
	
	$('.detailleftadcustomized i').click(function(){
			 $(this).parent('.fullwidth').parent('.detailleftadcustomized').hide();
															   
		  });
	
	

	$('.mobileshowmore').click(function(){
			 $('.longdes.mobile').each(function (){
				if($(this).hasClass("shown")){
				  $(this).removeClass("shown");
				  $('.mobileshowmore').html('Show More <i class="fas fa-chevron-down"></i>')
				}
				else{ $(this).addClass("shown"); 
				
				$('.mobileshowmore').html('Hide <i class="fas fa-chevron-up"></i>')
				}
	});
															   
		  });

	
     });






function detailcontainerabso(){

	
	if($(window).width()>1920)
	{   var usagelength=1920-240;
		
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-50;
		
		var rightimagewidth = 150;
		var rightlist = rightwidth;
		
		
		$('.videodetailcontainer').css('width',usagelength);
		$('.videowrapper').css('width',mainwidth);
		$('.detaildiscussionpanel').css('width',mainwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth});
		
		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});
		$('.detailrecadtag').css({'marginLeft':rightimagewidth-35-10});
		
		$('.detailleftadcustomized').css({'width':rightwidth-20,'marginLeft':0});
		
		$('.playlistcount').css({'height':rightimagewidth*9/16,'marginLeft':rightimagewidth-60});
		$('.playlistnum').css({'marginTop':(rightimagewidth*9/16-42)/2});

		$('.detailrecinfo').css({'width':rightwidth-rightimagewidth-15});

		$('.descriptionsection').css('width',mainwidth-145);
		
		$('.detailcontentad i').css('marginLeft',(mainwidth-728)/2+5);
		
	
	}
	
	else if($(window).width()<=1920&$(window).width()>1150)
	{	
		var usagelength=$(window).width()-240;
		
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-50;
		var rightimagewidth = 150;
		var rightlist = rightwidth;
		
		
		$('.videodetailcontainer').css('width',usagelength);
		$('.videowrapper').css('width',mainwidth);
		$('.detaildiscussionpanel').css('width',mainwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth});
		
		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});
		$('.detailrecadtag').css({'marginLeft':rightimagewidth-35-7});
		
		$('.detailleftadcustomized').css({'width':rightwidth-20,'marginLeft':0});
		
		
		$('.playlistcount').css({'height':rightimagewidth*9/16,'marginLeft':rightimagewidth-60});
		$('.playlistnum').css({'marginTop':(rightimagewidth*9/16-42)/2});

		$('.detailrecinfo').css({'width':rightwidth-rightimagewidth-15});

		$('.descriptionsection').css('width',mainwidth-145);
		
		
		if(mainwidth>=728){
			$('.detailcontentad i').css('marginLeft',(mainwidth-728)/2+5);
		}
		else {
			$('.detailcontentad i').css('marginLeft',5);
		}
		
	}
	
	else if($(window).width()<=1150&$(window).width()>1024)
	{	
	    var usagelength=$(window).width()-220;
		
		var rightwidth = usagelength; 
		var mainwidth = usagelength - 20 ;
		
		var rightlist = rightwidth/2-20;
		var rightimagewidth = rightlist;
		
		
		$('.videodetailcontainer').css('width',usagelength);
		$('.videowrapper').css('width',mainwidth);
		$('.detaildiscussionpanel').css('width',mainwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});
		$('.detailrecadtag').css({'marginLeft':rightimagewidth-35-10});
		
		$('.detailleftadcustomized').css({'width':350,'marginLeft':(rightwidth-350-20)/2});
		
		$('.playlistcount').css({'height':rightimagewidth*9/16,'marginLeft':rightimagewidth-60});
		$('.playlistnum').css({'marginTop':(rightimagewidth*9/16-42)/2});

		$('.detailrecinfo').css({'width':rightimagewidth});

		$('.descriptionsection').css('width',mainwidth-145);
		
		
		$('.detailcontentad i').css('marginLeft',(mainwidth-728)/2+5);

	
		
	}
	else if($(window).width()<=1024&$(window).width()>768)
	{	
	    var usagelength=$(window).width()-220;
		
		var rightwidth = usagelength; 
		var mainwidth = usagelength - 20 ;
		
		var rightlist = rightwidth/2-20;
		var rightimagewidth = rightlist;
		
		
		$('.videodetailcontainer').css('width',usagelength);
		$('.videowrapper').css('width',mainwidth);
		$('.detaildiscussionpanel').css('width',mainwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});
		$('.detailrecadtag').css({'marginLeft':rightimagewidth-35-10});
		
		$('.detailleftadcustomized').css({'width':350,'marginLeft':(rightwidth-350-20)/2});
		
		$('.playlistcount').css({'height':rightimagewidth*9/16,'marginLeft':rightimagewidth-60});
		$('.playlistnum').css({'marginTop':(rightimagewidth*9/16-42)/2});

		$('.detailrecinfo').css({'width':rightimagewidth});

		$('.descriptionsection').css('width',mainwidth-145);
	
		
		if(usagelength>=728){
		$('.detailcontentad i').css('marginLeft',(usagelength-728)/2+5);
		}
		else {
		$('.detailcontentad i').css('marginLeft',5);
		}
		
	}
	
	
	else if($(window).width()<=768&$(window).width()>568)
	{	
		var usagelength=$(window).width();
	
		$('.videodetailcontainer').css('width',usagelength);
		
		 var usagelength=$(window).width();
		
		var rightwidth = usagelength; 
		var mainwidth = usagelength - 20 ;
		
		var rightlist = (rightwidth-10)/2-10;
		var rightimagewidth = rightlist;
		
		
		$('.videodetailcontainer').css('width',usagelength);
		$('.videowrapper').css('width',mainwidth);
		$('.detaildiscussionpanel').css('width',mainwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});
		$('.detailrecadtag').css({'marginLeft':rightimagewidth-35-10});
		
		$('.detailleftadcustomized').css({'width':350,'marginLeft':(rightwidth-350-20)/2});
		
		$('.playlistcount').css({'height':rightimagewidth*9/16,'marginLeft':rightimagewidth-60});
		$('.playlistnum').css({'marginTop':(rightimagewidth*9/16-42)/2});

		$('.detailrecinfo').css({'width':rightimagewidth});

		$('.descriptionsection').css('width',mainwidth-145);
		
		$('.detailcontentad i').css('marginLeft',2); 
	}
	else{
		var usagelength=$(window).width();
		$('.videodetailcontainer').css('width',usagelength);
		
		 var usagelength=$(window).width();
		
		var rightwidth = usagelength; 
		var mainwidth = usagelength - 20 ;
		
		var rightlist = (rightwidth-10)/1-10;
		var rightimagewidth = rightlist;
		
		
		$('.videodetailcontainer').css('width',usagelength);
		$('.videowrapper').css('width',mainwidth);
		$('.detaildiscussionpanel').css('width',mainwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});
		$('.detailrecadtag').css({'marginLeft':rightimagewidth-35-10});
		$('.detailleftadcustomized').css({'width':350,'marginLeft':(rightwidth-350-20)/2});
		
		$('.playlistcount').css({'height':rightimagewidth*9/16,'marginLeft':rightimagewidth-60});
		$('.playlistnum').css({'marginTop':(rightimagewidth*9/16-42)/2});

		$('.detailrecinfo').css({'width':rightimagewidth});

		$('.descriptionsection').css('width',mainwidth-145);
		
		
		$('.detailcontentad i').css('marginLeft',($(window).width()-300)/2-5); 
		
		}
	
	
	
	
	 $('.video').css('height',parseInt($('.video').css('width'))*9/16);
}

function detailadvertiseabso(){
	if($(window).width()>1920)
	{  
		var usagelength=1920-240;
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-50;
		$('.detailcontentadiframecontainer').css('marginLeft',(mainwidth-728)/2);
		$('.detailleftiframecontainer').css('marginLeft',0);
	
	}
	
	else if($(window).width()<=1920&$(window).width()>1150)
	{	var usagelength=$(window).width()-240;
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-50;
		
		$('.detailleftiframecontainer').css('marginLeft',0);
		
		if(mainwidth>=728){
		$('.detailcontentadiframecontainer').css('marginLeft',(mainwidth-728)/2);
		}
		else { $('.detailcontentadiframecontainer').css('marginLeft',0);
		}
		 
	}
	
	else if($(window).width()<=1150&$(window).width()>768)
	{ 	var usagelength=$(window).width()-220;
		var mainwidth = usagelength - 40 ;
		if(mainwidth>=728){
		$('.detailcontentadiframecontainer').css('marginLeft',(mainwidth-728)/2);
		 $('.detailleftiframecontainer').css('marginLeft',(mainwidth-320)/2);
		}
		else { $('.detailcontentadiframecontainer').css('marginLeft',0);
 				$('.detailleftiframecontainer').css('marginLeft',(mainwidth-320)/2);
		}
		
	}
	
	else if($(window).width()<=768&$(window).width()>568)
		{	

		$('.detailcontentadiframecontainer').css('marginLeft',0);
		 $('.detailleftiframecontainer').css('marginLeft',($(window).width()-320)/2);	
	
	}
	
	
	else{
		  
		 $('.detailcontentadiframecontainer').css('marginLeft',($(window).width()-300)/2-10); 
	     $('.detailleftiframecontainer').css('marginLeft',($(window).width()-320)/2);
			
		 
		
		}
	
	
	
	
}



function addlikehistory(videoid){
if(!localStorage.userFavorite) {
var myhis=new Array(); }
else{myhis=JSON.parse(localStorage.userFavorite)}
myhis.push(videoid);
myhis=$.unique(myhis);
localStorage.userFavorite=JSON.stringify(myhis);
}




function removelikehistory(videoid){
myhis=JSON.parse(localStorage.userFavorite);
myhis=jQuery.grep(myhis, function( a ) {
  return a !== videoid;
});
localStorage.userFavorite=JSON.stringify(myhis);
}




function checklikeornot(videoid)
{ 
if(localStorage.userFavorite) {
	myhis=JSON.parse(localStorage.userFavorite);
		if(jQuery.inArray( videoid, myhis )!=-1)
			{$('.favoritebutton').attr('id','selected'); 
			 $('.favoritebutton #likelabel').html('Liked');
			}

	}

}

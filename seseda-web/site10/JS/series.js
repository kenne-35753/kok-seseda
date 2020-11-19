$(document).ready(function(){			   

	serycontainerabso();
	$(window).resize(function(){ serycontainerabso(); detailcontainerabso(); }); 
	
	$('.detailleftad i').click(function(){
			 $(this).parent('.fullwidth').parent('.detailleftad').hide();
															   
		  });

	
     });

function serycontainerabso(){
	if($(window).width()>1920)
	{   var usagelength=1920-240;
		
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-20;
		var rightimagewidth = 150;
		var rightlist = rightwidth;
		
		var sertylist = (mainwidth)/2-20
		var tagwidth = (mainwidth)/4-20
		
		$('.videoseryconatiner').css('width',usagelength);
		$('.serywrapper').css('width',mainwidth);
		$('.alphaticlist').css('width',mainwidth-15);
		
		$('.serywrapperrow').css('width',mainwidth-20);
		$('.alpahticlabel').css('width',mainwidth-20-18);
		
		
		$('.sererytitle').css('width',sertylist);
		
		
		$('.serywrapper .tagtext').css('width',tagwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth});
		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});

		$('.detailrecinfo').css({'width':rightwidth-rightimagewidth-15});
		
		
	
	}
	
	
	else if($(window).width()<=1920&$(window).width()>1280)
	{	var usagelength=$(window).width()-240;
		
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-20;
		var rightimagewidth = 150;
		var rightlist = rightwidth;
		
		var sertylist = (mainwidth)/2-20
		var tagwidth = (mainwidth)/3-20
		
		$('.videoseryconatiner').css('width',usagelength);
		$('.serywrapper').css('width',mainwidth);
		$('.alphaticlist').css('width',mainwidth-15);
		
		$('.serywrapperrow').css('width',mainwidth-20);
		$('.alpahticlabel').css('width',mainwidth-20-18);

		$('.sererytitle').css('width',sertylist);

		$('.serywrapper .tagtext').css('width',tagwidth);
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth});
		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});

		$('.detailrecinfo').css({'width':rightwidth-rightimagewidth-15});
		
		
		

	}
	
	else if($(window).width()<=1280&$(window).width()>1024)
	{	var usagelength=$(window).width()-220;
		var rightwidth = usagelength; 
		var mainwidth = usagelength;
		
		var rightlist = rightwidth/3-20;
		var rightimagewidth = rightlist;
		
		var sertylist = (mainwidth)/2-20
		var tagwidth = (mainwidth)/3-20
		
		
		$('.videoseryconatiner').css('width',usagelength);
		
		$('.serywrapper').css('width',mainwidth);
		$('.alphaticlist').css('width',mainwidth-15);
		
		$('.serywrapperrow').css('width',mainwidth-20);
		$('.alpahticlabel').css('width',mainwidth-20-18);

		$('.sererytitle').css('width',sertylist);

		$('.serywrapper .tagtext').css('width',tagwidth);
		
		
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});

		$('.detailrecinfo').css({'width':rightimagewidth});
		
	}
	
	else if($(window).width()<=1024&$(window).width()>768)
	{	var usagelength=$(window).width()-220;
		var rightwidth = usagelength; 
		var mainwidth = usagelength;
		
		var rightlist = rightwidth/2-20;
		var rightimagewidth = rightlist;
		
		var sertylist = (mainwidth)/2-20
		var tagwidth = (mainwidth)/3-20
		
		
		$('.videoseryconatiner').css('width',usagelength);
		
		$('.serywrapper').css('width',mainwidth);
		$('.alphaticlist').css('width',mainwidth-15);
		
		$('.serywrapperrow').css('width',mainwidth-20);
		$('.alpahticlabel').css('width',mainwidth-20-18);

		$('.sererytitle').css('width',sertylist);

		$('.serywrapper .tagtext').css('width',tagwidth);
		
		
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});

		$('.detailrecinfo').css({'width':rightimagewidth});
		
	}

	else if($(window).width()<=768&$(window).width()>568)
	{	
		var usagelength=$(window).width();
		var rightwidth = usagelength; 
		var mainwidth = usagelength ;
		
		var rightlist = (rightwidth-10)/3-10;
		var rightimagewidth = rightlist;
		
		var sertylist = (mainwidth-10)/2-10
		var tagwidth = (mainwidth-10)/3-10
		
		
		$('.videoseryconatiner').css('width',usagelength);
		
		$('.serywrapper').css('width',mainwidth);
		$('.alphaticlist').css('width',mainwidth-15);
		
		$('.serywrapperrow').css('width',mainwidth-20);
		$('.alpahticlabel').css('width',mainwidth-20-18);

		$('.sererytitle').css('width',sertylist);

		$('.serywrapper .tagtext').css('width',tagwidth);
		
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});

		$('.detailrecinfo').css({'width':rightimagewidth});
	

	
	}
	
	
	
	else
	{	
	
		var usagelength=$(window).width();
		var rightwidth = usagelength; 
		var mainwidth = usagelength ;
		
		var rightlist = (rightwidth-10)/2-10;
		var rightimagewidth = rightlist;
		
		var sertylist = (mainwidth-10)/1-10
		var tagwidth = (mainwidth-10)/2-10
		
		
		$('.videoseryconatiner').css('width',usagelength);
		
		$('.serywrapper').css('width',mainwidth);
		$('.alphaticlist').css('width',mainwidth-15);
		
		$('.serywrapperrow').css('width',mainwidth-20);
		$('.alpahticlabel').css('width',mainwidth-20-18);

		$('.sererytitle').css('width',sertylist);

		$('.serywrapper .tagtext').css('width',tagwidth);
		
		
		$('.rightcontainer').css({'width':rightwidth,'marginRight':0});
		$('.rightcontainerrow').css({'width':rightwidth-20});

		$('.detailreclist').css({'width':rightlist});
		$('.detailreclist img').css({'width':rightimagewidth,'height':rightimagewidth*9/16});

		$('.detailrecinfo').css({'width':rightimagewidth});
	}
	
	
	
}


function detailadvertiseabso(){
	if($(window).width()>1920)
	{  
		var usagelength=1920-240;
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-50;
		$('.detailleftad iframe').css('marginLeft',0);
	
	}
	
	else if($(window).width()<=1920&$(window).width()>1280)
	{	var usagelength=$(window).width()-240;
		var rightwidth = 380; 
		var mainwidth = usagelength - rightwidth-50;
		$('.detailleftad iframe').css('marginLeft',0);
		 
	}
	
	else if($(window).width()<=1280&$(window).width()>768)
	{ 	var usagelength=$(window).width()-220;
		var mainwidth = usagelength - 40 ;
	 $('.detailleftad iframe').css('marginLeft',(mainwidth-320)/2);
		
	}
	else{
		  
	     $('.detailleftad iframe').css('marginLeft',($(window).width()-320)/2);
		
		
		}
	
	
	
	
}
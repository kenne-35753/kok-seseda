$(document).ready(function(){			   

	seryvideoabso();
	$(window).resize(function(){ seryvideoabso();}); 
	


	
     });

function seryvideoabso(){
	if($(window).width()>768)
	{   $('.serylistcontainer').css('width',$(window).width()-240);
		$('.serydetailsection').css('width',$(window).width()-240-240);
		$('.serylistcontainer img').css('width',200);
		$('.serylistcontainer img').css('marginLeft',0);
	}
	
	else if($(window).width()<=768)
	{	 $('.serylistcontainer').css('width',$(window).width()-20);
		$('.serydetailsection').css('width',$(window).width()-30);
		$('.serylistcontainer img').css('width',200);
		$('.serylistcontainer img').css('marginLeft',($(window).width()-215)/2);

	}
	

	
	
	
}
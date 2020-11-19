$(document).ready(function(){			   

	interabso();
	$(window).resize(function(){ interabso();}); 
	

	
	
     });








function interabso(){
	
	
	if($(window).width()>768)
		{$('.notfoundcontainer').css('width',$(window).width()-240);
		 $('.notfoundcontainer img').css('marginLeft',($(window).width()-240-500)/2);
		  $('.notfoundbutton').css('marginLeft',($(window).width()-240-180)/2);
		}
	else{ $('.notfoundcontainer').css('width',$(window).width()-40);
	
		$('.notfoundcontainer img').css('marginLeft',0);
		  $('.notfoundbutton').css('marginLeft',($(window).width()-40-180)/2);
	}	

}



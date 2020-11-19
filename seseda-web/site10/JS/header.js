$(document).ready(function(){			   

	menuabso();
	$(window).resize(function(){ menuabso();}); 
	
	
	

		
		
     });



function checkadcookieexpire(){
	
	 if (navigator.cookieEnabled){
		 if (document.cookie.indexOf('ohentaiinter_pass') > -1 ) {
			  return false; 
			}
		 else{
			 setCookie('ohentaiinter_pass',1,2);
			 return true; 
			 }
		 }
	else{ return false; }	
	}




function setCookie(cname, cvalue, exhour) {
  var d = new Date();
  d.setTime(d.getTime() + (exhour*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function deleteCookie(){
	
	document.cookie = "ohentaiinter_pass; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";	
	
	}










function myFunctoin(el)
{
if($('#navcont').css('display')=='none')
{$('#navcont').attr('class','navcontainer responsive');  
$('#tagcont').attr('class','hometagcontainer responsive');  

}
else{$('#navcont').attr('class','navcontainer'); 
$('#tagcont').attr('class','hometagcontainer');
}


}


function menuabso(){
	if($(window).width()>1024)
	{ 
	$('.searchbox').css({'width':340}); 
	$('.hometagcontainer').css({'width':200});
	$('.hometagcontainer ul li').css({'width':200, 'height':60});
	$('.homeleftpromotioncard').css({'width':200});
	$('.hometagcontainer .viewalltagbutton').css({'width':196});
	
	// $('.footerlongdis').css({'width':($(window).width()*0.33-40)});
	}
	else if($(window).width()>768&&$(window).width()<=1024)
	{  
	$('.searchbox').css({'width':$(window).width()-500}); 
	$('.hometagcontainer').css({'width':200});
	$('.hometagcontainer ul li').css({'width':200, 'height':60});
	$('.homeleftpromotioncard').css({'width':200});
	$('.hometagcontainer .viewalltagbutton').css({'width':196});
	
	// $('.footerlongdis').css({'width':($(window).width()*0.33-40)});
	}
	else if($(window).width()<=768&&$(window).width()>568)
	{  $('.searchbox').css({'width':$(window).width()-210}); 
	$('.hometagcontainer').css({'width':$(window).width()-10});
	$('.hometagcontainer ul li').css({'width':($(window).width()-10)/3-10, 'height':(($(window).width()-10)/3-10)*60/200});
	$('.homeleftpromotioncard').css({'width':($(window).width()-10)/2-10});
	$('.hometagcontainer .viewalltagbutton').css({'width':($(window).width()-30)});
	
	// $('.footerlongdis').css({'width':($(window).width()*0.33-40)});
	
	}
	else
	{  $('.searchbox').css({'width':$(window).width()-210}); 
	$('.hometagcontainer').css({'width':$(window).width()-10});
	$('.hometagcontainer ul li').css({'width':($(window).width()-10)/2-10, 'height':(($(window).width()-10)/2-10)*60/200});
	$('.homeleftpromotioncard').css({'width':($(window).width()-10)/1-10})
	$('.hometagcontainer .viewalltagbutton').css({'width':($(window).width()-30)});
	// $('.footerlongdis').css({'width':($(window).width()*0.33-40)});
	
	}
	
}



function generatepagination(url,currentpage,totalcount){
	var total=Math.ceil(totalcount/23);
	currentpage=parseInt(currentpage);
	var output="<li><div class='active'>"+currentpage+"</div></li>";
	for(var i=1; i<4; i++)
	{  var preid=parseInt(currentpage)-i;
		var forid=parseInt(currentpage)+i;
		if(forid<=total){
		output=output+"<li><a href='"+url+forid+"'>"+forid+"</a></li>";}
		if(preid>=1){
		output="<li><a href='"+url+preid+"'>"+preid+"</a></li>"+output;}
	}
	
	
	if(currentpage>4)
	{ if(currentpage==5)
	{output="<li><a href='"+url+"1' >"+1+"</a></li>"+output;}
	else
	{output="<li><a href='"+url+"1' >"+1+"</a></li><li><div class='morepagination'>...</div>"+output;}}
	
	if(currentpage<=total-4)
	{   if(currentpage==total-4)
	{output=output+"<li><a href='"+url+total+"'>"+total+"</a></li>";}
	else
	{output=output+"<li><div class='morepagination'>...</div></li><li><a href='"+url+total+"'>"+total+"</a></li>";}
		}
	
	
	if(currentpage<total)
	{output=output+"<li><a href='"+url+(parseInt(currentpage)+1)+"'>Next</a></li>"; }
	
	if(currentpage>1)
	{output="<li><a href='"+url+(parseInt(currentpage)-1)+"'>Prev</a></li>"+output}
	
	
	if($('ul.pagination').length > 0)
	{ $('ul.pagination').append(output);
		if(total==1){
	$('ul.pagination').after("<div class='onepagetext'>That's all results. No good? Try broadening your searchterm. &nbsp&nbsp Or You can also go to check our latest videos <a href='index.php'>here</a>! </div>")
		}
	
	}
	
}



function loadplaceholder(object,url){
object.src=url;	
	
}



$(function() {

        $('html').click(function() {
            $('#search_options_menucontent').hide();
        });

        $('#search_options').click(function(e) {
	    var el = $('#search_options');
	    var pos = el.position();
            var h = el.outerHeight();
            $('#search_options_menucontent').css({'left':pos.left,'top':(pos.top+h+10)});
	    e.stopPropagation();

            $('#search_options_menucontent').toggle();
        });

	$('input:radio[name="search_app"]').change(function(){
		switch(this.value) {
			case "all":
				$('#search_options').text('Everything');
				$('#search_form').attr('data-url', '//homegrownfreaks.net/tv/search/%QUERY%/');
				break;
			case "videos":
				$('#search_options').text('Videos');
				$('#search_form').attr('data-url', '//homegrownfreaks.net/tv/search/%QUERY%/?section=videos');
				break;
			case "photos":
				$('#search_options').text('Photos');
				$('#search_form').attr('data-url', '//homegrownfreaks.net/tv/search/%QUERY%/?section=pictures');
				break;
		}
	});
});

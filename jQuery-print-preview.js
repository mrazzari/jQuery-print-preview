// PRINT button and print preview
jQuery(function($) {
	// For the site's print button 
	$('#print').click(do_print);
	// IE supports attaching this behavor to the File > Print menu item 
	if ($.browser.msie){
		window.onbeforeprint = function(event){
			// preventDefault here doesn't prevent IE's launching of the print dialog. 
			// Instead, it prevents a bug where the print dialog doesn't appear until the uses clicks anywhere.
			if (!event) {event = document.parentWindow.event} 
			if (!event.preventDefault){ event.preventDefault = function(){ this.returnValue = false;} }
			event.preventDefault();
			do_print(false);
		};	
		var delay = 1500;
	} else {
		var delay = 300;		
	}
	
	function do_print(fireprint){
		if (typeof fireprint == 'undefined'){ var fireprint = true; }
		$(".timelineTabs .image img").unreflect();
		$('style[media=screen]').attr('media','none');
		$('link[href*=print.css]').attr('media','all');
		
		window.scrollTo(0,0);
		
		if (fireprint){
			setTimeout(function(){
				window.print();
			},100);
		}
		setTimeout(function(){
			$('style[media=none]').attr('media','screen');
		},delay);
		setTimeout(function(){
			$('link[href*=print.css]').attr('media','print');
		},delay+1);
		return false;
	};
});

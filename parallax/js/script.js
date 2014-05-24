$('#main').height($(window).height());	
$(window).resize(function(){
	$('#main').height($(window).height());	
});

$(window).scroll(function(){
	var newY = $(document).scrollTop() / 2;
	$('#main').css('background-position', function(){
		return '50% '+newY+'px';
	});
	$('#main-text').css('opacity', function(){
		return 1 - $(document).scrollTop() *.005;
	});
	$('#main-text').css('translateY', function(){
		return '0px , '+1 - $(document).scrollTop() *.005 + ', 0px)';
	});
})
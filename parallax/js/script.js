$('#main').height($(window).height());	
$(window).resize(function(){
	$('#main').height($(window).height());	
});

$(window).scroll(function(){
	console.log($(document).scrollTop());
	$('#main').css('background-position', function(){
		return '50% calc(50% + ' + $(document).scrollTop() / 2 + 'px)';
	});
})
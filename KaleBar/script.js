$(function() {
    var pull        = $('#navicon');
        menu        = $('.mainnav .mainnav-content');
        counter  	= 0;
          
    $(pull).on('click', function(e) {
        e.preventDefault();
        counter++;
        menu.slideToggle(function(){
        	if(counter % 2 > 0){
    			$("#navicon-toggle").replaceWith( "<span id='navicon-toggle'>⬆</span>");
    		}else{
    			$("#navicon-toggle").replaceWith( "<span id='navicon-toggle'>⬇</span>");
    		}
    	});
    });
});

$(window).resize(function(){
    var w = $(window).width();  
    if(w > 1050 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});
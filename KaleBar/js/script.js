$(function() {
    $(document).ready(function() {
        $(".page-wrap").hide();
    });
    $(window).load(function() {
        $(".page-wrap").show();
    });
    var pull        = $('#navicon');
        menu        = $('.mainnav .mainnav-content');
        counter  	= 0;


    $(pull).on('click', function(e) {
        e.preventDefault();
        counter++;
        menu.slideToggle(function(){
        	if(counter % 2 > 0){
    			$("#navicon-add").replaceWith( "<span id='navicon-subtract'></span>");

    		}else{
    			$("#navicon-subtract").replaceWith( "<span id='navicon-add'></span>");
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
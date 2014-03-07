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
    // picture fill
    (function( w ){

    // Enable strict mode
    "use strict";

    w.picturefill = function() {
        var ps = w.document.getElementsByTagName( "span" );

        // Loop the pictures
        for( var i = 0, il = ps.length; i < il; i++ ){
            if( ps[ i ].getAttribute( "data-picture" ) !== null ){

                var sources = ps[ i ].getElementsByTagName( "span" ),
                    matches = [];

                // See if which sources match
                for( var j = 0, jl = sources.length; j < jl; j++ ){
                    var media = sources[ j ].getAttribute( "data-media" );
                    // if there's no media specified, OR w.matchMedia is supported 
                    if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
                        matches.push( sources[ j ] );
                    }
                }

            // Find any existing img element in the picture element
            var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

            if( matches.length ){
                var matchedEl = matches.pop();
                if( !picImg || picImg.parentNode.nodeName === "NOSCRIPT" ){
                    picImg = w.document.createElement( "img" );
                    picImg.alt = ps[ i ].getAttribute( "data-alt" );
                }
                else if( matchedEl === picImg.parentNode ){
                    // Skip further actions if the correct image is already in place
                    continue;
                }

                picImg.src =  matchedEl.getAttribute( "data-src" );
                matchedEl.appendChild( picImg );
                picImg.removeAttribute("width");
                picImg.removeAttribute("height");
            }
            else if( picImg ){
                picImg.parentNode.removeChild( picImg );
            }
        }
        }
    };
    // Run on resize and domready (w.load as a fallback)
    if( w.addEventListener ){
        w.addEventListener( "resize", w.picturefill, false );
        w.addEventListener( "DOMContentLoaded", function(){
            w.picturefill();
            // Run once only
            w.removeEventListener( "load", w.picturefill, false );
        }, false );
        w.addEventListener( "load", w.picturefill, false );
    }
    else if( w.attachEvent ){
        w.attachEvent( "onload", w.picturefill );
    }

}( this ));

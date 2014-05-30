(function(){$(function(){var e=0,t=["translateX","translateY","opacity","rotate","scaleXX","skew"];$doc=$(document),$window=$(window),$body=$("body"),$html=$("html"),wrappers=[],currentWrapper=null,bodyHeight=0,windowHeight=0,windowWidth=0,prevKeyframesDurations=0,scrollTop=0,relativeScrollTop=0,currentKeyframe=0,keyframes=[{wrapper:"#intro",duration:1e3,animations:[{element:".first-line",translateX:-5,opacity:0},{element:".second-line",translateX:5,opacity:0}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:5,rotate:[45,45]},{element:".triangle-small-1",translateY:5,rotate:[-90,-90]},{element:".triangle-small-2",translateY:5},{element:".triangle-medium",translateY:5,rotate:[135,135]},{element:".triangle-large-1",translateY:5,rotate:[180,180]},{element:".triangle-large-2",translateY:5,rotate:[90,90]},{element:".parallelogram",translateY:5,skew:[-45,-45]}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:[5,9.5],translateX:-1.5,rotate:[45,45]},{element:".triangle-small-1",translateY:[5,6],translateX:2,rotate:[-90,-90]},{element:".triangle-small-2",translateY:[5,7.5],translateX:-5.5},{element:".triangle-medium",translateY:[5,7],translateX:1,rotate:[135,135]},{element:".triangle-large-1",translateY:[5,8],rotate:[180,180]},{element:".triangle-large-2",translateY:[5,5],translateX:-3,rotate:[90,90]},{element:".parallelogram",translateY:[5,8],translateX:-6,skew:[-45,-45]}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:[9.5,7],translateX:[-1.5,1.1],rotate:[45,45]},{element:".triangle-small-1",translateY:[6,12.9],translateX:[2,-1.1],rotate:[-90,100]},{element:".triangle-small-2",translateY:[7.5,8],translateX:[-5.5,-2.7],rotate:-10},{element:".triangle-medium",translateY:[7,4.7],translateX:[1,-2.8],rotate:[135,250]},{element:".triangle-large-1",translateY:[8,10.9],translateX:.9,rotate:[180,135]},{element:".triangle-large-2",translateY:[5,8.3],translateX:[-3,.4],rotate:[90,-45]},{element:".parallelogram",translateY:[8,7.3],translateX:[-6,3.9],rotate:5,skew:[-45,-45]}]},{wrapper:"#tangram",duration:500,animations:[{element:".square",translateY:[7,7],translateX:[1.1,1.1],rotate:[45,45]},{element:".triangle-small-1",translateY:[12.9,12.9],translateX:[-1.1,-1.1],rotate:[100,100]},{element:".triangle-small-2",translateY:[8,8],translateX:[-2.7,-2.7],rotate:[-10,-10]},{element:".triangle-medium",translateY:[4.7,4.7],translateX:[-2.8,-2.8],rotate:[250,250]},{element:".triangle-large-1",translateY:[10.9,10.9],translateX:[.9,.9],rotate:[135,135]},{element:".triangle-large-2",translateY:[8.3,8.3],translateX:[.4,.4],rotate:[-45,-45]},{element:".parallelogram",translateY:[7.3,7.3],translateX:[3.9,3.9],rotate:[5,5],skew:[-45,-45]}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:[7,10],translateX:[1.1,-4],rotate:[45,45]},{element:".triangle-small-1",translateY:[12.9,10],translateX:[-1.1,-4],rotate:[100,-90]},{element:".triangle-small-2",translateY:[8,8.4],translateX:[-2.7,-3.5],rotate:[-10,90]},{element:".triangle-medium",translateY:[4.7,9.5],translateX:[-2.8,-2.3],rotate:[250,270]},{element:".triangle-large-1",translateY:[10.9,15],translateX:[.9,1.4],rotate:[135,135]},{element:".triangle-large-2",translateY:[8.3,11.7],translateX:[.4,2.15],rotate:[-45,90]},{element:".parallelogram",translateY:[7.3,8.75],translateX:[3.9,-0.95],rotate:[5,45],scaleX:-1,skew:[-45,-45]}]},{wrapper:"#tangram",duration:500,animations:[{element:".square",translateY:[10,10],translateX:[-4,-4],rotate:[45,45]},{element:".triangle-small-1",translateY:[10,10],translateX:[-4,-4],rotate:[-90,-90]},{element:".triangle-small-2",translateY:[8.4,8.4],translateX:[-3.5,-3.5],rotate:[90,90]},{element:".triangle-medium",translateY:[9.5,9.5],translateX:[-2.3,-2.3],rotate:[270,270]},{element:".triangle-large-1",translateY:[15,15],translateX:[1.4,1.4],rotate:[135,135]},{element:".triangle-large-2",translateY:[11.7,11.7],translateX:[2.15,2.15],rotate:[90,90]},{element:".parallelogram",translateY:[8.75,8.75],translateX:[-0.95,-0.95],rotate:[45,45],scaleX:[-1,-1],skew:[-45,-45]}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:[10,11.1],translateX:[-4,-1.5],rotate:[45,45]},{element:".triangle-small-1",translateY:[10,16.9],translateX:[-4,-0.77],rotate:[-90,135]},{element:".triangle-small-2",translateY:[8.4,11.6],translateX:[-3.5,-1],rotate:[90,90]},{element:".triangle-medium",translateY:[9.5,12.4],translateX:[-2.3,1.1],rotate:[270,0]},{element:".triangle-large-1",translateY:[15,14.25],translateX:[1.4,-0.45],rotate:[135,-90]},{element:".triangle-large-2",translateY:[11.7,13.2],translateX:[2.15,2.71],rotate:[90,90]},{element:".parallelogram",translateY:[8.75,8.75],translateX:[-0.95,-0.95],rotate:[45,45],scaleX:[-1,-1],skew:[-45,-45]}]},{wrapper:"#tangram",duration:500,animations:[{element:".square",translateY:[11.1,11.1],translateX:[-1.5,-1.5],rotate:[45,45]},{element:".triangle-small-1",translateY:[16.9,16.9],translateX:[-0.77,-0.77],rotate:[135,135]},{element:".triangle-small-2",translateY:[11.6,11.6],translateX:[-1,-1],rotate:[90,90]},{element:".triangle-medium",translateY:[12.4,12.4],translateX:[1.1,1.1],rotate:[0,0]},{element:".triangle-large-1",translateY:[14.25,14.25],translateX:[-0.45,-0.45],rotate:[-90,-90]},{element:".triangle-large-2",translateY:[13.2,13.2],translateX:[2.71,2.71],rotate:[90,90]},{element:".parallelogram",translateY:[8.75,8.75],translateX:[-0.95,-0.95],rotate:[45,45],scaleX:[-1,-1],skew:[-45,-45]}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:[11.1,12.5],translateX:[-1.5,-1.5],rotate:[45,45]},{element:".triangle-small-1",translateY:[16.9,9],translateX:[-0.77,2],rotate:[135,-90]},{element:".triangle-small-2",translateY:[11.6,10.5],translateX:[-1,-5.5],rotate:[90,0]},{element:".triangle-medium",translateY:[12.4,10],translateX:[1.1,1],rotate:[0,135]},{element:".triangle-large-1",translateY:[14.25,11],translateX:[-0.45,0],rotate:[-90,180]},{element:".triangle-large-2",translateY:[13.2,8],translateX:[2.71,-3],rotate:[90,90]},{element:".parallelogram",translateY:[8.75,11],translateX:[-0.95,-6],rotate:[45,0],scaleX:[-1,1],skew:[-45,-45]}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:[12.5,7],translateX:[-1.5,0],rotate:[45,45]},{element:".triangle-small-1",translateY:[9,7],translateX:[2,0],rotate:[-90,-90]},{element:".triangle-small-2",translateY:[10.5,7],translateX:[-5.5,0],rotate:[0,0]},{element:".triangle-medium",translateY:[10,7],translateX:[1,0],rotate:[135,135]},{element:".triangle-large-1",translateY:[11,7],translateX:[0,0],rotate:[180,180]},{element:".triangle-large-2",translateY:[8,7],translateX:[-3,0],rotate:[90,90]},{element:".parallelogram",translateY:[11,7],translateX:[-6,0],rotate:[0,0],scaleX:[1,1],skew:[-45,-45]}]},{wrapper:"#tangram",duration:1e3,animations:[{element:".square",translateY:[7,0],translateX:[0,0],rotate:[45,45]},{element:".triangle-small-1",translateY:[7,0],translateX:[0,0],rotate:[-90,-90]},{element:".triangle-small-2",translateY:[7,0],translateX:[0,0],rotate:[0,0]},{element:".triangle-medium",translateY:[7,0],translateX:[0,0],rotate:[135,135]},{element:".triangle-large-1",translateY:[7,0],translateX:[0,0],rotate:[180,180]},{element:".triangle-large-2",translateY:[7,0],translateX:[0,0],rotate:[90,90]},{element:".parallelogram",translateY:[7,0],translateX:[0,0],rotate:[0,0],scaleX:[1,1],skew:[-45,-45]}]},{wrapper:"#ending",duration:1e3,animations:[{element:".final-line",opacity:[0,1]}]},{wrapper:"#ending",duration:1e3,animations:[{element:".final-line",opacity:[1,1]}]}];init=function(){scrollIntervalID=setInterval(updatePage,10);setupValues();$window.resize(resizeHandler)};getDefaultPropertyValue=function(e){switch(e){case"translateX":return 0;case"translateY":return 0;case"opacity":return 1;case"rotate":return 0;case"scaleX":return 1;case"skew":return 0;default:return null}};updatePage=function(){window.requestAnimationFrame(function(){setScrollTops();if(scrollTop>=0&&scrollTop<=bodyHeight-windowHeight){animateElements();setKeyframe()}})};setupValues=function(){windowHeight=$(window).height();windowWidth=$(window).width();buildPage()};buildPage=function(){var e,t;for(var n=0;n<keyframes.length;n++){bodyHeight+=keyframes[n].duration;$.inArray(keyframes[n].wrapper,wrappers)===-1&&wrappers.push(keyframes[n].wrapper);for(var r=0;r<keyframes[n].animations.length;r++)for(key in keyframes[n].animations[r]){e=keyframes[n].animations[r][key];if(key!=="element"&&e instanceof Array==0){t=[];t.push(getDefaultPropertyValue(key),e);e=t}keyframes[n].animations[r][key]=e}}$body.height(bodyHeight);setTimeout(function(){$window.scrollTop(0)},100);currentWrapper=wrappers[0];$(currentWrapper).show()};setScrollTops=function(){$window.scrollTop()<0&&$window.scrollTop(0);scrollTop=$window.scrollTop();relativeScrollTop=scrollTop-prevKeyframesDurations};animateElements=function(){var e,t,n,r,i,s,o;for(var u=0;u<keyframes[currentKeyframe].animations.length;u++){e=keyframes[currentKeyframe].animations[u];t=calcValue(e,"translateY");n=calcValue(e,"translateX");r=calcValue(e,"scaleX");i=calcValue(e,"rotate");s=calcValue(e,"skew");o=calcValue(e,"opacity");$(e.element).css({transform:"translate3d("+n+"em, "+t+"em, 0) scaleX("+r+") rotate("+i+"deg) skew("+s+"deg)",opacity:o})}};calcValue=function(e,t){var n=e[t];n?n=easeInOutQuad(relativeScrollTop,n[0],n[1]-n[0],keyframes[currentKeyframe].duration):n=getDefaultPropertyValue(t);return n};easeInOutQuad=function(e,t,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+t};setKeyframe=function(){if(scrollTop>keyframes[currentKeyframe].duration+prevKeyframesDurations){prevKeyframesDurations+=keyframes[currentKeyframe].duration;currentKeyframe++;showCurrentWrappers()}else if(scrollTop<prevKeyframesDurations){currentKeyframe--;prevKeyframesDurations-=keyframes[currentKeyframe].duration;showCurrentWrappers()}};showCurrentWrappers=function(){var e;if(keyframes[currentKeyframe].wrapper!=currentWrapper){$(currentWrapper).hide();$(keyframes[currentKeyframe].wrapper).show();currentWrapper=keyframes[currentKeyframe].wrapper}};resizeHandler=function(){};init()})}).call(this);
(function(){ 
  $(function(){
    var $doc = $(document),
        $window = $(window),
        $body = $('body'),
        $html = $('html'),
        scrollTimeoutID = 0,
        scrollDir = 0,
        scrollDist = 0,    
        wrappers = [],
        currentWrapper = null,
        bodyHeight = 0,
        windowHeight = 0,
        prevKeyframesDurations = 0,
        scrollTop = 0,
        relativeScrollTop = 0,
        currentKeyframe = 0,
        isMobile = $html.hasClass('touch'),
        keyframes = [
          {
            wrapper: '#intro',
            duration: 1000,
            animations: [
              {
                element: '.first-line',
                translateX: -5,
                opacity: 0
              },{
                element: '.second-line',
                translateX: 5,
                opacity: 0,
              }
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: 5,
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: 5,
                rotate: [-90,-90]
              },{
                element: '.triangle-small-2',
                translateY: 5,
              },{
                element: '.triangle-medium',
                translateY: 5,
                rotate: [135,135]
              },{
                element: '.triangle-large-1',
                translateY: 5,
                rotate: [180,180]
              },{
                element: '.triangle-large-2',
                translateY: 5,
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: 5,
                skew: [-45,-45]  
              },{
                element: '#section-nav',
                translateX: [0,-2]
              },{
                element: '#turtle',
                opacity: [.5,.5]
              },{
                element: '#fox',
                opacity: [.5,.5]
              },{
                element: '#cardinal',
                opacity: [.5,.5]
              }   
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: [5,9.5],
                translateX: -1.5,
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [5,6],
                translateX: 2,
                rotate: [-90,-90]
              },{
                element: '.triangle-small-2',
                translateY: [5,7.5],
                translateX: -5.5
              },{
                element: '.triangle-medium',
                translateY: [5,7],
                translateX: 1,
                rotate: [135,135]
              },{
                element: '.triangle-large-1',
                translateY: [5,8],
                rotate: [180,180]
              },{
                element: '.triangle-large-2',
                translateY: [5,5],
                translateX: -3,
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: [5,8],
                translateX: -6,
                skew: [-45,-45]  
              },{
                element: '#section-nav',
                translateX: [-2, -2]
              }    
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: [9.5,7],
                translateX: [-1.5,1.1],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [6,12.9],
                translateX: [2, -1.1],
                rotate: [-90,100]
              },{
                element: '.triangle-small-2',
                translateY: [7.5,8],
                translateX: [-5.5, -2.7],
                rotate: -10
              },{
                element: '.triangle-medium',
                translateY: [7,4.7],
                translateX: [1,-2.8],
                rotate: [135,250]
              },{
                element: '.triangle-large-1',
                translateY: [8,10.9],
                translateX: .9,
                rotate: [180,135]
              },{
                element: '.triangle-large-2',
                translateY: [5,8.3],
                translateX: [-3,.4],
                rotate: [90,-45]
              },{
                element: '.parallelogram',
                translateY: [8,7.3],
                translateX: [-6, 3.9],
                rotate: 5,
                skew: [-45,-45]
              },{
                element: '#turtle',
                opacity: [.5,1]
              }      
            ]
          },{
            wrapper: '#tangram',
            duration: 500,
            animations: [
              {
                element: '.square',
                translateY: [7,7],
                translateX: [1.1,1.1],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [12.9,12.9],
                translateX: [-1.1, -1.1],
                rotate: [100,100]
              },{
                element: '.triangle-small-2',
                translateY: [8,8],
                translateX: [-2.7, -2.7],
                rotate: [-10,-10]
              },{
                element: '.triangle-medium',
                translateY: [4.7,4.7],
                translateX: [-2.8,-2.8],
                rotate: [250,250]
              },{
                element: '.triangle-large-1',
                translateY: [10.9,10.9],
                translateX: [.9,.9],
                rotate: [135,135]
              },{
                element: '.triangle-large-2',
                translateY: [8.3,8.3],
                translateX: [.4,.4],
                rotate: [-45,-45]
              },{
                element: '.parallelogram',
                translateY: [7.3,7.3],
                translateX: [3.9, 3.9],
                rotate: [5, 5],
                skew: [-45,-45]
              }      
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: [7,10],
                translateX: [1.1,-4],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [12.9,10],
                translateX: [-1.1, -4],
                rotate: [100,-90]
              },{
                element: '.triangle-small-2',
                translateY: [8,8.4],
                translateX: [-2.7, -3.5],
                rotate: [-10,90]
              },{
                element: '.triangle-medium',
                translateY: [4.7,9.5],
                translateX: [-2.8,-2.3],
                rotate: [250,270]
              },{
                element: '.triangle-large-1',
                translateY: [10.9,15],
                translateX: [.9,1.4],
                rotate: [135,135]
              },{
                element: '.triangle-large-2',
                translateY: [8.3,11.7],
                translateX: [.4,2.15],
                rotate: [-45,90]
              },{
                element: '.parallelogram',
                translateY: [7.3,8.75],
                translateX: [3.9, -.95],
                rotate: [5, 45],
                scaleX: -1,
                skew: [-45,-45]
              },{
                element: '#turtle',
                opacity: [1,.5]
              },{
                element: '#fox',
                opacity: [.5,1]
              }      
            ]
          },{
            wrapper: '#tangram',
            duration: 500,
            animations: [
              {
                element: '.square',
                translateY: [10,10],
                translateX: [-4,-4],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [10,10],
                translateX: [-4, -4],
                rotate: [-90,-90]
              },{
                element: '.triangle-small-2',
                translateY: [8.4,8.4],
                translateX: [-3.5, -3.5],
                rotate: [90,90]
              },{
                element: '.triangle-medium',
                translateY: [9.5,9.5],
                translateX: [-2.3,-2.3],
                rotate: [270,270]
              },{
                element: '.triangle-large-1',
                translateY: [15,15],
                translateX: [1.4,1.4],
                rotate: [135,135]
              },{
                element: '.triangle-large-2',
                translateY: [11.7,11.7],
                translateX: [2.15,2.15],
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: [8.75,8.75],
                translateX: [-.95, -.95],
                rotate: [45, 45],
                scaleX: [-1, -1],
                skew: [-45,-45]
              }     
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: [10,11.1],
                translateX: [-4,-1.5],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [10,16.9],
                translateX: [-4, -.77],
                rotate: [-90,135]
              },{
                element: '.triangle-small-2',
                translateY: [8.4,11.6],
                translateX: [-3.5, -1],
                rotate: [90,90]
              },{
                element: '.triangle-medium',
                translateY: [9.5,12.4],
                translateX: [-2.3,1.1],
                rotate: [270,0]
              },{
                element: '.triangle-large-1',
                translateY: [15,14.25],
                translateX: [1.4,-.45],
                rotate: [135,-90]
              },{
                element: '.triangle-large-2',
                translateY: [11.7,13.2],
                translateX: [2.15,2.71],
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: [8.75,8.75],
                translateX: [-.95, -.95],
                rotate: [45, 45],
                scaleX: [-1, -1],
                skew: [-45,-45]
              },{
                element: '#fox',
                opacity: [1,.5]
              },{
                element: '#cardinal',
                opacity: [.5,1]
              }       
            ]
          },{
            wrapper: '#tangram',
            duration: 500,
            animations: [
              {
                element: '.square',
                translateY: [11.1,11.1],
                translateX: [-1.5,-1.5],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [16.9,16.9],
                translateX: [-.77, -.77],
                rotate: [135,135]
              },{
                element: '.triangle-small-2',
                translateY: [11.6,11.6],
                translateX: [-1, -1],
                rotate: [90,90]
              },{
                element: '.triangle-medium',
                translateY: [12.4,12.4],
                translateX: [1.1,1.1],
                rotate: [0,0]
              },{
                element: '.triangle-large-1',
                translateY: [14.25,14.25],
                translateX: [-.45,-.45],
                rotate: [-90,-90]
              },{
                element: '.triangle-large-2',
                translateY: [13.2,13.2],
                translateX: [2.71,2.71],
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: [8.75,8.75],
                translateX: [-.95, -.95],
                rotate: [45, 45],
                scaleX: [-1, -1],
                skew: [-45,-45]
              }      
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: [11.1,12.5],
                translateX: [-1.5,-1.5],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [16.9,9],
                translateX: [-.77, 2],
                rotate: [135,-90]
              },{
                element: '.triangle-small-2',
                translateY: [11.6,10.5],
                translateX: [-1, -5.5],
                rotate: [90,0]
              },{
                element: '.triangle-medium',
                translateY: [12.4,10],
                translateX: [1.1,1],
                rotate: [0,135]
              },{
                element: '.triangle-large-1',
                translateY: [14.25,11],
                translateX: [-.45,0],
                rotate: [-90,180]
              },{
                element: '.triangle-large-2',
                translateY: [13.2,8],
                translateX: [2.71,-3],
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: [8.75,11],
                translateX: [-.95, -6],
                rotate: [45, 0],
                scaleX: [-1, 1],
                skew: [-45,-45]
              },{
                element: '#cardinal',
                opacity: [1,.5]
              }     
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: [12.5,7],
                translateX: [-1.5,0],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [9,7],
                translateX: [2, 0],
                rotate: [-90,-90]
              },{
                element: '.triangle-small-2',
                translateY: [10.5,7],
                translateX: [-5.5, 0],
                rotate: [0,0]
              },{
                element: '.triangle-medium',
                translateY: [10,7],
                translateX: [1,0],
                rotate: [135,135]
              },{
                element: '.triangle-large-1',
                translateY: [11,7],
                translateX: [0,0],
                rotate: [180,180]
              },{
                element: '.triangle-large-2',
                translateY: [8,7],
                translateX: [-3,0],
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: [11,7],
                translateX: [-6,0],
                rotate: [0, 0],
                scaleX: [1, 1],
                skew: [-45,-45]
              },{
                element: '#section-nav',
                translateX: [-2, -2]
              }     
            ]
          },{
            wrapper: '#tangram',
            duration: 1000,
            animations: [
              {
                element: '.square',
                translateY: [7,0],
                translateX: [0,0],
                rotate: [45,45]
              },{
                element: '.triangle-small-1',
                translateY: [7,0],
                translateX: [0,0],
                rotate: [-90,-90]
              },{
                element: '.triangle-small-2',
                translateY: [7,0],
                translateX: [0,0],
                rotate: [0,0]
              },{
                element: '.triangle-medium',
                translateY: [7,0],
                translateX: [0,0],
                rotate: [135,135]
              },{
                element: '.triangle-large-1',
                translateY: [7,0],
                translateX: [0,0],
                rotate: [180,180]
              },{
                element: '.triangle-large-2',
                translateY: [7,0],
                translateX: [0,0],
                rotate: [90,90]
              },{
                element: '.parallelogram',
                translateY: [7,0],
                translateX: [0,0],
                rotate: [0, 0],
                scaleX: [1, 1],
                skew: [-45,-45]
              },{
                element: '#section-nav',
                translateX: [-2,0]
              }     
            ]
          },{
            wrapper: '#ending',
            duration: 1000,
            animations: [
              {
                element: '.final-line',
                opacity:[0,1]
              }
            ]
          },{
            wrapper: '#ending',
            duration: 1000,
            animations: [
              {
                element: '.final-line',
                opacity:[1,1]
              }
            ]
          }
        ];

    /**
     * Initialization function
     */
    init = function(){

      //Set up page updating rather than tying updates to scroll events
      scrollIntervalID = setInterval(updatePage,10);

      buildPage();

      //Throw an error if a touch device is detected
      if(isTouchDevice()){
        $body.addClass('error');
      }
    }

    /**
     * Retrieve the default values that will be used for animations
     * @param  {text} property: property name
     * @return {number} default value of property
     */
      getDefaultPropertyValue = function(property){
        switch(property){
          case 'translateX':
            return 0;
          case 'translateY':
            return 0;
          case 'opacity':
            return 1;
          case 'rotate':
            return 0;
          case 'scaleX':
            return 1;
          case 'skew':
            return 0;
          default:
            return null;
        }
      }

    //requestAnimationFrame polyfill. Using requestAnimationFrame to ensure browser is free to do new paint work when animating elements
    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = (function() {

        return window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.oRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               function(callback){
                window.setTimeout(callback, 1000 / 60);
               };
        })();
    }

    /**
     * Functions that execute on every automatic page update
     */
    updatePage = function(){
      window.requestAnimationFrame(function(){
          setScrollTops();

        //Ensure user has started scrolling, but hasn't reached the end of the page  
        if (scrollTop >= 0 && scrollTop <= (bodyHeight - windowHeight)){
          animateElements();
          setKeyframe();
        }
      });
    }

buildPage = function(){
  var value, valueSet;

  windowHeight = $(window).height();
  for (var i = 0; i < keyframes.length; i++) {     //cycling through keyframes
    bodyHeight += keyframes[i].duration;
    if($.inArray(keyframes[i].wrapper, wrappers) === -1){
      wrappers.push(keyframes[i].wrapper);
    }
    for (var j = 0; j < keyframes[i].animations.length; j++){ //cycling through animations within each keyframe
      for (key in keyframes[i].animations[j]){
        value = keyframes[i].animations[j][key]
        if(key !== 'element' && value instanceof Array === false){
          valueSet = [];
          valueSet.push(getDefaultPropertyValue(key),value);
          value = valueSet;
        }
          keyframes[i].animations[j][key] = value;
      }
    }
  }
  $body.height(bodyHeight);
  setTimeout(function(){
  $window.scrollTop(0); 
  },100);

  currentWrapper = wrappers[0];
  $(currentWrapper).show();
}

/**
 * Set values for scroll top related variables
 */
setScrollTops = function(){
  if($window.scrollTop()< 0){
    $window.scrollTop(0);
  }
  if(scrollDist === 0){
    scrollTop = $window.scrollTop();
  }else{
    if (scrollDist > 50){
      scrollTop += scrollDir*50;
      scrollDist -= Math.abs(scrollDir)*50;
      $window.scrollTop(scrollTop);
    }else{
      scrollDist = 0;
      scrollDir = 0;
    }
  }
  relativeScrollTop = scrollTop - prevKeyframesDurations;
}

animateElements = function(){
  var animation, translateY, translateX, scaleX, rotate, skew, opacity;
  for(var i = 0; i<keyframes[currentKeyframe].animations.length; i++){
    animation = keyframes[currentKeyframe].animations[i];
    translateY = calcValue(animation, 'translateY');
    translateX = calcValue(animation, 'translateX');     
    scaleX = calcValue(animation, 'scaleX');
    rotate  = calcValue(animation, 'rotate');
    skew = calcValue(animation, 'skew');
    opacity = calcValue(animation, 'opacity');

    $(animation.element).css({
      'transform': 'translate3d(' + translateX + 'em, ' + translateY + 'em, 0) scaleX(' + scaleX + ') rotate(' + rotate + 'deg) skew('+ skew +'deg)',
      'opacity' : opacity 
    })
  }
}

calcValue = function(animation, property) {
  var value = animation[property];
  if(value) {
    value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
  } else {
    value = getDefaultPropertyValue(property);
  }
  return value;
}

easeInOutQuad = function (t, b, c, d) {
  //sinusoadial in and out
  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};

setKeyframe = function() {
  if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
      prevKeyframesDurations += keyframes[currentKeyframe].duration;
      currentKeyframe++;
      showCurrentWrappers();
  } else if(scrollTop < prevKeyframesDurations) {
      currentKeyframe--;
      prevKeyframesDurations -= keyframes[currentKeyframe].duration;
      showCurrentWrappers();
  }
}

showCurrentWrappers = function() {
  var i;
  if(keyframes[currentKeyframe].wrapper != currentWrapper) {
    $(currentWrapper).hide();
    $(keyframes[currentKeyframe].wrapper).show();
    currentWrapper = keyframes[currentKeyframe].wrapper;
  }
}
clickHandler = function(stopPoint){
  if(scrollTop < stopPoint){
    scrollDir = 1;
  }
  if(scrollTop > stopPoint){
    scrollDir = - 1; 
  }
  scrollDist = Math.abs(scrollTop - stopPoint);
}

$('#turtle').on('click', function(){
  event.preventDefault()
  clickHandler(4000);
});
$('#fox').on('click', function(){
  event.preventDefault()
  clickHandler(5550);
});
$('#cardinal').on('click', function(){
  event.preventDefault()
  clickHandler(7100);
});
$("a").hover(function(){
  $(this).find('span').show();
}, function(){
  $(this).find('span').hide();
});
isTouchDevice = function() {
  return 'ontouchstart' in window // works on most browsers 
  || 'onmsgesturechange' in window; // works on ie10
}
 init();

})
})();
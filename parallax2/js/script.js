(function(){ 
$ (function(){
  var firstVar = 0,
      properties = ['translateX','translateY', 'opacity', 'rotate', 'scaleXX', 'skew'];
      $doc = $(document),
      $window = $(window),
      $body = $('body'),
      $html = $('html'),
      wrappers = [],
      currentWrapper = null,
      bodyHeight = 0,
      windowHeight = 0,
      windowWidth = 0,
      prevKeyframesDurations = 0,
      scrollTop = 0,
      relativeScrollTop = 0,
      currentKeyframe = 0,
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
            }     
          ]
        },{
          wrapper: '#tangram',
          duration: 200,
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
            }     
          ]
        },{
          wrapper: '#tangram',
          duration: 200,
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
          wrapper: '#ending',
          duration: 5000,
          animations: []
        }
      ];


init = function(){
  scrollIntervalID = setInterval(updatePage,10);
  setupValues();
  $window.resize(resizeHandler);
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

updatePage = function(){
  window.requestAnimationFrame(function(){
    setScrollTops();
    if (scrollTop >= 0 && scrollTop <= (bodyHeight - windowHeight)){
      animateElements();
      setKeyframe();
    }
  });
}

setupValues = function(){
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  buildPage();
}

buildPage = function(){
  var value, valueSet;
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

  // /**
  //  * Retrieve all HTML elements that will be animated
  //  *  @var {array} animatedElements: list to be populated containing all animated HTML elements
  //  *  @var {object} animation: object containing each individual animation
  //  *  @var {object} _keyframe: object containing each individual keyframe (or group of animations)
  //  * @return {array} list of animated HTML elements
  //  */
  // getUniqueAnimatedElements = function() {
  //   var animatedElements, animation, _keyframe;
  //   animatedElements = [];
  //   for (var i = 0; i < keyframes.length; i++) {     //cycling through keyframes
  //     _keyframe = keyframes[i];
  //     for (var j = 0; j < _keyframe.animations.length; j++) {  //cycling through animations within each keyframe
  //       animation = _keyframe.animations[j];
  //       if ($.inArray(animation.element, animatedElements) === -1) {
  //         animatedElements.push(animation.element);
  //       }
  //     }
  //   }
  //   return animatedElements;
  // };

/**
 * Set values for scroll top related variables
 */
setScrollTops = function(){
  if($window.scrollTop()< 0){
    $window.scrollTop(0);
  }
  scrollTop = $window.scrollTop();
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
      // value = +value.toFixed(2) 
      // TEMPORARILY REMOVED CAUSE scaleX DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
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
    resizeHandler = function(){
    }
 init();

})

}).call(this);
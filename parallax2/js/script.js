(function(){ 
$ (function(){
  var firstVar = 0,
      properties = ['translateX','translateY', 'opacity', 'rotate', 'scale'];
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
              translateY: -10,
              opacity: 0
            },{
              element: '.second-line',
              translateY:-500,
            }
          ]
        },{
          wrapper: '#second-section',
          duration: 1000,
          animations: [
            {
              element: '.third-line',
              translateY: -500,
              opacity: 1
            },{
              element: '.fourth-line',
              translateY: -500
            }      
          ]
        }
      ];


init = function(){
  console.log('got here');
  scrollIntervalID = setInterval(updatePage,10);
  setupValues();
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
      case 'scale':
        return 1;
      default:
        return null;
    }
  }

updatePage = function(){
  console.log(scrollTop);
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
  var animation, translateY, translateX, scale, rotate, opacity;
  for(var i = 0; i<keyframes[currentKeyframe].animations.length; i++){
    animation = keyframes[currentKeyframe].animations[i];
    translateY = calcValue(animation, 'translateY');
    translateX = calcValue(animation, 'translateX');     
    scale = calcValue(animation, 'scale');
    rotate  = calcValue(animation, 'rotate');
    opacity = calcValue(animation, 'opacity');

    $(animation.element).css({
      'transform': 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ') rotate(' + rotate + 'deg)',
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
      // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
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
 init();

})

}).call(this);
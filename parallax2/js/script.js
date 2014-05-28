(function(){ 
$ (function(){
  var firstVar = 0,
      properties = ['translateX','translateY', 'opacity', 'rotate', 'scale'];
      $doc = $(document),
      $window = $(window),
      $body = $('body'),
      $html = $('html'),
      bodyHeight = 0,
      windowHeight = 0,
      windowWidth = 0,
      prevKeyframesDurations = 0,
      scrollTop = 0,
      relativeScrollTop = 0,
      keyFrame = 0,
      keyFrames = [
        {
          wrapper: '#intro',
          duration: 1000,
          animations: [
            {
              element: '.first-line',
              translateY: -500,
              opacity: 0
            },{
              element: '.second-line',
              translateY:-500
            }
          ]
        },{
          wrapper: '#second-section',
          duration: 1000,
          animations: [
            {
              element: '.third-line',
              translateY: 500,
              opacity: 1
            },{
              element: '.fourth-line',
              translateY:500
            }      
          ]
        }
      ];


init = function(){
  scrollIntervalID = setInterval(updatePage,10);
  setupValues();
}

updatePage = function(){
  window.requestAnimationFrame(function(){
    setScrollTops();
    if (scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)){
      animateElements();
      setKeyFrame();
    }
  });
}

setupValues = function(){
  windowHeight = $(window).height();
  windowWidth = $(window).width();
}
/**
 * Set values for scroll top related variables
 */
setScrollTops = function(){
  scrollTop = $window.scrollTop();
  relativeScrollTop = scrollTop - preKeyframesDurations;
}

/**
 * Retrieve the default values that will be used for animations
 * @param  {text} property: property name
 * @return {number} default value of property
 */
  getDefaultPropertyValues = function(property){
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
  /**
   * Retrieve all HTML elements that will be animated
   *  @var {array} animatedElements: list to be populated containing all animated HTML elements
   *  @var {object} animation: object containing each individual animation
   *  @var {object} _keyFrame: object containing each individual keyframe (or group of animations)
   * @return {array} list of animated HTML elements
   */
  getUniqueAnimatedElements = function() {
    var animatedElements, animation, _keyFrame;
    animatedElements = [];
    for (var i = 0; i < keyFrames.length; i++) {     //cycling through keyframes
      _keyFrame = keyFrames[i];
      for (var j = 0; j < _keyFrame.animations.length; j++) {  //cycling through animations within each keyframe
        animation = _keyFrame.animations[j];
        if ($.inArray(animation.element, animatedElements) === -1) {
          animatedElements.push(animation.element);
        }
      }
    }
    return animatedElements;
  };


})

}).call(this);
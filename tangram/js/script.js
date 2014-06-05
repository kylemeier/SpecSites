(function(){ 
  $(function(){
    var $doc = $(document),
        $window = $(window),
        $body = $('body'),
        $html = $('html'),
        scrollTimeoutID = 0,
        scrollDir = 0,
        scrollDist = 0,    
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

      //set up page updating rather than tying updates to scroll events
      scrollIntervalID = setInterval(updatePage,10);

      buildPage();

      //throw an error if a touch device is detected
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

        //ensure user has started scrolling, but hasn't reached the end of the page  
        if (scrollTop >= 0 && scrollTop <= (bodyHeight - windowHeight)){
          animateElements();
          setKeyframe();
        }
      });
    }

    /**
     * [buildPage description]
     * @var {string} value: takes the value of either an element name or property name 
     * @var {array} valueSet: pairing of each property and its default value if an initial value isn't given
     */
    buildPage = function(){
      var value, valueSet;

      windowHeight = $(window).height();

      //cycling through keyframes
      for (var i = 0; i < keyframes.length; i++) {

        //increase bodyHeight variable according to length of each animation     
        bodyHeight += keyframes[i].duration;

        //cycling through animations within each keyframe
        for (var j = 0; j < keyframes[i].animations.length; j++){

          //cycling through each key (element and property names) within each animation object
          for (key in keyframes[i].animations[j]){

            //takes the value of current element/property name
            value = keyframes[i].animations[j][key]

            //build out valueSet if value is a property value that doesn't have an initial value
            if(key !== 'element' && value instanceof Array === false){
              valueSet = [];
              valueSet.push(getDefaultPropertyValue(key),value);
              value = valueSet;
            }
            keyframes[i].animations[j][key] = value;
          }
        }
      }

      //set body height to the length of all animations
      $body.height(bodyHeight);

      //reset screen to top of page upon loading/user refresh
      setTimeout(function(){
      $window.scrollTop(0); 
      },100);

      //show only the first HTML section, set to a variable for later adjustments
      currentWrapper = keyframes[0].wrapper;
      $(currentWrapper).show();
    }

    /**
     * Set values for scroll top related variables
     */
    setScrollTops = function(){

      //prevent user from scrolling past beginning or end of page
      if($window.scrollTop() < 0){
        $window.scrollTop(0);
      }
      if($window.scrollTop() > (bodyHeight - windowHeight)){
        $window.scrollTop(bodyHeight - windowHeight);
      }

      //tie scrollTop to window's scroll unless a button has been pressed
      if(scrollDist === 0){
        scrollTop = $window.scrollTop();
      }else{

        //if a button has been pressed, scrollDist (scroll distance) will have a value
        //adjust scrollDist/scrollTop until scrollDist would go into negative by adjusting again
        if (scrollDist > 50){

          //auto scroll by 50 pixels each iteration
          scrollTop += scrollDir*50;
          scrollDist -= Math.abs(scrollDir)*50;
          $window.scrollTop(scrollTop);

        }else{

          //set values to 0 after auto scrolling completes
          scrollDist = 0;
          scrollDir = 0;
        }
      }

      //check how far current scroll is from last keyframe
      relativeScrollTop = scrollTop - prevKeyframesDurations;
    }

    /**
     * Sets variables needed to animate to each button's animal shape
     * @param  {number} stopPoint: designates, in scroll distance, where the animal shape can be found
     */
    clickHandler = function(stopPoint){

      //if user hasn't scrolled to the shape yet, scroll direction will be forward
      if(scrollTop < stopPoint){
        scrollDir = 1;
      }

      //if user has scrolled past the shape, scroll direction will be backward
      if(scrollTop > stopPoint){
        scrollDir = - 1; 
      }

      //set scroll distance for setScrollTops to know how far to move page
      scrollDist = Math.abs(scrollTop - stopPoint);
    }

    //each listens for a click event and sends the appropriate scroll distance to clickHandler
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

    //show/hide animal names next to buttons
    $("a").hover(function(){
      $(this).find('span').show();
    }, function(){
      $(this).find('span').hide();
    });

    /**
     * Animates each element in current keyframe
     * @var {object} animation: object within animations array
     * @var {number} all others: how far that property will be moved
     */
    animateElements = function(){
      var animation, translateY, translateX, scaleX, rotate, skew, opacity;

      //cycle through each animation object within the current keyframe
      for(var i = 0; i<keyframes[currentKeyframe].animations.length; i++){

        //set variables
        animation = keyframes[currentKeyframe].animations[i];
        translateY = calcValue(animation, 'translateY');
        translateX = calcValue(animation, 'translateX');     
        scaleX = calcValue(animation, 'scaleX');
        rotate  = calcValue(animation, 'rotate');
        skew = calcValue(animation, 'skew');
        opacity = calcValue(animation, 'opacity');

        //inject CSS to adjust properties
        $(animation.element).css({
          'transform': 'translate3d(' + translateX + 'em, ' + translateY + 'em, 0) scaleX(' + scaleX + ') rotate(' + rotate + 'deg) skew('+ skew +'deg)',
          'opacity' : opacity 
        })
      }
    }

    /**
     * Determines how far the specified property will be adjusted
     * @param  {object} animation: object within animations array 
     * @param  {string} property: name of property to be adjusted
     * @var    {array} value: initial/default value of property and new value of property
     * @return {number} value: how far property will be adjusted
     */
    calcValue = function(animation, property) {
      var value = animation[property];

      //if a value is given, apply an easing function to determine actual adjustment distance
      if(value) {
        value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
      } else {

        //if no value given, use default value
        value = getDefaultPropertyValue(property);
      }
      return value;
    }

    /**
     * Easing function (sinusoadial in and out) for better looking animations
     * @param  {number} t: difference between current scroll distance and the last keyframe
     * @param  {number} b: default/initial value of property
     * @param  {number} c: difference between default/intial value and new value
     * @param  {number} d: length of current animation
     * @return {number} amount property value will change
     */
    easeInOutQuad = function (t, b, c, d) {
      return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
    };


    /**
     * Adjusts current keyframe if necessary
     */
    setKeyframe = function() {

      //if user has scrolled to next keyframe
      if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {

          //add current keyframe distance to previous keyframe distances
          prevKeyframesDurations += keyframes[currentKeyframe].duration;

          //iterate to next keyframe 
          currentKeyframe++;

          //show only new HTML section
          showCurrentWrappers();

      //if user has scrolled to previous keyframe
      } else if(scrollTop < prevKeyframesDurations) {

          //move back a keyframe
          currentKeyframe--;

          //remove now current keyframe distance fomr previous keyframe distances
          prevKeyframesDurations -= keyframes[currentKeyframe].duration;

          //show only the new HTML section
          showCurrentWrappers();
      }
    }

    /**
     * Determines which wrapper (HTML section) to show
     */
    showCurrentWrappers = function() {

      //only act if current keyframe doesn't match currently shown wrapper
      if(keyframes[currentKeyframe].wrapper != currentWrapper) {

        //hide currently shown wrapper
        $(currentWrapper).hide();

        //show wrapper associated with current keyframe
        $(keyframes[currentKeyframe].wrapper).show();

        //update variable
        currentWrapper = keyframes[currentKeyframe].wrapper;
      }
    }

    /**
     * Determines if user's device uses a touch screen
     * @return {Boolean} true if touch element present, false if not
     */
    isTouchDevice = function() {
      return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
    }

    //begin initilization
    init();

  })
})();
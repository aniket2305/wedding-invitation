'use strict';
	
// MAIN SLIDER-FLEXSLIDER
//==================================================================================
$(window).load(function() {
    $('#main-slider.flexslider').flexslider(
    {
        animation : "fade",
        controlNav: false,
        directionNav: false,
        slideshowSpeed: 5000,  
        animationSpeed:1000,
        pauseOnAction: false,
        animationLoop: true, 
        pauseOnHover: false,			
    });
});
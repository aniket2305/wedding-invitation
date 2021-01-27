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

      
  const deadline = new Date(Date.parse('May 1 2021 23:59:59 GMT+05:30'));
  initializeClock('countdown', deadline);
});


function getTimeRemaining(endtime) {
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  $(document).ready(function() {
    
    if( !device.tablet() && !device.mobile()) {
      $('.animation').css({
        visibility: 'hidden'
      });	
    }

    		// 04.5 Waypoint Animate CSS
		//------------------------------------------------------------------------------
		if( !device.tablet() && !device.mobile()) {	
			$('.animation').each(function(){
        		var _this = this;
        		var animation_waypoint = new Waypoint({
            		element: _this,
            		handler: function (direction) {
						$(this.element).css({ visibility: 'visible' });
						$(this.element).addClass('animated');
            			},
            			offset: '90%'
        			});
        	});
    }
    
    $(".family-carousel").owlCarousel({
      items : 1,
      singleItem : true,
      autoHeight: true,
      pagination : false,
      autoPlay : true
    });

    $("#contactform").validate({
      rules: {
        inputName: "required",
        inputEmail: {
          email: true,
          required: true
        },
        selectGuests: {
          required: true
        },
        selectAttending: {
          required: true
        }

      },
      
      messages: {
        inputName: "",
        inputEmail: "",
        selectGuests: "",
        selectAttending: ""
      },
         submitHandler: function(form) {
          
              var name = $("#inputName").val();
              var email = $("#inputEmail").val();
              var selectGuests =$("#selectGuests").val();
              var selectAttending = $("#selectAttending").val();
              
            var dataString = 'name=' + name + '&email=' + email + '&guests=' + selectGuests + '&attanding=' + selectAttending ;
                $.ajax({
                  type : "POST",
                  url : "thanks-contact.php",
                  data : dataString,
                  cache : false,
                  success : function() {
            
                      $("#successMsg").fadeIn(400);
                      var int_id = setInterval(function(){hideSuccess()},5000);

                      function hideSuccess(){
                        $("#successMsg").fadeOut(400);	
                        clearInterval(int_id);
                      }
                  }
                });
              return false;
          }
          
    });
    


  })
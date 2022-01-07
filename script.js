/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());
document.addEventListener(
  "DOMContentLoaded",
  () => {
    function animateSgv(id, delay, delayIncrement) {
      const logo = document.getElementById(id);
      const logoPaths = document.querySelectorAll(`#${id} path`);
      delay = delay;
      for (let i = 0; i < logoPaths.length; i++) {
        logoPaths[i].style.strokeDasharray = logoPaths[i].getTotalLength();
        logoPaths[i].style.strokeDashoffset = logoPaths[i].getTotalLength();
        logoPaths[i].style.animation = `line-anim 2s ease forwards ${delay}s`;
        delay += delayIncrement;
        console.log(delay);
      }
      logo.style.animation = `fill 0.5s ease forwards ${delay}s`;
    }
    // Set the id of SVG, delay time in seconds to start animation and delay between each animation
    animateSgv("logo", 0, 0.2);
  },
  false
);

/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});
  
});
$( document ).ready(function() {
  // Main variables
    var $developmentWrapper = $('.development-wrapper');
    var developmentIsVisible = false;

  $(window).scroll( function(){
    var bottom_of_window = $(window).scrollTop() + $(window).height();

  /*###### SKILLS SECTION ######*/
    var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

    if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible == false)){

      $('.skills-bar-container li').each( function(){

        var $barContainer = $(this).find('.bar-container');
        var dataPercent = parseInt($barContainer.data('percent'));
        var elem = $(this).find('.progressbar');
        var percent = $(this).find('.percent');
        var width = 0;

        var id = setInterval(frame, 15);

        function frame() {
          if (width >= dataPercent) {
              clearInterval(id);
          } else {
            width++;
            elem.css("width", width+"%");
            percent.html(width+" %");
          }
        }
      });
      developmentIsVisible = true;
    }
  }); // -- End window scroll --
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);
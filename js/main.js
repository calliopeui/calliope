(function ($) {
  'use strict';
  /*====================================
    Main slider JS
  ======================================*/


  var main_slider = $('.main-slider');
  main_slider.owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout:10000,
      autoplayHoverPause: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  });
  $(window).scroll(function(){
    var sticky = $('.menubar'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('sticky-header');
    else sticky.removeClass('sticky-header');
  });
})(jQuery);



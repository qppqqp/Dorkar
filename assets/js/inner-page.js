(function ($) {
    'use strict';
    //==========preloder===========
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });
    //==========fixed header & scroll to top button===========
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300) {
            $('.bottom-header').addClass('animated fadeInDown fixed-header');
            // scroll to top show
            $('.scroll').fadeIn();
            $('.scroll').addClass('active');
            if ($(window).width() < 992) {
                $('.bottom-header').removeClass('animated fadeInDown fixed-header');
            }
        } else {
            $('.bottom-header').removeClass('animated fadeInDown fixed-header');
            // scroll to top show
            $('.scroll').fadeOut();
            $('.scroll').removeClass('active');
        }
    });
    $(document).ready(function(){
        // scroll to top function
        $(".scroll").on('click', function(){
            $('html, body').animate({scrollTop : 0},100);
        })
    });
}(jQuery));
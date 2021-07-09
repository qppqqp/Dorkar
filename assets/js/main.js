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
        //==========modal video popup slider===========
        $(".vdo-btn").modalVideo();
        //==========counter up===========
        $('.count').counterUp({
            delay: 50,
            time: 1000
        });
        //==========portfolio slider===========
        $('.items').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            // autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            nav: true,
            navText: ['<i class="fas fa-caret-left">','<i class="fas fa-caret-right">'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });
        //==========testimonial slider===========
        $('.comments').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });
    });
}(jQuery));
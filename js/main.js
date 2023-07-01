$(document).ready(function () {

    //OWL CAROUSEL
    if ($('.bitcoin-slider').length > 0) {
        $(".bitcoin-slider").owlCarousel({
            loop: true,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    //CAROUSEL TESTIMONIALS:
    if ($('.testimonials-slider').length > 0) {
        $(".testimonials-slider").owlCarousel({
            loop: true,
            dots: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }

            }
        });
    }


    if ($('.client-slider').length > 0) {
        $(".client-slider").owlCarousel({
            loop: true,
            dots: false,
            margin: 30,
            // center:true,
            autoplay: true,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 6
                }

            }
        });
    }

     //COUNTER

     if ($('.counter').length > 0) {
        $('.counter').counterUp({
            time: 1000
        });
    }
    
    

    //FANCYBOX GALLERY
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    //EASY SCROLL
    $('.navbar-nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();
      
        $('html, body').animate(
          {
            scrollTop: $($(this).attr('href')).offset().top
          },
          1000,
          'linear'
        );
      });

      //ANIMACIJE:

      function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop(); //koliko je korisnik skrolovao od vrha ekrana

        
        $('.animation').each(function () {
            let position = $(this).offset().top;
            
            let animationName = $(this).attr('data-animation');
            
            let delay = $(this).attr('data-delay');
            
            if (position < windowHeight + scroll - 100) { 
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });

    }

    
    $(window).scroll(function () {
        animation();
    });

    animation();


});






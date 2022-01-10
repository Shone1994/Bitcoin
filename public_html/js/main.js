

$(document).ready(function(){
    if($('.lead-slider').length > 0){
      $('.lead-slider').bxSlider({
          speed: 3000,
          auto: true,
          pause: 3000
      });  
    }
      
      if($('.lead-slider2').length > 0){
         $('.lead-slider2').bxSlider({
          speed: 3000,
          auto: true,
          pause: 3000
      }); 
      }
      if($('.lead-slider3').length > 0){
         $('.lead-slider3').bxSlider({
          speed: 3000,
          auto: true,
          pause: 3000
      }); 
      }
      
      if($('.client').length > 0){
          $(".client").owlCarousel({
              items: 6,
              margin: 20,
              loop: true,
              autoplay: true,
              slydeBy: 3,
              autoplayHoverPause: true,
              responsive: {
                  
                  0:{
                     items:3  
                  },
                  400:{
                      items: 3
                  },
                  700:{
                      items: 4
                  },
                  900:{
                      items: 6
                  }
              }
          });
      }
      
      //ANIMATION
      function animation(){
         let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop(); 
        $('.animation').each(function(){
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');
             if(position < windowHeight + scroll - 100){
                 $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
             }
         });
        }
     $(window).scroll(function(){
        animation();
    });
     animation(); 
      
      
      //COUNTER UP
      if($('.counter').length > 0){
          $('.counter').counterUp({
             time: 1500 
          });
      }
      
  });
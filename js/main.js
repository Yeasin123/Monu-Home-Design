$('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:6000, 
            nav:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
});

 jQuery(function($) {
      $(document).ready( function() {
        //enabling stickUp on the '.navbar-wrapper' class
        $('.navbar-wrapper').stickUp();
     });
 });

//WOW.js code




//Initialize material-scrolltop (minimal)

  $('body').materialScrollTop();



 $(document).ready(function(){
      $('.inner-slick-active').slick({
        infinite: true,
          slidesToShow: 1,
          autoplay:true,
          arrows:false,
          duration:3000,
          slidesToScroll:1
      });
    });

 $('#counter-block').ready(function(){
        $('.fb').animationCounter({
          start: 0,
          step: 2,
          delay:100
        });
        $('.bike').animationCounter({
          start: 245677,
          step: 100,
          delay:2000,
          txt: ''
        });
        $('.code').animationCounter({
          start: 0,
          end: 570,
          step: 4,
          delay: 1000
        });
        $('.coffee').animationCounter({
          start: 490,
          end: 1560,
          step: 20,
          delay: 900,
          txt: ''
        });
    });
   
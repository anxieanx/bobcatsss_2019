$(function () {

  $('.owl-carousel--basic').owlCarousel({
    loop: true,
    center: true,
    nav: true,
    navText: '',
    dot: false,
    dotsEach: false,
    dotsContainer: false,
    autoplay: true,

    responsive : {

      0 : {
        items : 1,
      },

      640 : {
        items : 1,
      },

      1024 : {
        items : 1,
      }
    }
  });

});

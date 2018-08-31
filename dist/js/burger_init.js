$(function () {

  $('.burger--wrap').on('click', function(){
    $('.burger').toggleClass('burger--active');
    $(".js-nav--user").animate({width: 'toggle'});
  });


  var $head = $('.dropdown__head');
  var $body = $('.dropdown__body');

  $head.on('click', toggleBody);

  function toggleBody() {

    if (!$(this).closest('.dropdown__item').hasClass('active')) {
      $('.dropdown__item').removeClass('active');
      var $current = $(this).next()
      $current.closest('.dropdown__item').addClass('active');
      $body.not($current).slideUp();
      $current.slideToggle();
    }
  }

});

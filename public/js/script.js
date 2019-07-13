window.onload = (function () {
  /************** hamburger mobile menu ****************/
    //hamburger toggle click
  var $body = $('body'),
    $hamburger = $("#js-hamburger");
  
  $hamburger.on("click", function () {
    $(this).addClass("is-active")
  });
  
  function closeHamburger () {
    return $hamburger.removeClass("is-active");
  }
  
  $(".site-overlay").on("click", function () {
    closeHamburger();
  });
  
  $(".header__menu").clone().appendTo("#mobile-menu"); //клонируем меню с шапки в мобильное меню
  $("#mobile-menu").find("*").attr("style", ""); //очищаем от встроеных стилей
  
  //open close mobile menu if you click a link
  $(".header__item, .header__button").on('click touchstart', function() {
    if ($('.pushy').hasClass('pushy-left')) {
      $body.removeClass('pushy-open-left');
    }
    
    closeHamburger();
  });
  
  /************** header slider ****************/
  
  $('.slider__init').slick({
    dots: true,
    arrows: false,
    
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  
    autoplay: true,
    autoplaySpeed: 3500
  });
  
  /*********************** to top button ***********************/
  
  if( window.innerWidth > 992 ) { //show arrow only desc screen
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
          $('#js-up').fadeIn();
        } else {
          $('#js-up').fadeOut();
        }
    });
  }
  
  $('#js-up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });
  
  /*********************** hide preloader ***********************/
  $("#js-preloader").fadeOut(500);
})();

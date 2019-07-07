window.onload = (function () {
  /*********************** my code ***********************/
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
})();

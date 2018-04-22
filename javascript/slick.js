$(document).ready(function(){

 $('.product-image__main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  centerMode: true,
  adaptiveHeight: true,
  asNavFor: '.product-image__thumbs'
});
  $('.product-image__thumbs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-image__main',
    dots: false,
    arrows: true,
    centerMode: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    vertical:true
  });
    
});




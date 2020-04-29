$(".header-slider").slick({
  dots: true,
  nextArrow: false,
  prevArrow: false,
  autoplay: true,
  autoplaySpeed: 7000,
  speed: 1000,
  pauseOnHover: false,
  verticalSwiping: true,
  vertical: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {},
    },
    {
      breakpoint: 640,
      settings: {},
    },
  ],
});


$('.reviews-slider').slick({
  dots: true,
  nextArrow: false,
  prevArrow: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: false
});


var containerEl = document.querySelector('.container-filter');
var mixer = mixitup(containerEl, {
  load: {
     
      filter: 'all'
  }
});


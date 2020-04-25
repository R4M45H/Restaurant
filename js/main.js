$(".header-slider").slick({
  dots: true,
  nextArrow: false,
  prevArrow: false,
  autoplay: true,
  autoplaySpeed: 5000,
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

var containerEl = document.querySelector('.container-filter');
var mixer = mixitup(containerEl, {
  load: {
     
      filter: 'all'
  }
});


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

//Counter - счетчик
$('.counter__item-number').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 4000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
    }
  });  
});

$(document).ready(function(){
	$("#menu, #reserv-btn").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 2000);
	});
});
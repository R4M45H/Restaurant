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
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
    {
      breakpoint: 421,
      settings: {
        dots: false,
        touchMove: false,
        verticalSwiping: false,
      },
    },
  ],
});

$(".reviews-slider").slick({
  dots: true,
  nextArrow: false,
  prevArrow: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: false,
});

var containerEl = document.querySelector(".container-filter");
var mixer = mixitup(containerEl, {
  load: {
    filter: "all",
  },
});

//Counter - счетчик

// Плавный скролл по навигации
$(document).ready(function () {
  $("#menu, #reserv-btn").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

//Возврат в начало сайта
$(window).scroll(function () {
  if ($(this).scrollTop() > 700) {
    $(".scrollup").fadeIn();
  } else {
    $(".scrollup").fadeOut();
  }
});

$(".scrollup").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500);
  return false;
});

//Menu-btn

$(".menu-btn").click(function () {
  $("#menu").animate({
    height: "toggle",
  });
  $("#menu").css({
    display: "flex",
  });
});

$(".nav-menu li a, .nav-menu__reservation-btn").click(function () {
  $("#menu").animate({
    height: "toggle",
  });
  $(".menu-btn").removeClass("active");
});

//закрытие меню при нажатии на область вне меню
if ($(document).width() < 600)
  $(document).mouseup(function (e) {
    if (!$(e.target).closest(".header__wrapper").length) {
      $(".nav").slideUp();
      $(".menu-btn").removeClass("active");
    }
    e.stopPropagation();
  });

$(".menu-btn").on("click", function () {
  if ($(this).hasClass("active")) {
    $(".menu-btn").removeClass("active");
  } else {
    $(".menu-btn").addClass("active");
  }
});

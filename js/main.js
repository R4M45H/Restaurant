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
$(function () {
  var oTop = $(".counter").offset().top - window.innerHeight;
  $(window).scroll(function () {
    $(window).scroll(function () {
      scrollTracking();
    });

    $(document).ready(function () {
      scrollTracking();
    });
    $(".counter__item-number").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    //var pTop = $('body').scrollTop();
    var pTop = $("html, body").scrollTop();
    console.log(pTop + " - " + oTop);
    if (pTop > oTop) {
      start_count();
    }
  });
});

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

$(".scrollup, .logo").click(function () {
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

if ($(document).width() < 450)
  $(".nav-menu li a, .nav-menu__reservation-btn").click(function () {
    $("#menu").animate({
      height: "toggle",
    });
    $(".menu-btn").removeClass("active");
  });

//закрытие меню при нажатии на область вне меню
if ($(document).width() < 450)
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

//blogButton__readMore

/* $('.blog__item-link').click(function(){
  $('.blog__item-text').slideToggle(500, function(){
    if ($(this).is(':hidden')) {
      $('.blog__item-link').html('READ MORE');
    } else {
      $('.blog__item-link').html('HIDE TEXT');
    }							
  });
  return false;
}); */

$(document).on("click", ".blog__info-link", function () {
  $(this)
    .closest(".blog__info")
    .find(".blog__item-text")
    .slideToggle("slow", function () {
      $(this).toggleClass("open");
    });
});


//Preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(800).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(800).css({'overflow':'visible'});
})
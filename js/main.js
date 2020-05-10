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
      }
    },
    {
      breakpoint: 421,
      settings: {
        dots: false,
        touchMove: false,
        verticalSwiping: false,
      }
    },
  ]
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
/* var target = $('.counter__item-number');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    //сработает когда пользователь доскроллит к элементу с классом .elem
  }
}); */
$(document).ready(function () {
  var windowHeight = $(window).height();

  $(document).on("scroll", function () {
    $(".counter__item-number").each(function () {
      var self = $(this),
        height = self.offset().top + self.height();
      if ($(document).scrollTop() + windowHeight >= height) {
        $(".counter__item-number").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");

          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 4000,
              easing: "linear",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
      }
    });
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

//Load More для фильтра
/* 
 $(function () {
    $(".hide-row3", ".hide-row4").slice(0, 4).show();
    $("#viewAll").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
       $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500); 
    });
});
 */
/* $('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});
 */

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

$(".menu-btn").on("click", function() {
  $(".nav, .menu-btn").toggleClass("active");
});
$(".nav-menu li a").click(function() {
  $(".nav, .menu-btn").removeClass('active'); 
});
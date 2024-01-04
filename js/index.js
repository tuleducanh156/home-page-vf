var swiper = new Swiper('.carSwiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    325: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

var bannerSwiper = new Swiper('.bannerSwiper', {
  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
  },
})

$(document).ready(function () {
  function onAnimationText() {
    if ($('.homeSwiper').find('.swiper-slide-active').hasClass('cars')) {
      $('#gasoline-car-tab').click(function () {
        $('#gasoline-car .car-item')
          .delay(170)
          .each(function (i) {
            $(this)
              .delay(275 * i)
              .queue(function () {
                $(this).addClass('show');
              });
          });
      });
    } else if (
      $('.homeSwiper').find('.swiper-slide-active').hasClass('battery-deposit')
    ) {
      $('#batteryDeposit .battery-deposit-item')
        .delay(500)
        .each(function (i) {
          $(this)
            .delay(100 * i)
            .queue(function () {
              $(this).addClass('show-text');
            });
        });
    }
  }

  if ($('#highend-bike .swiper-wrapper .swiper-slide').length <= 4) {
    $('#highend-bike .bike-item').addClass('resize-card');
  }
  if ($('#midend-bike .swiper-wrapper .swiper-slide').length <= 4) {
    $('#midend-bike .bike-item').addClass('resize-card');
  }
  var homeSwiper = new Swiper('.homeSwiper', {
    direction: 'vertical',
    parallax: true,
    slidesPerView: 1,
    mousewheel: true,
    noSwiping: false,
    speed: 1000,
    simulateTouch: false,
    mousewheelControl: true,
    edgeSwipeDetection: true,
    noSwiping: true,
    noSwipingClass: 'do_not_swipe',
    onSlideChangeEnd: function () {
      if (mySwiper.activeIndex > 0) {
        $('.homeSwiper').addClass('do_not_swipe');
      }
    },
    on: {
      init: onAnimationText,
      slideChangeTransitionStart: onAnimationText,
    },
  });

  homeSwiper.on('slideChange', function () {
    $('.parallax-bg').attr('data-swiper-parallax', '0');

    setTimeout(function () {
      $('.swiper-slide-active .parallax-bg').attr(
        'data-swiper-parallax',
        $('html').height(),
      );
      $('.swiper-slide-next .parallax-bg').css(
        'transform',
        'translate3d(0px, 0px, 0px)',
      );
    }, 100);
  });

  if ($(window).width() <= 767) {
    var electricSwiper = new Swiper('.electric-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
      },
    });
    var gasolineSwiper = new Swiper('.gasoline-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
      },
    });
    $('.swiper-button-next, .swiper-button-prev').addClass('d-none');
  }

  var footer = $('.footer-contaienr').height();
  
  homeSwiper.on('slideChange', function(){
    console.log(this);
    if ($('.footer-section').hasClass('swiper-slide-visible')) {
      $('.footer-fixed').hide();
      $('.customer-services .mobile-img').addClass('add-footer');
      $('.customer-services .parallax-bg').css(
        'transform',
        'translate3d(0px, '+ footer +'px, 0px)'
      );
    } else {
      $('.footer-fixed').show();
      $('.customer-services .mobile-img').removeClass('add-footer');
    }
  })
});

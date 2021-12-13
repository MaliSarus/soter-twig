(function ($) { // <----- Начало обертки
  function isSet(element) {
    return element.length !== 0;
  }

  function dropdownMobileMenuOn() {
    if ($(window).width() < 992) {
      $('#navbarNav > li.menu-item-has-children').on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var submenu = $(this).find('.sub-menu');
        var current = ($('.sub-menu').index(submenu));
        var active = $('.sub-menu').index($('.sub-menu.active'));
        if (isSet($('.sub-menu.active')) && active != current) {
          $($('.sub-menu')[active]).fadeOut(250, function () {
            $(this).removeClass('active').siblings('a').removeClass('opened');
            submenu.fadeIn(250).addClass('active').siblings('a').addClass('opened');
          });
        } else {
          submenu.fadeToggle().toggleClass('active').siblings('a').toggleClass('opened');
        }
      });
      $('.sub-menu a').on('click', function () {
        const url = $(this).attr('href');
        $(location).attr('href', url);
      })
    }
  }

  function hamburgerInit() {
    var hamburger = $('.hamburger');
    hamburger.css({
      outline: 'none'
    });
    hamburger.on('click', function () {
      $(this).toggleClass('is-active');
      $('body').toggleClass('hidden');
      if ($(this).hasClass('is-active') === false) {
        $('.sub-menu').removeClass('active').removeAttr('style');
      }
    });
  };

  function sliderButtonsHandler() {
    var btns = $('.nav-dot');
    var paginationWrapper = $('.pagination-wrapper');
    var bigDotContainer = $('.big-dot-container');
    var littleDot = $('.little-dot');

    btns.on('click', btnClick);

    function btnClick() {
      if ($(this).hasClass('little-dot--first')) {
        paginationWrapper.addClass('transition-prev');
      } else if ($(this).hasClass('little-dot--last')) {
        paginationWrapper.addClass('transition-next');
      }

      var timeout = setTimeout(cleanClasses, 500);
    }

    function cleanClasses() {
      if (paginationWrapper.hasClass('transition-next')) {
        paginationWrapper.removeClass('transition-next')
      } else if (paginationWrapper.hasClass('transition-prev')) {
        paginationWrapper.removeClass('transition-prev')
      }
    }
  };

  function sponsorsSliderInit() {
    var mySwiper = new Swiper('.sponsors__slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 0,
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true

      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideNextTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-next');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-next')
          }, 500);
        },
        slidePrevTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-prev');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-prev')
          }, 500);
        },
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          // spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          // spaceBetween: 40,

        },
        992: {
          slidesPerView: 3,
          // spaceBetween: 50,
        },
        1200: {
          centeredSlides: true,
          slidesPerView: 3,
          // loopedSlides: 1,
          // spaceBetween: 115,
        }
      }
    });
    var mySwiperControl = document.querySelector('.sponsors__slider.swiper-container').swiper;
    // setInterval(function () {
    //     mySwiperControl.update(true)
    // }, 1000);
    var arrowPrev = $('.sponsors__head .arrow-prev');
    var arrowNext = $('.sponsors__head .arrow-next');
    arrowPrev.on('click', function () {
      mySwiperControl.slidePrev(400, true);
    });
    arrowNext.on('click', function () {
      mySwiperControl.slideNext(400, true);
    });
    var dots = $('.sponsors__content .little-dot');
    dots.on('click', function (event) {
      if ($('.little-dot--first').is(event.target)) {
        mySwiperControl.slidePrev(400, true);
      }
      if ($('.little-dot--last').is(event.target)) {
        mySwiperControl.slideNext(400, true);
      }
    });
  };

  function feedbackSliderInit() {
    var mySwiper = new Swiper('.feedback__slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 9,
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      on: {
        slideNextTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-next');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-next')
          }, 500);
        },
        slidePrevTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-prev');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-prev')
          }, 500);
        },
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          centeredSlides: false
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }
    });
    var mySwiperControl = document.querySelector('.feedback__slider.swiper-container').swiper;
    var dots = $('.feedback__block .little-dot');
    dots.on('click', function (event) {
      if ($('.little-dot--first').is(event.target)) {
        mySwiperControl.slidePrev(400, true);
      }
      if ($('.little-dot--last').is(event.target)) {
        mySwiperControl.slideNext(400, true);
      }
    });
    $(window).on('resize', function () {
      if ($(window).width() >= 992 && $('.feedback__slider').hasClass('swiper-container-initialized')) {
        mySwiperControl.destroy(false, true);
      }
    })
  };

  function articlesSliderInit() {
    var mySwiper = new Swiper('.article__featured-articles-slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 10,
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      preventClicks: false,
      grabCursor: true,
      on: {
        slideNextTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-next');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-next')
          }, 500);
        },
        slidePrevTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-prev');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-prev')
          }, 500);
        },
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      }
    });
    var mySwiperControl = document.querySelector('.article__featured-articles-slider.swiper-container').swiper;
    var dots = $('.article__featured-articles .little-dot');
    dots.on('click', function (event) {
      if ($('.little-dot--first').is(event.target)) {
        mySwiperControl.slidePrev(400, true);
      }
      if ($('.little-dot--last').is(event.target)) {
        mySwiperControl.slideNext(400, true);
      }
    });
    $(window).on('resize', function () {
      if ($(window).width() >= 992 && $('.feedback__slider').hasClass('swiper-container-initialized')) {
        mySwiperControl.destroy(false, true);
      }
    })
  };

  function clientsSliderInit() {
    var mySwiper = new Swiper('.clients__slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 9,
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      on: {
        slideNextTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-next');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-next')
          }, 500);
        },
        slidePrevTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-prev');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-prev')
          }, 500);
        },
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
      }
    });
    var mySwiperControl = document.querySelector('.clients__slider.swiper-container').swiper;
    var dots = $('.clients__content .little-dot');
    dots.on('click', function (event) {
      if ($('.little-dot--first').is(event.target)) {
        mySwiperControl.slidePrev(400, true);
      }
      if ($('.little-dot--last').is(event.target)) {
        mySwiperControl.slideNext(400, true);
      }
    });
    $(window).on('resize', function () {
      if ($(window).width() >= 992 && $('.clients__slider').hasClass('swiper-container-initialized')) {
        mySwiperControl.destroy(false, true);
        $('.clients__slider > .swiper-wrapper').addClass('wrapper_flex')
      }
    })
  }

  function safetySliderInit() {
    var mySwiper = new Swiper('.safety__slider', {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 20,
      direction: 'horizontal',
      centeredSlides: true,
      loop: true,
      speed: 200,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideNextTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-next');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-next')
          }, 500);
        },
        slidePrevTransitionStart: function () {
          var paginationWrapper = $('.pagination-wrapper');
          paginationWrapper.addClass('transition-prev');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-prev')
          }, 500);
        },
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          centeredSlides: false
        },
        768: {
          slidesPerView: 3,
          // spaceBetween: 20,
        },
      }
      //     768: {
      //         slidesPerView: 1,
      //         spaceBetween: 20,
      //     },
      // }
    });
    var mySwiperControl = document.querySelector('.safety__slider.swiper-container').swiper;
    var dots = $('.safety__slider-block .little-dot');
    dots.on('click', function (event) {
      if ($('.little-dot--first').is(event.target)) {
        mySwiperControl.slidePrev(400, true);
      }
      if ($('.little-dot--last').is(event.target)) {
        mySwiperControl.slideNext(400, true);
      }
    });
    if (isSet($('.safety__circle-block'))) {
      var fields = $('.circle__element');
      fields.on('click', function () {
        var index = fields.index($(this));
        mySwiper.slideToLoop(index, 500);
      })
    }
  }

  function ourMissionSliderInit() {
    var mySwiper = new Swiper('.our-mission__slider', {
      // Optional parameters
      slidesPerView: 1,
      direction: 'horizontal',
      loop: true,
      spaceBetween: 10,
      breakpoints: {
        577: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 2,
          // spaceBetween: 20,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 47
        },
      }

    });
    var mySwiperControl = document.querySelector('.our-mission__slider.swiper-container').swiper;
    var arrows = $('.our-mission__slider-control .arrow-prev, .our-mission__slider-control .arrow-next');
    arrows.on('click', function (event) {
      if ($('.arrow-prev').is(event.currentTarget)) {
        mySwiperControl.slidePrev(400, true);
      }
      if ($('.arrow-next').is(event.currentTarget)) {
        mySwiperControl.slideNext(400, true);
      }
    });
  }

  function ourTeamSliderInit() {
    var mySwiper = new Swiper('.our-team__slider', {
      // Optional parameters
      slidesPerView: 1,
      direction: 'horizontal',
      loop: true,
      spaceBetween: 15,
      centeredSlides: true,
      breakpoints: {
        577: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        }
      }
    });
    var mySwiperControl = document.querySelector('.our-team__slider.swiper-container').swiper;
    $(window).on('resize', function () {
      if ($(window).width() >= 1200 && $('.our-team__slider').hasClass('swiper-container-initialized')) {
        mySwiperControl.destroy(false, true);
      }
    })
  }

  function placeElementContent(element, center_y, center_x) {
    var fieldCenter = element.offset().left + element.outerWidth() / 2;
    var fieldTop = element.offset().top;
    if (fieldTop > center_y && fieldCenter >= center_x - 150 && fieldCenter <= center_x + 150) {
      element.addClass('content_bottom')
    } else {
      if (fieldCenter > center_x) {
        element.addClass('content_right')
      } else {
        element.addClass('content_left')
      }
    }
  }

  function placeCircleElement() {
    var deg = deg || 180;
    var fields = $('.circle__element'), container = $('.circle__wrapper'),
      radius = container.outerWidth() * 0.94 / 2,
      width = container.outerWidth(), height = container.outerHeight(),
      angle = deg || Math.PI * 3.5, step = (2 * Math.PI) / fields.length;
    var center_x = $('.circle').offset().left + $('.circle').outerWidth() / 2;
    var center_y = $('.circle').offset().top + $('.circle').outerHeight() / 2;
    fields.removeClass(['content_right', 'content_left', 'content_bottom']);
    fields.each(function () {
      var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).outerWidth() / 2);
      var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).outerHeight() / 2);
      $(this).css({
        left: x + 'px',
        top: y + 'px'
      });
      angle += step;
    });
    fields.each(function () {
      placeElementContent($(this), center_y, center_x)
    });
    var contentBottom = 0;
    // fields.each(function () {
    //     if ($(this).hasClass('content_bottom')){
    //         var height = $(this).find('.circle__element-content').outerHeight();
    //         $('.safety__circle-block').css({
    //             paddingBottom: height + 'px'
    //         })
    //         contentBottom = 1;
    //     }
    //     if (contentBottom == 1){
    //         return false
    //     } else {
    //         $('.safety__circle-block').removeAttr('style');
    //     }
    // })
  }

  function changeHeaderToScroll() {
    var header = $('header');
    var mainTop = $('.main-top');
    $(document).on('scroll', function () {
      if (header.offset().top + header.outerHeight() > mainTop.outerHeight()) {
        header.addClass('header_fixed');
      } else {
        header.removeClass('header_fixed')
      }
    })
  }

  $(document).ready(function () {

    // //LazyLoad
    // var lazyElement = $('[data-src]');
    // $(window).on('scroll', function () {
    //     lazyElement.each(function () {
    //         var windowY = $(window).scrollTop() + $(window).height() + 300;
    //         var imageY = $(this).offset().top;
    //         if(imageY <= windowY){
    //             $(this).attr('src',$(this).attr('data-src')).addClass('loaded');
    //         }
    //     })
    // });
    changeHeaderToScroll();

    if (isSet($('.sponsors'))) {
      sponsorsSliderInit();
    }
    sliderButtonsHandler();
    hamburgerInit();
    if (isSet($('.products'))) {
      if ($(window).width() < 992 && !(isSet($('.products .desktop')))) {
        $('.products__block').each(function () {
          var image = $(this).find('.products__image');
          var contentToPrepend = $(this).find('.products__content .button');
          image.parent().addClass('desktop');
          image.detach().insertBefore(contentToPrepend);
        })
      }
    }
    if (isSet($('.successes'))) {
      if ($(window).width() < 992 && !(isSet($('.successes .desktop')))) {
        $('.successes__block').each(function () {
          var video = $(this).find('.successes__video');
          var contentToPrepend = $(this).find('.successes__content .button');
          video.parent().addClass('desktop');
          video.detach().insertBefore(contentToPrepend);
        })
      }
    }

    if (isSet($('.use-cases-product'))) {
      if ($(window).width() < 992 && !(isSet($('.use-cases-product .desktop')))) {
        var image = $('.use-cases-product__image').find('img');
        var contentToPrepend = $('.use-cases-product__text .button');
        image.parent().addClass('desktop');
        image.detach().insertBefore(contentToPrepend);
      }
    }

    if (isSet($('.feedback'))) {
      if ($(window).width() < 992) {
        $('.feedback__slider > .swiper-wrapper').removeClass('wrapper_flex');
        feedbackSliderInit();
      } else {
        $('.feedback__slider > .swiper-wrapper').addClass('wrapper_flex');
      }
    }

    if (isSet($('.clients'))) {
      if ($(window).width() < 992) {
        $('.clients__slider > .swiper-wrapper').removeClass('wrapper_flex');
        clientsSliderInit();
      } else {
        $('.clients__slider > .swiper-wrapper').addClass('wrapper_flex');
      }
    }


    var requestInputs = $('.request__input');
    var phoneInput = $('.request__phone > input');
    var nameInput = $('.request__user > input, .request__lastname > input');
    var companyInput = $('.request__company > input');
    var messageInput = $('.request__message textarea');
    var requestSubmit = $('.request__submit');

    messageInput.on('blur', function () {
      if ($(this).val() !== '') {
        $(this).siblings('label').css('opacity', 0)
      } else {
        $(this).siblings('label').css('opacity', 1)
      }
    })
    requestInputs.on('input', function () {
      if ($(this).is(':valid')) {
        if (!($(this).is('#request-email'))) {
          $(this).parent().removeClass('invalid').addClass('valid');
          $(this).siblings('label').removeClass('invalid').addClass('valid');
        }
      } else {
        $(this).parent().removeClass('valid').addClass('invalid');
        $(this).siblings('label').removeClass('valid').addClass('invalid');
      }
    });

    requestSubmit.on('click', function (event) {
      event.preventDefault();
      var failFlag = 0;
      $(this).parent().find('.request__input-wrapper').each(function () {
        if (!($(this).hasClass('no-required'))) {
          if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
            failFlag = 1;
            $(this).addClass('invalid').children('label').addClass('invalid');
          }
        }
      });
      if (failFlag == 1) {
        console.log(('fail'))
      } else {
        if ($(this).is('#request-button')) {
          $('.success-image').css('display', 'block');
          $('.request__block, .request__bottom').css('display', 'none');
          $('.request__top h2').html('Thank you for the request!');
          $('.request__top p').html('Our team member will contact you soon');
          $('.request').addClass('request_success');
        } else if ($(this).is('#copy-button')) {
          $('.copy__success').css('display', 'flex');
          $('.copy__form form').css('display', 'none');
        } else if ($(this).is('#try-soter-button')) {
          $(this).parents('form').children().css('display', 'none');
          $('.try-soter-success').css('display', 'block');
        }
      }
    });


    nameInput.on('input', function () {
      $(this).val($(this).val().replace(/[0-9]/, ''));
      if ($(this).val() == '') {
        $(this).parent().removeClass('valid').addClass('invalid');
        $(this).siblings('label').removeClass('valid').addClass('invalid');
      }
    });
    phoneInput.on('input', function () {
      $(this).val($(this).val().replace(/[^0-9-+]/, ''));
      if ($(this).val() == '') {
        $(this).parent().removeClass('valid').addClass('invalid');
        $(this).siblings('label').removeClass('valid').addClass('invalid');
      }
    });

    // phoneInput.on('input', function () {
    //     if (!(Inputmask.isValid($(this).val(), "+9-(999)-999-9999"))) {
    //         // $(this).removeClass('valid').addClass('invalid');
    //         $(this).parent().removeClass('valid').addClass('invalid');
    //         $(this).siblings('label').removeClass('valid').addClass('invalid');
    //     } else {
    //         // $(this).removeClass('invalid').addClass('valid');
    //         $(this).parent().removeClass('invalid').addClass('valid');
    //         $(this).siblings('label').removeClass('invalid').addClass('valid');
    //     }
    // });
    // phoneInput.on('focus', function () {
    //     phoneInput.inputmask({
    //         "mask": "+9-(999)-999-9999",
    //         showMaskOnHover: false,
    //         showMaskOnFocus: true,
    //         'onincomplete': function () {
    //             phoneInput.inputmask("remove")
    //         },
    //         "oncomplete": function () {
    //             $(this).parent().removeClass('invalid').addClass('valid');
    //             $(this).siblings('label').removeClass('invalid').addClass('valid');
    //         }
    //     });
    // });
    // phoneInput.on('blur', function () {
    //     if (!(Inputmask.isValid($(this).val(), "+9-(999)-999-9999"))) {
    //
    //         // $(this).removeClass('valid').addClass('invalid');
    //         $(this).parent().removeClass('valid').addClass('invalid');
    //         $(this).siblings('label').removeClass('valid').addClass('invalid');
    //     } else {
    //         // $(this).removeClass('invalid').addClass('valid');
    //         $(this).parent().removeClass('invalid').addClass('valid');
    //         $(this).siblings('label').removeClass('invalid').addClass('valid');
    //     }
    // });

    var pattern = /^[\.a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    var mailInput = $('[name="email"]');
    mailInput.on('input', function () {
      if ($(this).val().search(pattern) == 0) {
        $(this).parent().removeClass('invalid').addClass('valid');
        $(this).siblings('label').removeClass('invalid').addClass('valid');
      } else {
        $(this).parent().removeClass('valid').addClass('invalid');
        $(this).siblings('label').removeClass('valid').addClass('invalid');
      }
    });
    mailInput.on('blur', function () {
      if ($(this).val() !== '') {
        $(this).siblings('label').hide();
        if ($(this).val().search(pattern) == 0) {
          $(this).parent().removeClass('invalid').addClass('valid');
          $(this).siblings('label').removeClass('invalid').addClass('valid');
        } else {
          $(this).parent().removeClass('valid').addClass('invalid');
          $(this).siblings('label').removeClass('valid').addClass('invalid');
        }
      } else {
        $(this).siblings('label').removeAttr('style');
      }

    });

    var footerForm = $('.footer__bottom form');
    var footerSubmit = footerForm.find('button[type="submit"]');
    footerSubmit.on('click submit', function (event) {
      var failFlag = 0;
      if (footerForm.find('.request__input-wrapper').hasClass('invalid') || !(footerForm.find('.request__input-wrapper').hasClass('valid'))) {
        failFlag = 1;
        footerForm.find('.request__input-wrapper').addClass('invalid').children('label').addClass('invalid');
      }
      if (failFlag == 1) {
        event.preventDefault();
      } else {
        footerForm.hide().siblings('p').hide().siblings('.footer__bottom-success').css('display', 'flex');
      }
    });

    if (isSet($('.try-soter'))) {
      $('.try-soter__right input,textarea').on('focus', function () {
        $(this).parent('.request__input-wrapper').addClass('focused');
      });
      $('.try-soter__right input,textarea').on('blur', function () {
        $(this).parent('.request__input-wrapper').removeClass('focused');
      })
    }
    if (isSet($('.copy'))) {
      var textBLock = $('.copy__text-item');
      textBLock.find('ul > li').each(function (index) {
        $(this).attr('data-step', '0' + (index + 1))
      });

    }
    if (isSet($('.order'))) {
      var buttonUp = $('.order__quantity-button.up');
      var buttonDown = $('.order__quantity-button.down');
      var quantityInput = $('input[type="number"]');
      var orderButton = $('.order button[type="button"]');

      var previewImage = $('.order__preview-image');
      var allowChange = 1;
      previewImage.on('click', function () {
        if (allowChange == 1) {
          allowChange = 0;
          var previewBlock = $(this).parents('.order__preview');
          var topImage = $(this).parents('.order__preview').find('.order__preview-top').children('img');
          var targetImage = $(this).children('img');
          var that = $(this);
          topImage.animate({
            opacity: 0
          }, function () {
            that.parents('.order__preview').find('.order__preview-top').children('img').detach();
            that.parents('.order__preview').find('.order__preview-top').append(targetImage);
          });
          targetImage.animate({
            opacity: 0
          }, function () {
            if (targetImage.attr('data-class') == 'mobile') {
              that.removeClass('mobile');
            }
            that.children('img').detach();
            that.append(topImage);
            if (topImage.attr('data-class') == 'mobile') {
              that.addClass('mobile');
            }
          });
          topImage.animate({
            opacity: 1
          });
          targetImage.animate({
            opacity: 1
          }, function () {
            allowChange = 1;
          });
        }
      });

      buttonUp.on('click', function () {
        var input = $(this).siblings('input[type="number"]');
        var addInfo = input.parents('form').find('.add-info');
        let limit = $(this).parents('form').attr('id') == 'order-armband-form' ? 30 : 20;
        input[0].stepUp();
        if ($(input[0]).val() > limit) {
          addInfo.addClass('add-info_active');
          $(input[0]).val(limit);
        }
        input.trigger('change');
      });
      buttonDown.on('click', function () {
        var input = $(this).siblings('input[type="number"]');
        var addInfo = input.parents('form').find('.add-info');
        let limit = $(this).parents('form').attr('id') == 'order-armband-form' ? 30 : 20;
        input[0].stepDown();
        if ($(input[0]).val() < limit) {
          addInfo.removeClass('add-info_active');
        }
        input.trigger('change');

      });
      quantityInput.on('input change', function () {
        if ($(this).val() < 1) {
          $(this).val(1);
        }
        let limit = $(this).parents('form').attr('id') == 'order-armband-form' ? 30 : 20;
        if ($(this).val() > limit) {
          var addInfo = $(this).parents('form').find('.add-info');
          addInfo.addClass('add-info_active');
          $(this).val(limit);
        }
        if ($(this).val() < limit) {
          var addInfo = $(this).parents('form').find('.add-info');
          addInfo.removeClass('add-info_active');
        }
      });
      orderButton.on('click', function () {
        $('body').css({
          overflow: 'hidden',
        }).children().css({
          filter: 'blur(27px)'
        });
        $('.modal').addClass('modal_active').removeAttr('style');
      });
      $('[data-class="mobile"]').parent('.order__preview-image').addClass('mobile');
      if ($(window).width() < 1200) {
        $('.order').each(function () {
          if (!(isSet($(this).find('.desktop')))) {
            var preview = $(this).find('.order__preview');
            var contentToPrepend = $(this).find('.order__main-block form');
            preview.parent().addClass('desktop');
            preview.detach().insertBefore(contentToPrepend);
          }
        })

      }
      var radio = $('.order form .order__subs-wrapper input[type="radio"]');
      radio.each(function () {
        if ($(this).prop('checked')) {
          var form = $(this).parents('form');
          var index = form.find('.order__subs-wrapper input[type="radio"]').index($(this));
          var list = form.find('.order__additional > ul');
          $(list[index]).addClass('active');
        }
      });
      $('form#order-coach-form .order__subs-wrapper input[type="radio"]').on('change', function () {
        var index = $('form#order-coach-form .order__subs-wrapper input[type="radio"]').index($(this));
        $('form#order-coach-form .order__additional ul').removeClass('active');
        $($('form#order-coach-form .order__additional ul')[index]).addClass('active');
      });
      $('form#order-clipngo-form .order__subs-wrapper input[type="radio"]').on('change', function () {
        var index = $('form#order-clipngo-form .order__subs-wrapper input[type="radio"]').index($(this));
        $('form#order-clipngo-form .order__additional ul').hide();
        $($('form#order-clipngo-form .order__additional ul')[index]).show();
      });
    }

    var modalInputs = $('.modal input');
    modalInputs.on('focus', function () {
      $(this).parent('.modal__wrapper').addClass('focused');
    });
    modalInputs.on('blur', function () {
      $(this).parent('.modal__wrapper').removeClass('focused');
    });
    var modalMail = $('input[name="order-mail"]');
    modalInputs.on('input', function () {
      if ($(this).is(':valid')) {
        if (!($(this).is('#request-phone')) || !($(this).is('#request-email'))) {
          $(this).parent().removeClass('invalid').addClass('valid');
          $(this).siblings('label').removeClass('invalid').addClass('valid');
        }
      } else {
        $(this).parent().removeClass('valid').addClass('invalid');
        $(this).siblings('label').removeClass('valid').addClass('invalid');
      }
      if (!$(this).is('#order-agree')) {
        if ($(this).val() != '') {
          $(this).siblings('label').css('visibility', 'hidden');
        } else {
          $(this).siblings('label').css('visibility', 'visible');
        }
      }
    });
    var modalWrapper = $('.modal__wrapper');
    var modalSubmit = $('.modal button[type="submit"]');
    setInterval(function () {
      var fail = 0;
      modalWrapper.each(function () {
        if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
          fail = 1;
        }
        if (fail == 1) {
          modalSubmit.addClass('disactive')
        } else {
          modalSubmit.removeClass('disactive')
        }
      })
    }, 1)
    modalSubmit.on('click submit', function (event) {
      event.preventDefault();
      var failFlag = 0;
      modalWrapper.each(function () {
        if ($(this).hasClass('invalid') || !($(this).hasClass('valid'))) {
          failFlag = 1;
          $(this).addClass('invalid').children('label').addClass('invalid');
        }
      });
      if (failFlag == 1 || modalSubmit.hasClass('disactive')) {
        console.log('fail');
      } else {
        console.log('success');
      }
    });
    var modalName = $('input[name="order-name"], input[name="order-last-name"]');
    modalName.on('input', function () {
      $(this).val($(this).val().replace(/[0-9]/, ''));
    });


    modalMail.on('input', function () {
      if ($(this).val().search(pattern) == 0) {
        $(this).parent().removeClass('invalid').addClass('valid');
        $(this).siblings('label').removeClass('invalid').addClass('valid');
      } else {
        $(this).parent().removeClass('valid').addClass('invalid');
        $(this).siblings('label').removeClass('valid').addClass('invalid');
      }
    });
    modalMail.on('blur', function () {
      if ($(this).val() !== '') {
        $(this).siblings('label').hide();
        if ($(this).val().search(pattern) == 0) {
          $(this).parent().removeClass('invalid').addClass('valid');
          $(this).siblings('label').removeClass('invalid').addClass('valid');
        } else {
          $(this).parent().removeClass('valid').addClass('invalid');
          $(this).siblings('label').removeClass('valid').addClass('invalid');
        }
      } else {
        $(this).siblings('label').removeAttr('style');
      }

    });
    var modalClose = $('.modal-close');
    modalClose.on('click', function () {
      $('body').css({
        overflow: 'auto',
      }).children().css({
        filter: 'blur(0px)'
      });
      $('.modal').removeClass('modal_active').removeAttr('style');
    });
    var modalForm = $('.modal');
    modalForm.on('click', function (event) {
      if (!($(this).children().is(event.target)) && $(this).children().has(event.target).length === 0) {
        $('body').css({
          overflow: 'auto',
        }).children().css({
          filter: 'blur(0px)'
        });
        $('.modal').removeClass('modal_active').removeAttr('style');
      }
    });

    var changeCurrencyButton = $('.order__button-wrapper small');
    var changeCurrencySubmit = $('.change-currency form button');
    var changeCurrencyClose = $('.change-currency-close');
    var changeCurrency = $('.change-currency');

    changeCurrencyButton.on('click', '.call-change-currency', function () {
      $('body').css({
        overflow: 'hidden',
      }).children().css({
        filter: 'blur(27px)'
      });
      $('.change-currency').addClass('change-currency_active').removeAttr('style');
    });


    changeCurrencySubmit.on('click', function () {
      $('body').css({
        overflow: 'auto',
      }).removeAttr('style').children().css({
        filter: 'blur(0px)'
      }).removeAttr('style');
      $('.change-currency').removeClass('change-currency_active').removeAttr('style');
      var checked = $('.change-currency input[type="radio"]:checked').val();
      var callButton = $('.call-change-currency');
      callButton.each(function () {
        $(this).parent().html('Prices shown in ' + checked + ' ').append($(this));
      })
    });

    changeCurrencyClose.on('click', function () {
      $('body').css({
        overflow: 'auto',
      }).removeAttr('style').children().css({
        filter: 'blur(0px)'
      }).removeAttr('style');
      $('[data-call="true"]').removeAttr('data-call');
      $('.change-currency').removeClass('change-currency_active').removeAttr('style');
    });

    changeCurrency.on('click', function (event) {
      if (!($(this).children().is(event.target)) && $(this).children().has(event.target).length === 0) {
        $('body').css({
          overflow: 'auto',
        }).removeAttr('style').children().css({
          filter: 'blur(0px)'
        }).removeAttr('style');
        $('.change-currency').removeClass('change-currency_active').removeAttr('style');
      }
    });

    $('.scrolling').on('click', function (e) {
      e.preventDefault();
      var destination = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(destination).position().top
      }, 700);
    });

    $('.article-nav').on('click', '.article-nav__link', function (e) {
      e.preventDefault();
      var destination = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(destination).offset().top
      }, 700);
    });

    if (isSet($('.solutions-list'))) {
      var listBLock = $('.solutions-list__list');
      listBLock.find('ul > li').each(function (index) {
        $(this).prepend('<span>0' + (index + 1) + '</span>')
      });
    }

    if (isSet($('.faq'))) {
      var listItem = $('.faq__list ul > li');
      listItem.on('mousedown', function (e) {
        if ($(this).has(e.target).length === 0) { // и не по его дочерним элементам
          $(this).toggleClass('open').children('p').slideToggle();
        }
      });
      listItem.each(function () {
        $(this).append('<div class="point"><span></span><span></span></div>')
      })
    }

    if (isSet($('.measures'))) {
      var listItem = $('.measures__list ol > li');
      var totalCount = $('.measures__total-count');
      totalCount.html(listItem.length);
    }

    if ($(window).width() >= 992) {
      var footerSocials = $('.footer__socials').data('mobile', $('.footer__socials').parent().attr('class'))
      footerSocials.detach().appendTo('.footer__left');
    }
    dropdownMobileMenuOn();
    if (isSet($('[data-position]'))) {
      $('[data-position]').each(function () {
        var style = $(this).attr('data-position').replace(/\s/g, "").split(';');
        $(this).css({
          position: 'relative',
          left: style[0] + 'px'
        });
        if (window.matchMedia('(min-width: 1200px)').matches) {
          $(this).css('left', style[1] + 'px');
        }
      });

    }

    //Cookies
    function getCookie(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function setCookie(name, value, options = {}) {

      options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
      };

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
      }

      var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

      for (var optionKey in options) {
        updatedCookie += "; " + optionKey;
        var optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }

      document.cookie = updatedCookie;
    }

    $('.cookies__submit').on('click', function () {
      setCookie('agree', 'yes');
      var cookies = $('.cookies');
      cookies.removeClass('active');
    });

    if (getCookie('agree') === undefined || getCookie('agree') !== 'yes') {
      var cookies = $('.cookies');
      cookies.addClass('active')
    }

    if (isSet($('.article__featured-articles'))) {
      articlesSliderInit();
    }
    if (isSet($('.article__newsletter'))) {
      const newsletterButton = $('.article__newsletter-wrapper button');
      const newsletterInput = $('.article__newsletter-input');
      newsletterButton.on('click submit', function (event) {
        var failFlag = 0;
        if (newsletterInput.hasClass('invalid') || !(newsletterInput.hasClass('valid'))) {
          failFlag = 1;
          newsletterInput.addClass('invalid').children('label').addClass('invalid');
        }
        if (failFlag == 1) {
          event.preventDefault();
          //fail
        } else {
          $('.article__newsletter form').hide().siblings('.article__newsletter-success').css('display', 'flex');
        }
        event.preventDefault();
      })
    }
    if (isSet($('.articles'))) {
      const categoriesList = $('.categories-list');
      const currentCategory = $('.current-category');
      if (isSet($('.current-cat'))) {
        currentCategory.attr('data-current', $('.current-cat').text());
      }
      ;
      currentCategory.on('click', function () {
        if (!($(this).hasClass('opened'))) {
          $(this).addClass('opened');
        } else {
          $(this).removeClass('opened')
        }

        categoriesList.slideToggle(function () {
          if ($(this).attr('style') == 'display: none;') {
            $(this).removeAttr('style');
          }
        });
      })

      // categoriesList.on('click', 'li', function () {
      //     $('li.current').removeClass('current');
      //     $(this).addClass('current');
      //     currentCategory.attr('data-current', $(this).text());
      //     if($(window).width() < 992){
      //         categoriesList.slideUp(function () {
      //             $(this).removeAttr('style');
      //         });
      //     }
      // })

    }

    if (isSet($('.article'))) {
      var articleHeaders = $('.article-content').find('h2');
      var articleNav = $('.article-nav');
      if (articleHeaders.length > 0) {
        articleHeaders.each(function (index) {
          $(this).attr('id', index);
          articleNav.append('<a href="#' + index + '" class="article-nav__link">' + $(this).text() + '</a>')
        })
      } else {
        articleNav.append('<a href="#start" class="article-nav__link">Introduction</a>');
        $('.article-content').attr('id', 'start');
      }
    }

    if (isSet($('.safety'))) {
      if (isSet($('.safety__circle-block'))) {
        placeCircleElement();
        var fields = $('.circle__element-icon');
        var oldDegree = 0;
        fields.on('click', function () {
          fields.parent().removeClass('active').addClass('non-active');
          const that = $(this);
          var offset = $('.circle').offset();
          var center_x = (offset.left) + ($('.circle').outerWidth() / 2);
          var center_y = (offset.top) + ($('.circle').outerHeight() / 2);
          var finish_x = (offset.left);
          var finish_y = (offset.top) + ($('.circle').outerHeight() / 2);
          var field_x = $(this).offset().left + $(this).outerWidth() / 2;
          var field_y = $(this).offset().top + $(this).outerHeight() / 2;
          var degreeToField = Math.abs(Math.atan2(field_y - center_y, field_x - center_x) * (180 / Math.PI));
          var degreeToFinish = Math.abs(Math.atan2(finish_y - center_y, finish_x - center_x) * (180 / Math.PI));
          if (field_y > center_y) {
            degreeToField *= -1;
          }
          var degree = -1 * (degreeToFinish - degreeToField);
          var tween = gsap.to(".circle__wrapper", {duration: .5, rotation: (oldDegree + degree)});
          tween.eventCallback("onComplete", function () {
            var fieldsContent = $('.circle__element');
            fieldsContent.removeClass(['content_right', 'content_left', 'content_bottom']);
            fieldsContent.each(function () {
              placeElementContent($(this), center_y, center_x)
            });
            that.parent().removeClass('non-active').addClass('active');
          });
          gsap.to('.circle__element', {duration: .5, rotation: -1 * (oldDegree + degree)});
          oldDegree += degree;
        })
      }
      if (isSet($('.safety__slider-block'))) {
        safetySliderInit();
      }
    }
    if (isSet($('.our-mission'))) {
      ourMissionSliderInit();
    }
    if (isSet($('.our-team'))) {
      if ($(window).width() < 1200) {
        ourTeamSliderInit();
      }
      $(window).on('resize', function () {
        if ($(window).width() < 1200 && !($('.our-team__slider').hasClass('swiper-container-initialized'))) {
          ourTeamSliderInit()
        }
      })
    }
    if (isSet($('.footer__mobile-block'))) {
      var footerMobileBlockButton = $('.footer__mobile-block button');
      footerMobileBlockButton.on('click', function () {
        $(this).siblings('ul').slideToggle();
        $(this).toggleClass('active')
      })
    }

    $('.up-button').on('click', function () {
      $('body,html').animate({scrollTop: 0}, 700);
    })

    if (isSet($('.header__country'))) {
      var headerCountry = $('.header__country')
      var countryButton = $('.header__country .country__button');
      var countryList = $('.header__country .country__list');

      countryButton.on('click', function () {
        headerCountry.toggleClass('open')
        if (headerCountry.hasClass('open')) {
          countryList.slideDown(200)
        } else {
          countryList.slideUp(200)
        }
      })
    }

    if (isSet($('.big-slider-section'))) {
      var swiper = new Swiper('.big-slider-section .swiper-container', {
        slidesPerView: 1,
        loop: true,
        speed: 1000,
        // autoplay: {
        //   delay: 3000
        // }
      })
      if(!Array.isArray(swiper)) swiper = [swiper]
      swiper.forEach(function (el) {
        var swiperControls = el.$el[0].swiper
        var parent = $(el.$el[0]).parents('.big-slider-section')
        var buttonNext = parent.find('.big-slider-section__button.next')
        var buttonPrev = parent.find('.big-slider-section__button.prev')
        var titles = parent.find('.big-slider-section__title')
        var paginationWrapper = parent.find('.pagination-wrapper');
        var paginationNext = paginationWrapper.find('.little-dot--last')
        var paginationPrev = paginationWrapper.find('.little-dot--first')

        buttonNext.on('click', function () {
          swiperControls.slideNext()
        })
        buttonPrev.on('click', function () {
          swiperControls.slidePrev()
        })
        paginationNext.on('click', function () {
          swiperControls.slideNext()
        })
        paginationPrev.on('click', function () {
          swiperControls.slidePrev()
        })
        swiperControls.on('slideChangeTransitionStart', function () {
          titles.removeClass('active')
        })
        swiperControls.on('slideChangeTransitionEnd', function (swiper) {
          var activeIndex = this.activeIndex;
          var activeSlide = this.slides[activeIndex]
          var titleNum = $(activeSlide).attr('data-item')
          titles.filter('[data-item=' + titleNum + ']').addClass('active')
        })
        swiperControls.on('slideNextTransitionStart', function () {
          paginationWrapper.addClass('transition-next');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-next')
          }, 500);
        })
        swiperControls.on('slidePrevTransitionStart', function () {
          paginationWrapper.addClass('transition-prev');
          setTimeout(function () {
            paginationWrapper.removeClass('transition-prev')
          }, 500);
        })
      })

    }

    if (isSet($('.tabs'))){
      var tabs = $('.tabs')
      tabs.each(function(){
        var tab = $(this)
        var tabsList = tab.find('.tabs__list')
        var tabsItems = tabsList.find('.tabs__item')
        tabsList.on('click','.tabs__item', function () {
          tabsItems.removeClass('active')
          $(this).addClass('active')
          var dataTab = $(this).attr('data-tab')
          var tabsContent = tab.find('.tabs__content')
          var contentTabs = tab.find('.tabs__tab')
          contentTabs.removeClass('active')
          var targetTab = tabsContent.find('[data-tab = '+ dataTab +']')
          targetTab.addClass('active')
        })
      })
    }
    if (isSet($('.tabs-section'))){
      var section = $('.tabs-section')
      var tabsControls = section.find('.tabs-section__tabs-controls')
      var tabsList = section.find('.tabs-section__tabs-list')
      var tabsThumb = tabsControls.find('.tabs-section__tabs-thumb')
      var activeTabItem = tabsList.find('.tabs__item.active')
      var tabsContent = section.find('.tabs-section__tabs-content')
      // var tabs = tabsContent.find('.tabs-section__tabs-tab')
      var activeTab = tabsContent.find('.tabs-section__tabs-tab.active')

      tabsContent.css({
        height: activeTab.outerHeight() + 'px'
      })
      tabsThumb.css({
        left: activeTabItem.position().left + 'px',
        width: activeTabItem.outerWidth() + 'px'
      })
      tabsList.on('click', '.tabs__item', function () {
        var offset = $(this).position().left;
        var width = $(this).outerWidth()
        tabsThumb.css({
          left: offset + 'px',
          width: width + 'px'
        })
        setTimeout(function () {
          var newActiveTab = tabsContent.find('.tabs-section__tabs-tab.active')
          tabsContent.css({
            height: newActiveTab.outerHeight() + 'px'
          })
        })
      })
      $(window).on('resize', function () {
        var newActiveTabItem = tabsList.find('.tabs__item.active')
        var newActiveTab = tabsContent.find('.tabs-section__tabs-tab.active')

        tabsContent.css({
          height: newActiveTab.outerHeight() + 'px'
        })
        tabsThumb.css({
          left: newActiveTabItem.position().left + 'px',
          width: newActiveTabItem.outerWidth() + 'px'
        })
      })
    }
  });

  $(window).on('resize', function () {


    if (isSet($('.products'))) {
      if ($(window).width() < 992 && !(isSet($('.products .desktop')))) {
        $('.products__block').each(function () {
          var image = $(this).find('.products__image');
          var contentToPrepend = $(this).find('.products__content .button');
          image.parent().addClass('desktop');
          image.detach().insertBefore(contentToPrepend);
        });
      } else if ($(window).width() >= 992 && isSet($('.products .desktop'))) {
        $('.products__block').each(function () {
          var desktopPlace = $(this).find('.desktop');
          var image = $(this).find('.products__image');
          image.detach().appendTo(desktopPlace);
        });
        $('.products .desktop').removeClass('desktop');
      }
    }
    if (isSet($('.successes'))) {
      if ($(window).width() < 992 && !(isSet($('.successes .desktop')))) {
        $('.successes__block').each(function () {
          var video = $(this).find('.successes__video');
          var contentToPrepend = $(this).find('.successes__content .button');
          video.parent().addClass('desktop');
          video.detach().insertBefore(contentToPrepend);
        });
      } else if ($(window).width() >= 992 && isSet($('.successes .desktop'))) {
        $('.successes__block').each(function () {
          var desktopPlace = $(this).find('.desktop');
          var video = $(this).find('.successes__video');
          video.detach().appendTo(desktopPlace);
        });
        $('.successes .desktop').removeClass('desktop');
      }
    }

    if (isSet($('.use-cases-product'))) {
      if ($(window).width() < 992 && !(isSet($('.use-cases-product .desktop')))) {
        var image = $('.use-cases-product__image').find('img');
        var contentToPrepend = $('.use-cases-product__text .button');
        image.parent().addClass('desktop');
        image.detach().insertBefore(contentToPrepend);
      } else if ($(window).width() >= 992 && isSet($('.use-cases-product .desktop'))) {
        var desktopPlace = $('.use-cases-product .desktop');
        var image = $('.use-cases-product img');
        image.detach().appendTo(desktopPlace);
        desktopPlace.removeClass('desktop');
      }
    }
    if (isSet($('.feedback'))) {
      if ($(window).width() < 992 && !($('.feedback__slider').hasClass('swiper-container-initialized'))) {
        $('.feedback__slider > .swiper-wrapper').removeClass('wrapper_flex');
        feedbackSliderInit();
      } else if ($(window).width() >= 992 && !($('.feedback__slider').hasClass('wrapper_flex'))) {
        $('.feedback__slider > .swiper-wrapper').addClass('wrapper_flex')
      }
    }
    if (isSet($('.clients'))) {
      if ($(window).width() < 992 && !($('.clients__slider').hasClass('swiper-container-initialized'))) {
        $('.clients__slider > .swiper-wrapper').removeClass('wrapper_flex');
        clientsSliderInit();
      } else if ($(window).width() >= 992 && !($('.clients__slider > .swiper-wrapper').hasClass('wrapper_flex'))) {
        $('.clients__slider > .swiper-wrapper').addClass('wrapper_flex')
      }
    }

    if (isSet($('[data-position]'))) {
      $('[data-position]').each(function () {
        var style = $(this).attr('data-position').replace(/\s/g, "").split(';');
        $(this).css({
          position: 'relative',
          left: style[0] + 'px'
        });
        if ($(window).width() >= 1200) {
          $(this).css('left', style[1] + 'px');
        }
      });
    }

    if (isSet($('.order'))) {
      if ($(window).width() < 1200) {
        $('.order').each(function () {
          if (!(isSet($(this).find('.desktop')))) {
            var preview = $(this).find('.order__preview');
            var contentToPrepend = $(this).find('.order__main-block form');
            preview.parent().addClass('desktop');
            preview.detach().insertBefore(contentToPrepend);
          }
        })
      }
      if ($(window).width() >= 1200) {
        $('.order').each(function () {
          if (isSet($(this).find('.desktop'))) {
            var desktopPlace = $(this).find('.desktop');
            var preview = $(this).find('.order__preview');
            preview.detach().appendTo(desktopPlace);
            desktopPlace.removeClass('desktop');
          }
        })
      }
    }


    if ($(window).width() < 992) {
      if ($('.footer__socials').data('mobile') !== undefined) {
        var footerSocialsPlace = '.' + $('.footer__socials').data('mobile');
        var footerSocials = $('.footer__socials');
        footerSocials.detach().appendTo(footerSocialsPlace);
      }
    }
    if ($(window).width() >= 992 && $('.footer__socials').data('mobile') === undefined) {
      var footerSocials = $('.footer__socials').data('mobile', $('.footer__socials').parent().attr('class'));
      footerSocials.detach().appendTo('.footer__left');
    }
    if ($(window).width() >= 992 && $('.footer__socials').data('mobile') !== undefined) {
      $('.footer__socials').detach().appendTo('.footer__left');
    }
    if (isSet($('.safety'))) {
      placeCircleElement();
    }
  });

  $(document).scroll(function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('.up-button').fadeIn();
    } else {
      $('.up-button').fadeOut();
    }
  });


})(jQuery); // <----- Конец обертки

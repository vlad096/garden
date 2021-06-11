$(document).ready(function() {


  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__list').slideToggle();
  });

  $(window).resize(function() {
    if ($(window).width() >= 1050) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }

    if ($(window).width() <= 1150) {
      sliderInfo();
    }

  });

  $('.main-header .dropdown').on('click', '.dropdown-link', function(e) {
    e.preventDefault();
    if ($(window).width() <= 1150) {
      $(this).next().slideToggle();
    }
  });

  function sliderInfo() {

    let info = $('.info__wrap');

    info.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      draggable: false,
      appendArrows: $('.info__arrows'),
      prevArrow: '<button class="info__arrow info__arrow--dir_left"></div>',
      nextArrow: '<button class="info__arrow info__arrow--dir_right"></button>',
      dotsClass: 'gallery__dots-list',
      responsive: [{
          breakpoint: 9999,
          settings: "unslick"
        },
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });

  }
  if ($(window).width() <= 1150) {
    sliderInfo();
  }

 $('.contacts__btn, .contacts__close').on('click', function() {
    $('.contacts__block').toggleClass('contacts__block--hidden');
    change ();
  });

 function change () {
   if($('.contacts__block--hidden').length>0) {
    var elem = $('.contacts__btn').attr('data-show');
    console.log('5');
    $('.contacts__btn').text(elem);
   } else {
     var elem = $('.contacts__btn').attr('data-hide');
     $('.contacts__btn').text(elem);
     console.log('6');
   }
 }

change ();

  $('.history__button, .block__video').on('click', function() {
    $('.popup--video').addClass('popup--active');
  });

  $('.main-header__call').on('click', function() {
    $('.popup--call').addClass('popup--active');
  });


  $('.lesson__entry, .types__wrap .group__entry').on('click', function() {
    $('.popup--lesson').addClass('popup--active');
  });

  $('.group .group__entry').on('click', function() {
    $('.popup--record').addClass('popup--active');
  });

   $('.events__button').on('click', function() {
    $('.popup--event').addClass('popup--active');
  });

  $('.meta__entry').on('click', function() {
    $('.popup--call').addClass('popup--active');
  });


  $('.overlay-close').click(function() {
    $(this).parents('.popup').removeClass('popup--active');
  })

  $('body').on('click', function(e) {

    
  if ($(e.target).is('.popup')) {
      $('.popup').removeClass('popup--active');
      $('.popup-gallery').removeClass('popup-gallery--active');
    }

  });

  let slider = $('.gallery__wrap');

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: '500px',
    arrows: true,
    appendArrows: $('.gallery__arrows'),
    prevArrow: '<button class="gallery__arrow gallery__arrow--dir_left"></div>',
    nextArrow: '<button class="gallery__arrow gallery__arrow--dir_right"></button>',
    dots: true,
    appendDots: $('.gallery__dots'),
    customPaging: function(slider, i) {
      return '0' + (i + 1);
    },
    dotsClass: 'gallery__dots-list',
    responsive: [

      {
        breakpoint: 1430,
        settings: {
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 960,
        settings: {
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 780,
        settings: {
          centerPadding: '0px',
          centerMode: false,
        }
      }
    ]
  });



  (function() {
    var item = $('.page-gallery__image');

    var overlay_gallery = $('.popup-gallery');
    var overlay_gallery_slider = $('.popup-gallery .overlay-slider');

    overlay_gallery_slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      draggable: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });


    item.on('click', function() {
      var id = $(this).attr('data-slide');
      console.log(id);
      overlay_gallery_slider.slick('slickGoTo', id, true);
      overlay_gallery.addClass('popup-gallery--active');
    });

    $('.overlay-close').click(function() {
      var overlay = $(this).parents('.popup');
      overlay.removeClass('popup-gallery--active');
      if (overlay.hasClass('popup-gallery')) {
        setTimeout(function() {
          var currentSlide = $('.product__gallery').slick('slickCurrentSlide');
          overlay_gallery_slider.slick('slickGoTo', currentSlide, true);
        }, 500);
      }

    });

  })();

  if ($('.info__item').length > 0) {



    var all_images = Array.from(document.querySelectorAll('.info__item')).map(el => el.dataset.image);
    const img = document.querySelector('.info__image img');

    var ImgNum = 0;
    var ImgLength = all_images.length;
    var delay = 2500;
    var lock = false;
    var run;

    const items = [...document.querySelectorAll('.info__item')];

    items.forEach((item, index) => {
      item.onmouseover = () => {
        lock = true;
        img.src = item.dataset.image;
        changeActiveClass(item);
         ImgNum = index;
      }

      item.onmouseleave = () => {
        lock = false;
      }
    })

    function changeActiveClass(activeItem){
      items.forEach(el => el.querySelector('.info__subtitle').classList.remove('info__subtitle--active'));
      activeItem.querySelector('.info__subtitle').classList.add('info__subtitle--active');
    }

    function chgImg(direction) {
      if (lock) return

      ImgNum = (ImgNum + direction) % ImgLength;
      img.src = all_images[ImgNum];
       changeActiveClass(items[ImgNum]);
    }

    run = setInterval(() => chgImg(1), delay);

  }

  var events = $('.events__gallery');
  events.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 1,
    // autoplay: true,
    //autoplaySpeed:5000,
    fade: false,
    arrows: true,
    appendArrows: $('.events__arrows'),
    prevArrow: '<button class="events__arrow events__arrow--dir_left"></div>',
    nextArrow: '<button class="events__arrow events__arrow--dir_right"></button>',
    dots: true,
    appendDots: $('.events__dots'),
    customPaging: function(slider, i) {
      return '0' + (i + 1);
    },
    dotsClass: 'events__dots-list',
  });

  var food = $('.food__wrap');
  food.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 1,
    // autoplay: true,
    //autoplaySpeed:5000,
    fade: false,
    arrows: true,
    appendArrows: $('.food__arrows'),
    prevArrow: '<button class="food__arrow food__arrow--dir_left"></div>',
    nextArrow: '<button class="food__arrow food__arrow--dir_right"></button>',
    dots: true,
    appendDots: $('.food__dots'),
    customPaging: function(slider, i) {
      return '0' + (i + 1);
    },
    dotsClass: 'food__dots-list',
  });

  var desc = $('.desc__wrap');
  desc.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 1,
    // autoplay: true,
    //autoplaySpeed:5000,
    fade: false,
    arrows: true,
    appendArrows: $('.desc__arrows'),
    prevArrow: '<button class="desc__arrow desc__arrow--dir_left"></div>',
    nextArrow: '<button class="desc__arrow desc__arrow--dir_right"></button>',
    dots: true,
    appendDots: $('.desc__dots'),
    customPaging: function(slider, i) {
      return '0' + (i + 1);
    },
    dotsClass: 'desc__dots-list',
  });

});

function slideGo(dir) {
  let slider = $('.gallery__wrap');
  if (dir === "+") {
    slider.slick('slickNext');
  } else if (dir === "-") {
    slider.slick('slickPrev');
  }
}

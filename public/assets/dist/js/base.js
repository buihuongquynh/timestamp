/**
 * Base frontend
 */
$(function () {
  'use strict';

  if ($.fn.slick) {
    $('.slick').on('init', function (event, slick) {
      let parent = $(this).wrap('<div></div>').parent();
      parent.append(parent.next('.slick-copy'));
      if (slick.slideCount > 1) {
        parent.append(
          '<div class="slick-counter f-pink"><span class="current">' + (slick.currentSlide + 1) + '</span> / <span class="total">' + slick.slideCount + '</span></div>'
        );
      }
    })
      .slick({
        // autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        infinite: true,
        arrows: true
      })
      .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(this).parent().find('.current').text(nextSlide + 1);
      });
  }

  let buttons = $(':submit, :image');
  $('form').submit(function (e) {
    // disable button submit
    buttons.attr('disabled', true);

    setTimeout(function () {
      buttons.attr('disabled', false);
    }, 5000);
  });

  // CSRF security
  $.ajaxSetup({
    beforeSend: function (xhr, setting) {
      if (setting.type != 'GET') {
        xhr.setRequestHeader('X-XSRF-TOKEN', getCsrf());
      }
    }
  });

  var topBtn = $('#page-top');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

function getCsrf() {
  let cStart = document.cookie.indexOf('XSRF-TOKEN=');
  if (cStart != -1) {
    cStart = cStart + 11;
    let cEnd = document.cookie.indexOf(';', cStart);
    if (cEnd == -1) {
      cEnd = document.cookie.length;
    }

    return unescape(document.cookie.substring(cStart, cEnd));
  }

  return '';
}

function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('nav_btn');
  var blackBg = document.getElementById('nav_bg');

  hamburger.addEventListener('click', function () {
    body.classList.toggle('nav_open'); //メニュークリックでnav-openというクラスがbodyに付与
    if(body.classList.contains('nav_open')){
      document.getElementById('header').classList.remove('l-header');
    }else{
      document.getElementById('header').classList.toggle('l-header');
    }
  });
  blackBg.addEventListener('click', function () {
    body.classList.remove('nav_open'); //もう一度クリックで解除
    document.getElementById('header').classList.toggle('l-header');
  });
}
toggleNav();

if (location.search.includes('amf_')) {
  let amf = location.search.match(/amf_([0-9a-zA-Z]+)/)[1];
  let date = new Date();
  date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));

  document.cookie = 'amf=' + amf + '; expires=' + date.toUTCString() + '; path=/';
}
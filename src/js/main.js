const $ = require("jquery");
const ScrollHint = require('scroll-hint');

$(function() {
  // ハンバーガーメニューの開閉処理
  const hamburgerOpen = () => {
    const $hamburgerBtn = $('.hamburger');
    const $headerMenu = $('.main-nav');
    const $body = $('body');
    let $navLink = $('.main-nav a');
    let state = false;
    let pos;

    $hamburgerBtn.on('click',function() {
      $(this).toggleClass('active');
      $headerMenu.toggleClass('active');
      if(state == false) {
        pos = $(window).scrollTop();
        $body.addClass('fixed').css({'top': -pos});
        state = true;
      } else {
        $body.removeClass('fixed').css({'top': 0});
        window.scrollTo(0,pos);
        state = false;
      }
    });
    // メニュー内のリンクをクリックしたらSPメニューを閉じる
    $navLink.on('click', function() {
      $hamburgerBtn.removeClass('active');
      $headerMenu.removeClass('active');
      $body.removeClass('fixed').css({'top':0});
      state = false;
    });
  };

  hamburgerOpen();

  new ScrollHint('.js-scrollable', {
    i18n: {
      scrollable: 'スクロールできます'
    }
  });
});
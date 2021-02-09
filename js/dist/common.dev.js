"use strict";

$(document).ready(function () {
  https: //clck.ru/F5MdE
  $('.menu_but').click(function () {
    $('.nav_menu_list').slideToggle(350, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
});
$(document).ready(function () {
  $(".fancybox").fancybox({
    "imageScale": false,
    "zoomOpacity": true,
    "overlayShow": false,
    "zoomSpeedIn": 500,
    "zoomSpeedOut": 500
  });
});
$(function () {
  var btnUp = $(".but_up");
  var top = $(this).scrollTop();

  if (top > 300) {
    btnUp.fadeIn(500);
  } else {
    btnUp.fadeOut(500);
  }

  $(document).on("scroll", function () {
    var top = $(this).scrollTop();

    if (top > 300) {
      btnUp.fadeIn(500);
    } else {
      btnUp.fadeOut(500);
    }
  });
  btnUp.on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 400);
  });
});
$(".link").on("click", function (e) {
  e.preventDefault();
  var selector = $(this).attr("href"); //получили Атрибут

  var h = $(selector); //получили элемент с данным атрибутом

  $("html,body").animate({
    scrollTop: h.offset().top //мы скролим тег body на высоту h.offset(высоту получаем при клике на элемент меню).top

  }, 500);
});
$(document).ready(function () {
  new WOW().init();
}); // Project code
// mobile menu

var mobileMenu = document.querySelector('.mobile_menu');
var openmenu = document.querySelectorAll('[data-openmenu]');
var closemenu = document.querySelectorAll('[data-closemenu]');
openmenu.forEach(function (item) {
  item.addEventListener('click', function () {
    mobileMenu.style.transform = 'translateY(0)';
  });
});
closemenu.forEach(function (item) {
  item.addEventListener('click', function () {
    mobileMenu.style.transform = 'translateY(-101%)';
  });
}); // delete br

var brs = document.querySelectorAll('.block_1 br');
console.log(brs);
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__link'),
    hamburger = document.querySelector('.header__burger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('menu_active');
    })
  })
});

$(document).ready(function () {

  //Slick Slider
  $('.catalog').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
        settings: {
          // вносим изменения на ширине 1024 и ниже 
          slidesToShow: 1,

        }
      }
    ]

  });


    //Slick Slider
    $('.slider-whyWe').slick({
      infinite: true,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      dots: true,
      appendArrows: $('.arrows-container'),
      appendDots: $('.arrows-container'),
      responsive: [
        {
          breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
          settings: {
            // вносим изменения на ширине 1024 и ниже 
            slidesToShow: 1,
  
          }
        }
      ]
  
    });
});

$(document).ready(function () {
  //spoiler
  $('.answer-item__title').click(function (event) {
     if($('.answer-container').hasClass('one')){
         $('.answer-item__title').not($(this)).removeClass('activeA');
         $('.answer-item__text').not($(this).next()).slideUp(300);
     }
     $(this).toggleClass('activeA').next().slideToggle(300);
     
 });
});
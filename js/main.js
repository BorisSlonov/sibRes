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


//Получаем все "select" по селектору
const selects = document.querySelectorAll('.select')
//переборка по полученным "select"
for (let i = 0; i < selects.length; i++) {
  const select = selects[i]
  //получаем все "option" внутри "select"
  const options = select.querySelectorAll('option')

  //создаем кастомный "select"
  const customSelect = document.createElement('div')
  const customSelectList = document.createElement('div')
  const customSelectCurrent = document.createElement('button')

  select.setAttribute('tabindex', '-1')
  //задем классы и атрибуты кастомному "select"
  customSelect.className = 'custom-select'
  customSelectList.className = 'custom-select__list'
  customSelectCurrent.className = 'custom-select__current'

  //по умолчанию у button будет type="submit", поэтому меням на type="button" чтобы избежать отправку формы при клие на кастомный "select"
  customSelectCurrent.setAttribute('type', 'button')

  //создаем вложенность созданных элементов
  customSelect.append(customSelectCurrent, customSelectList)

  //добавляем кастоный "select" сразу после оргинального "select"
  select.after(customSelect)

  //получаем список и значения "option" из "select", затем создаём кастомный "option" для кастоного "select"
  const createCustomDom = (x, y) => {
    let selectItems = ''
    for (option of options) {
      selectItems += `<button type="button" class="custom-select__item" data-value="${option.value}">${option.text}</button>`
    }
    customSelectList.innerHTML = selectItems
    x(), y();
  }

  //открываем-закрываем выпадающий список по клику
  const toggleClass = () => { customSelect.classList.toggle('custom-select--show') }

  //присваиваем текстовое первое значение "option" в кастомном "select"
  const currentTextValue = () => customSelectCurrent.textContent = customSelectList.children[0].textContent

  //получаем и задаем значения text/value 
  const currentValue = () => {
    const items = customSelectList.children
    for (el of items) {
      let selectValue = el.getAttribute('data-value')
      let selectText = el.textContent
      el.addEventListener('click', () => {
        customSelect.classList.remove('custom-select--show')
        customSelectCurrent.textContent = selectText
        select.value = selectValue
      })
    }
  }

  const desctopFn = () => {
    customSelectCurrent.addEventListener('click', toggleClass)
  }

  const mobileFn = () => {
    for (let j = 0; j < selects.length; j++) {
      let mobileSelect = selects[j]
      mobileSelect.addEventListener('change', () => {
        mobileSelect.nextElementSibling.querySelector('.custom-select__current').textContent = mobileSelect.value
      })
    }
  }

  createCustomDom(currentTextValue, currentValue)


  //закрываем выпадающий список по клику вне области кастомного селекта
  document.addEventListener('mouseup', (e) => {
    if (!customSelect.contains(e.target)) customSelect.classList.remove('custom-select--show')
  })

  detectmob(mobileFn, desctopFn)

  function detectmob(x, y) {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      x();
    }
    else {
      y();
    }
  }
}



$(document).ready(function () {

  //Slick Slider
  $('.catalog').slick({
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
        settings: {
          // вносим изменения на ширине 1024 и ниже 
          slidesToShow: 1,
          arrows: true

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




  $(document).on('click', '.popupOpen', function () {
    $('.product__row').slick({
      slidesToShow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
          settings: {
            // вносим изменения на ширине 1024 и ниже 
            slidesToShow: 1,
            arrows: true

          }
        }
      ]

    });
  });



  $(document).on('click', '.popupOpen2', function () {
    $('.product__row2').slick({
      slidesToShow: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
          settings: {
            // вносим изменения на ширине 1024 и ниже 
            slidesToShow: 1,
            arrows: true

          }
        }
      ]

    });
  });


  $(document).on('click', '.popupOpen3', function () {
    $('.product__row3').slick({
      slidesToShow: 1,
      arrows: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768, // - от какой ширины изменять настройки(1024 и ниже)
          settings: {
            // вносим изменения на ширине 1024 и ниже 
            slidesToShow: 1,
            arrows: true

          }
        }
      ]

    });
  });



});

$(document).ready(function () {
  //spoiler
  $('.answer-item__title').click(function (event) {
    if ($('.answer-container').hasClass('one')) {
      $('.answer-item__title').not($(this)).removeClass('activeA');
      $('.answer-item__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('activeA').next().slideToggle(300);

  });


  //calc

    jQuery('#btn-calc').click(function() {

      //pelettes/brickets

      var oil = jQuery('#select').val();

      //user
      var kwmt = jQuery('#kwmt').val();
      var months = jQuery('#months').val();
      var score = parseFloat(kwmt * months) * oil;
      score =  score + "шт" + " " + "расход за период" ;
      jQuery('.output label').text(score);
      jQuery('.output').show();
    });
  



});
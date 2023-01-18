// Swiper
// ============================================

// Слайдер в секции intro
const swiperIntro = document.querySelector('[data-intro-slider]');

if (swiperIntro) {
  const swiper = new Swiper(swiperIntro, {

    // !!! Не работает отключение кнопок в планшетной/мобильной версии
    //Брейкпоинты (адаптив)
    //Ширина экрана
    breakpoints: {
      // when window width is >= 768px
      768: {
        // Navigation arrows
        navigation: {
          prevEl: '[data-intro-slider-btn-prev]',
          nextEl: '[data-intro-slider-btn-next]',
        }
      }
    },


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      /* bulletElement - определяет, какой HTML-тег будет использоваться для представления одного маркера нумерации страниц. */
      // bulletElement: 'button',
      /* Если clickable: true нажатие на кнопку пагинации приведет к переходу на соответствующий слайд. */
      clickable: true,
    },


    // Включение/Отключение перетаскивания на ПК
    simulateTouch: false,
  })
}

const popularGoodsSliders = document.querySelectorAll('[data-popular-goods-slider]');

if (popularGoodsSliders) {

  popularGoodsSliders.forEach((slider) => {
    const swiper = new Swiper(slider, {

      //Брейкпоинты (адаптив)
      //Ширина экрана
      breakpoints: {
        // when window width is >= 320px
        320: {
          // Количество слайдов для показа
          slidesPerView: 1,

          pagination: {
            el: slider.closest('[data-tab-content]').querySelector('[data-popular-goods-pagination]'),
            clickable: true,
          }
        },
        // when window width is >= 768px
        768: {
          // Navigation errows
          navigation: {
            prevEl: slider.closest('[data-tab-content]').querySelector('[data-popular-goods-slider-btn-prev]'),
            nextEl: slider.closest('[data-tab-content]').querySelector('[data-popular-goods-slider-btn-next]'),
          },

          // Количество слайдов для показа
          slidesPerView: 4,
        }
      },

      // Включение/Отключение перетаскивания на ПК
      simulateTouch: false,

      // Отступ между слайдами
      spaceBetween: 29,
      // Количество пролистываемых слайдов
      slidesPerGroup: 1,
    })
  })
}


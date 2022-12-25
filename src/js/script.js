// import './vendor/swiper.js';

// const introSlider = document.querySelector('[data-intro-slider]');


// if (introSlider) {
//   const swiper = new Swiper(introSlider, {

//     // Navigation arrows
//     navigation: {
//       nextEl: '.intro-slider__btn--next',
//       prevEl: '.intro-slider__btn--prev',
//     },
//   })
// }

// Табы - поиск по сайту

const search = document.querySelector('[data-search]');

if (search) {

  // Из Node List делаем массив с помощью Array.from, чтобы работал метод indexOf()
  const tabs = Array.from(search.querySelectorAll('[data-tab-btn]'));
  const tabContents = search.querySelectorAll('[data-tab-content]');

  // Инициализация активных эл-ов
  tabs[0].classList.add('is-active');
  tabContents[0].classList.add('is-active');

  search.addEventListener('click', (evt) => {
    if (evt.target.matches('[data-tab-btn]')) {
      const activeTab = evt.target;
      const indexActiveTab = tabs.indexOf(activeTab);


      tabs.forEach((tab) => {
        tab.classList.remove('is-active');
      })
      activeTab.classList.add('is-active');


      tabContents.forEach((content) => {
        content.classList.remove('is-active');
      })
      tabContents[indexActiveTab].classList.add('is-active');
    }
  })
}


// Популярные товары

const popularGoods = document.querySelector('[data-popular-goods]');

// Табы - популярные товары
// Изменение цвета сердечка - добавление в избранное

if (popularGoods) {

  // Из Node List делаем массив с помощью Array.from, чтобы работал метод indexOf()
  const tabs = Array.from(popularGoods.querySelectorAll('[data-tab-btn]'));
  const tabContents = popularGoods.querySelectorAll('[data-tab-content]');

  // Инициализация активных эл-ов
  tabs[0].classList.add('is-active');
  tabContents[0].classList.add('is-active');


  popularGoods.addEventListener('click', (evt) => {

    // Изменение цвета сердечка - добавление в избранное
    if (evt.target.matches('[data-product-to-favourites]')) {
      const favouritesBtn = evt.target;
      console.log(favouritesBtn);
      favouritesBtn.classList.toggle('is-favourite');
    }

    // Табы - популярные товары
    if (evt.target.matches('[data-tab-btn]')) {
      const activeTab = evt.target;
      const indexActiveTab = tabs.indexOf(activeTab);


      tabs.forEach((tab) => {
        tab.classList.remove('is-active');
      })
      activeTab.classList.add('is-active');


      tabContents.forEach((content) => {
        content.classList.remove('is-active');
      })
      tabContents[indexActiveTab].classList.add('is-active');
    }
  })
}

// Популярные товары

const similarGoods = document.querySelector('[data-similar-goods]');

// Табы - популярные товары
// Изменение цвета сердечка - добавление в избранное

if (similarGoods) {

  // Из Node List делаем массив с помощью Array.from, чтобы работал метод indexOf()
  const tabs = Array.from(similarGoods.querySelectorAll('[data-tab-btn]'));
  const tabContents = similarGoods.querySelectorAll('[data-tab-content]');

  // Инициализация активных эл-ов
  tabs[0].classList.add('is-active');
  tabContents[0].classList.add('is-active');


  similarGoods.addEventListener('click', (evt) => {

    // Изменение цвета сердечка - добавление в избранное
    if (evt.target.matches('[data-product-to-favourites]')) {
      const favouritesBtn = evt.target;
      console.log(favouritesBtn);
      favouritesBtn.classList.toggle('is-favourite');
    }

    // Табы - популярные товары
    if (evt.target.matches('[data-tab-btn]')) {
      const activeTab = evt.target;
      const indexActiveTab = tabs.indexOf(activeTab);


      tabs.forEach((tab) => {
        tab.classList.remove('is-active');
      })
      activeTab.classList.add('is-active');


      tabContents.forEach((content) => {
        content.classList.remove('is-active');
      })
      tabContents[indexActiveTab].classList.add('is-active');
    }
  })
}

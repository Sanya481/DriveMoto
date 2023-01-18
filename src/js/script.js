import './accordions.js';
import './vendor/swiper.js';
import './sliders.js';
import './select.js';
import './burger.js';
import './catalog-filter.js';
import './sort-popup.js';


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


// Каталог

const pageCatalog = document.querySelector('[data-page-catalog]');

if (pageCatalog) {
  // Блок с раскладкой товаров
  const sortLayoutBlock = pageCatalog.querySelector('[data-sort-layout]');

  pageCatalog.addEventListener('click', (evt) => {

    // Раскрытие списков фильтра
    if (evt.target.matches('[data-filter-title]')) {
      const filterTitleBtn = evt.target;
      const filterGroup = evt.target.closest('[data-filter-group]');
      const filterGroupWrapper = filterGroup.querySelector('[data-filter-group-wrapper]');


      filterGroup.classList.toggle('is-open');
      filterTitleBtn.classList.toggle('is-open');
      filterGroupWrapper.classList.toggle('is-open');

      if (filterGroup.classList.contains('is-open')) {
        filterGroupWrapper.style.maxHeight = filterGroupWrapper.scrollHeight + 'px';
      } else {
        filterGroupWrapper.style.maxHeight = 0;
      }
    }

    // Если на странице есть варианты раскладки товаров
    if (sortLayoutBlock) {
      // Список товаров
      const goodsList = pageCatalog.querySelector('[data-popular-goods-list]');
      // Все кнопки вариантов раскладки
      const catalogLayoutBtns = sortLayoutBlock.querySelectorAll('[data-catalog-layout]');

      // Измнение раскладки товаров
      if (evt.target.matches('[data-catalog-layout]')) {
        // Кнопка изменения раскладки
        const layoutTypeBtn = evt.target;
        // Тип раскладки
        const layoutType = evt.target.dataset.catalogLayout;

        switch (layoutType) {
          case 'grid':
            catalogLayoutBtns.forEach((btn) => {
              btn.classList.remove('is-active');
            })
            layoutTypeBtn.classList.add('is-active');

            if (goodsList.classList.contains('is-block')) {
              goodsList.classList.remove('is-block');
            }

            break

          case 'block':
            catalogLayoutBtns.forEach((btn) => {
              btn.classList.remove('is-active');
            })
            layoutTypeBtn.classList.add('is-active');

            goodsList.classList.add('is-block');
            break
        }

      }
    }


  })
}


// Появление крестика при наборе текста и удаление текста
const presearch = document.querySelector('[data-presearch]');

if (presearch) {

  const presearchInputField = presearch.querySelector('[data-presearch-input]');
  const presearchResetBtn = presearch.querySelector('[data-presearch-reset]');

  // удаление текста
  presearch.addEventListener('click', (evt) => {
    if (evt.target.matches('[data-presearch-reset]')) {
      if (presearchInputField.value !== "") {
        presearchInputField.value = "";
        presearchResetBtn.classList.remove('is-active');
      }
    }
  })

  // Появление кнопки сброса набранного текста
  presearchInputField.addEventListener('input', () => {
    if (presearchInputField.value !== "") {
      presearchResetBtn.classList.add('is-active');
    } else {
      presearchResetBtn.classList.remove('is-active');
    }
  })
}

// Табы - карточка товара

const productData = document.querySelector('[data-product-data]');

if (productData) {

  // Из Node List делаем массив с помощью Array.from, чтобы работал метод indexOf()
  const tabs = Array.from(productData.querySelectorAll('[data-tab-btn]'));
  const tabContents = productData.querySelectorAll('[data-tab-content]');

  // Инициализация активных эл-ов
  tabs[0].classList.add('is-active');
  tabContents[0].classList.add('is-active');

  productData.addEventListener('click', (evt) => {
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


// Аккордеон в комментариях

const userReviewBlock = document.querySelector('[data-reviews]');

if (userReviewBlock) {

  // Ответ на отзыв
  userReviewBlock.addEventListener('click', (evt) => {
    if (evt.target.matches('[data-user-comments]')) {
      const userCommentsShowBtn = evt.target;
      const currentUserReviewBlock = userCommentsShowBtn.closest('[data-user-review]');
      const commentsWrapper = currentUserReviewBlock.querySelector('[data-comments-wrapper]');

      commentsWrapper.classList.toggle('is-open');
      userCommentsShowBtn.classList.toggle('is-open');


      if (commentsWrapper.classList.contains('is-open')) {
        commentsWrapper.style.maxHeight = commentsWrapper.scrollHeight + 'px';
      } else {
        commentsWrapper.classList.remove('is-open');
        userCommentsShowBtn.classList.remove('is-open');
        commentsWrapper.style.maxHeight = 0;

      }
    }

    // Ответ на коммент
    if (evt.target.matches('[data-comment-answer-btn]')) {
      const answerCommentBtn = evt.target;

      const currentUserReviewBlock = answerCommentBtn.closest('[data-user-review]');
      const commentsWrapper = currentUserReviewBlock.querySelector('[data-comments-wrapper]');

      const commentItem = answerCommentBtn.closest('[data-user-comment]');
      const commentFooter = commentItem.querySelector('[data-comment-footer]');
      const commentsAnswerForm = commentItem.querySelector('[data-answer-form]');

      commentsAnswerForm.classList.toggle('is-open');
      commentFooter.classList.toggle('is-open');

      if (commentsAnswerForm.classList.contains('is-open')) {
        commentsAnswerForm.style.maxHeight = commentsAnswerForm.scrollHeight + 'px';
        commentsWrapper.style.maxHeight = '100%';
        console.log(commentsWrapper)
      } else {
        commentsAnswerForm.classList.remove('is-open');
        commentFooter.classList.remove('is-open');
        commentsAnswerForm.style.maxHeight = 0;

      }
    }
  })
}








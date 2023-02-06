// import rater from "rater-js.js";

// Подключение библиотек
import './vendor/swiper.js';
import './vendor/rater.js';
// import './vendor/rater-js.js';

import './price-slider.js';
import './vendor/imask.js';

// import './util.js'

import './accordions.js';
import './sliders.js';
import './select.js';
import './burger.js';
import './catalog-filter.js';
import './sort-popup.js';

// import Raty from 'raty-js';

import './vendor/jquery-3.6.3.slim.min.js';
import './vendor/jquery.rateyo.js';




// import {Starry} from './vendor/starry.js';

// import Starry from 'starry-rating';

// Рейтинг

const goodRating = document.querySelector('[data-good-rating]');

$(function () {

  $(goodRating).rateYo({
    starWidth: "30px",
    // Расстояние между звездами
    spacing: "5px",
    // Рейтинг по умолчанию
    // rating: 4,
    // Цвет не выбранных звёзд
    normalFill: "#A0A0A0",
    // Цвет выбранных звёзд
    ratedFill: "#1C62CD",
    /* Установите значение readOnly: true, если вы хотите, чтобы рейтинг был недоступен для редактирования */
    // readOnly: true,
  });

});

// const starRating = new Starry(goodRating, {
//   name: goodRating,
//   stars: 5,
//   // multiRating: false,
// });

// var starRatingId = 'ExampleRating'; // Html DOM id + star rating element name
// const goodRating = document.querySelector('[data-good-rating]');
// var starRating = new Starry(goodRating, {
// 	name: starRatingId, // Use a name to determine tooltips for only this Starry element
// 	labels: [
// 		'Low',
// 		'Nice to have',
// 		'Very nice',
// 		'Perfect',
// 		'Excellent'
// 	],
// 	onClear: function () {
// 		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip('dispose');
// 	},
// 	onRender: function () {
// 		$('[data-name="' + starRatingId + '"] [data-tooltip]').tooltip({
// 			trigger: 'hover',
// 			placement: 'top'
// 		});
// 	},
// 	onRate: function (rating) {
// 		console.log(rating)
// 	},
// 	icons: {
// 		// File path, uri or base64 string for `src` attribute
// 		blank: './dist/icons/blank.svg',
// 		hover: './dist/icons/hover.svg',
// 		active: './dist/icons/active.svg'
// 	}
// });

// const raty = new Raty(document.querySelector('[data-good-rating]'));

// // Options
// var options = {
//   max_value: 10,
//   step_size: 0.5,
//   initial_value: 10,
//   // selected_symbol_type: 'utf8_star', // Must be a key from symbols
//   cursor: 'default',
//   readonly: false,
//   change_once: false, // Determines if the rating can only be set once
//   ajax_method: 'POST',
//   url: 'http://localhost/test.php',
//   additional_data: {} // Additional data to send to the server
// }

// $('[data-good-rating]').rate(options);

// var myRater = rater({element: document.querySelector('[data-good-rating]'), rateCallback: function rateCallback(rating, done) {
//   //make async call to server however you want
//   //in this example we have a 'service' that rate and returns the average rating
//   myDataService.rate(rate).then(function(avgRating) {
//       //update the avarage rating with the one we get from the server
//       myRater.setRating(avgRating);
//        //we could disable the rater to prevent another rating
//        //if we dont want the user to be able to change their mind
//       myRater.disable();
//       //dont forget to call done
//       done();
//   }, function(error) {
//           //handle the error
//           //dont forget to call done
//           done();
//   });
// }});



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

// Табы - фильтр товаров

const filterСatalog = document.querySelector('[data-filter-catalog]');

if (filterСatalog) {

  // Из Node List делаем массив с помощью Array.from, чтобы работал метод indexOf()
  const tabs = Array.from(filterСatalog.querySelectorAll('[data-tab-btn]'));
  const tabContents = filterСatalog.querySelectorAll('[data-tab-content]');

  // Инициализация активных эл-ов
  tabs[0].classList.add('is-active');
  tabContents[0].classList.add('is-active');

  filterСatalog.addEventListener('click', (evt) => {
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

// const productInfoMax = document.querySelector('[data-first-paragraph]').scrollHeight;
// console.log(productInfoMax.offsetHeight)
// console.log(document.querySelector('[data-first-paragraph]').scrollHeight)


if (productData) {

  // const productInfoWrapper = productData.querySelector('[data-product-info]');
  // const productInfoContent = productInfoWrapper.querySelector('[data-product-info-content]');

  // Минимальная высота описания товара
  // const productInfoMaxHeight = productInfoContent.querySelector('[data-first-paragraph]');

  // console.log(productInfoMaxHeight.scrollHeight)
  // console.log(productInfoMaxHeight.offsetHeight)

  // Задаем скрытие эл-та в зависимости от кол-ва вариантов сортировки используя переменную - высоты блока
  // productInfoContent.style.setProperty('--product-info-max-height', `${productInfoMaxHeight.scrollHeight}px`);


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

    // Развернуть/Свернуть описание товара
    if (window.matchMedia('screen and (max-width: 767px)').matches) {

      if (evt.target.matches('[data-product-info-btn]')) {
        const productInfoBtn = evt.target;
        const productInfoBlock = evt.target.closest('[data-tab-content]');
        const productInfoWrapper = productInfoBlock.querySelector('[data-product-info]');
        const productInfoContent = productInfoWrapper.querySelector('[data-product-info-content]');
        const productInfoMaxHeight = productInfoContent.querySelector('[data-first-paragraph]').scrollHeight;
        // console.log(productInfoMaxHeight)

        productInfoWrapper.classList.toggle('is-show');

        if (productInfoWrapper.classList.contains('is-show')) {
          productInfoContent.style.maxHeight = `${productInfoContent.scrollHeight}px`;
          productInfoBtn.textContent = 'Свернуть';
        } else {
          productInfoContent.style.maxHeight = `${productInfoMaxHeight}px`;
          productInfoBtn.textContent = 'Развернуть описание';
        }

        // console.log('ok')
      }
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

    if (evt.target.matches('[data-comment-answer-btn]')) {

    }

  })
}






// =====================

// Ищем в фильтре товаров, чтобы не сбить работу сортировки товаров
const filterCatalog = document.querySelector('[data-filter-catalog]');

if (filterCatalog) {

  /**
  * Код клавиши Tab
  */
  const KEYCODE_TAB = 9;

  const selectInputFields = filterCatalog.querySelectorAll('[data-select-input-field]');
  const filterSelects = filterCatalog.querySelectorAll('[data-select]');


  selectInputFields.forEach((selectInput) => {
    selectInput.checked = false;
  })


  selectInputFields.forEach((selectInput) => {
    selectInput.addEventListener('change', (evt) => {
      evt.stopPropagation();

      const selectInputField = evt.target;
      const currentSelect = evt.target.closest('[data-select]');
      const selectedOption = currentSelect.querySelector('[data-select-btn]');
      const selectOptions = currentSelect.querySelectorAll('[data-select-item]');
      const filterSelectList = currentSelect.querySelector('[data-select-list]');


      /**
      * @description Ловушка фокуса
      */
      const onTrapFocus = (evt) => {
        // Элементы списка можно изменять и это может быть не только button
        const focusableEls = filterSelectList.querySelectorAll('button');
        const firstFocusableEl = focusableEls[0];
        const lastFocusableEl = focusableEls[focusableEls.length - 1];
        const isTabPressed = (evt.key === 'Tab' || evt.key === KEYCODE_TAB)

        if (!isTabPressed) {
          return
        }

        /* shift + tab */
        if (evt.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus();
            evt.preventDefault();
          }
          /* tab */
        } else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus()
            evt.preventDefault();
          }
        }
      }

      const onClickOverlay = (evt) => {

        const overlayClick = !evt.composedPath().includes(currentSelect)

        if (overlayClick) {
          currentSelect.classList.remove('is-show');
          filterSelectList.style.maxHeight = 0;
          selectInputField.checked = false;

          selectOptions.forEach((option) => {
            option.disabled = true;
          })

          filterSelectList.removeEventListener('click', onChangeSelectValue);
          document.removeEventListener('click', onClickOverlay);
          filterSelectList.removeEventListener('keydown', onTrapFocus);
        }
      }


      const onChangeSelectValue = (evt) => {
        if (evt.target.matches('[data-select-item]')) {

          const selectItem = evt.target;
          const selectItemValue = selectItem.textContent;

          if (selectItemValue !== selectedOption.textContent) {
            selectInputField.value = selectItemValue;
            selectedOption.textContent = selectItemValue;

            currentSelect.classList.remove('is-show');
            filterSelectList.style.maxHeight = 0;
            selectInputField.checked = false;

            filterSelectList.removeEventListener('click', onChangeSelectValue);
            filterSelectList.removeEventListener('keydown', onTrapFocus);
            document.removeEventListener('click', onClickOverlay);

          } else {
            currentSelect.classList.remove('is-show');
            filterSelectList.style.maxHeight = 0;
            selectInputField.checked = false;

            filterSelectList.removeEventListener('click', onChangeSelectValue);
            filterSelectList.removeEventListener('keydown', onTrapFocus);
            document.removeEventListener('click', onClickOverlay);

          }
        }
      }

      if (evt.target.checked === true) {

        filterSelects.forEach((select) => {
          select.classList.remove('is-show');
        })

        currentSelect.classList.add('is-show');
        filterSelectList.style.maxHeight = `${filterSelectList.scrollHeight}px`;

        selectOptions.forEach((option) => {
          option.disabled = false;
        })

        filterSelectList.addEventListener('click', onChangeSelectValue);
        filterSelectList.addEventListener('keydown', onTrapFocus);
        document.addEventListener('click', onClickOverlay);


      } else {
        currentSelect.classList.remove('is-show');
        filterSelectList.style.maxHeight = 0;
        selectInputField.checked = false;

        selectOptions.forEach((option) => {
          option.disabled = true;
        })

        filterSelectList.removeEventListener('click', onChangeSelectValue);
        filterSelectList.removeEventListener('keydown', onTrapFocus);
        document.removeEventListener('click', onClickOverlay);

      }
    })
  })


}














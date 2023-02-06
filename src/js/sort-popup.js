// import { sortSelectBlock } from './select.js';

const pageBody = document.body;

/**
 * Блок с сортировкой товаров
 */
const sortSelectBlock = document.querySelector('[data-select]');

// Сортировка товаров
if (sortSelectBlock) {

  if (window.matchMedia('screen and (max-width: 768px').matches) {

    /**
    * Попап в мобилке
    */
    const sortPopupMobile = document.querySelector('[data-sort-popup]');
    /**
    * Список вариантов сортировки
    */
    const sortPopupList = sortPopupMobile.querySelector('[data-sort-popup-list]');
    /**
    * Все кнопки
    */
    const sortPopupItems = sortPopupList.querySelectorAll('[data-sort-popup-item]');


    /**
     * Input поле для записи значения выбранного варинта сортировки
     */
    const selectInputField = sortSelectBlock.querySelector('[data-select-input-field]');
    /**
     * Label для записи выбранного варианта сортировки
     */
    const selectBtn = sortSelectBlock.querySelector('[data-select-btn]');

    /* Начальные установки */
    selectInputField.checked = false;

    // Задаем скрытие эл-та в зависимости от кол-ва вариантов сортировки используя переменную - высоты блока
    sortPopupMobile.style.setProperty('--sort-popup-to-bottom', `${-sortPopupMobile.offsetHeight}px`);

    // console.log(sortPopupMobile.offsetHeight);

    /**
     * @description Выбор варианта сортировки и запись значения в поле select
     * @param {HTMLElement} option - кнопка с значением
     * @param {string} optionValue - один из вариантов сортировки
     * @param {Array} optionBtns - все кнопки
     */
    const chooseSelectPopupValue = (option, optionValue, optionBtns) => {
      // Для удобства считывания выбранной пользователем фильтрации - задаем value у input
      selectInputField.value = optionValue;
      // Текстовое значение подставляем в label
      selectBtn.textContent = optionValue;

      // Возвращаем кнопкам disabled и убираем класс (разворачиваем стрелочку)
      optionBtns.forEach((item) => {
        item.classList.remove('is-active');
        item.disabled = true;
      })

      // Убираем подстветку активного эл-та
      option.classList.add('is-active');

      // Убираем общий класс
      sortSelectBlock.classList.remove('is-show');
      // Скрываем список
      sortPopupMobile.classList.remove('is-open');
      pageBody.classList.remove('shadow');
      pageBody.classList.remove('scroll-lock');
      // selectList.style.maxHeight = SELECT_LIST_DEFAULT_HEIGHT;
      // Убираем у checkbox состояние checked
      selectInputField.checked = false;
    }


    const onChangePopupSortValue = (evt) => {

      if (evt.target.matches('[data-sort-popup-item]')) {
        const selectItem = evt.target;
        const selectItemValue = evt.target.textContent;

        console.log(selectItemValue);

        switch (selectItemValue) {
          case 'По полулярности':

            chooseSelectPopupValue(selectItem, selectItemValue, sortPopupItems);
            break

          case 'Сначала дешевле':

            chooseSelectPopupValue(selectItem, selectItemValue, sortPopupItems);
            break

          case 'Сначала дороже':

            chooseSelectPopupValue(selectItem, selectItemValue, sortPopupItems);
            break
        }
      }
    }

    /**
    *   Функция закрытия попапа при клике вне области
    */
    const onOverlayClick = (evt) => {
      const elementsCLickArea = !evt.composedPath().includes(sortPopupMobile);

      if (elementsCLickArea) {
        sortSelectBlock.classList.remove('is-show');
        sortPopupMobile.classList.remove('is-open');
        pageBody.classList.remove('shadow');
        pageBody.classList.remove('scroll-lock');

        // Убираем у checkbox состояние checked
        selectInputField.checked = false;

        // Удалили обработчик на закрытие по клику вне модального окна
        document.removeEventListener('click', onOverlayClick);
        sortPopupList.removeEventListener('click', onChangePopupSortValue);
      }
    }


    selectInputField.addEventListener('change', (evt) => {
      // evt.stopPropagation();

      if (evt.target.checked === true) {
        sortSelectBlock.classList.add('is-show');
        sortPopupMobile.classList.add('is-open');
        pageBody.classList.add('shadow');
        pageBody.classList.add('scroll-lock');

        sortPopupItems.forEach((item) => {
          item.disabled = false;
        })

        // Добавили обработчик на закрытие по клику вне модального окна
        document.addEventListener('click', onOverlayClick);

        sortPopupList.addEventListener('click', onChangePopupSortValue);
      }
    })
  }
}

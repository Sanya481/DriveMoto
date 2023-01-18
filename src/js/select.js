/**
 * Блок с сортировкой товаров
 */
const sortSelectBlock = document.querySelector('[data-select]');

// Сортировка товаров
if (sortSelectBlock) {

  if (window.matchMedia('screen and (min-width: 768px').matches) {


    /* ========================== Общие*/

    /**
     * Input поле для записи значения выбранного варинта сортировки
     */
    const selectInputField = sortSelectBlock.querySelector('[data-select-input-field]');
    /**
     * Label для записи выбранного варианта сортировки
     */
    const selectBtn = sortSelectBlock.querySelector('[data-select-btn]');


    // /* ========================== Для попапа */

    // /**
    //  * Попап в мобилке
    //  */
    // const sortPopupMobile = document.querySelector('[data-sort-popup]');
    // /**
    // * Список вариантов сортировки
    // */
    // const sortPopupList = sortPopupMobile.querySelector('[data-sort-popup-list]');
    // /**
    // * Все кнопки
    // */
    // const sortPopupItems = sortPopupList.querySelectorAll('[data-sort-popup-item]');


    /* ========================== Для списка в десктопе и планшете */

    /**
     * Список вариантов сортировки
     */
    const selectList = sortSelectBlock.querySelector('[data-select-list]');
    /**
     * Все кнопки
     */
    const selectItems = selectList.querySelectorAll('[data-select-item]');

    /**
     * Высота выпадашки по умолчанию
     */
    const SELECT_LIST_DEFAULT_HEIGHT = 0;
    /**
     * Код клавиши Tab
     */
    const KEYCODE_TAB = 9;



    /**
     * @description Ловушка фокуса
     */
    const trapFocus = (evt) => {
      // Элементы списка можно изменять и это может быть не только button
      const focusableEls = selectList.querySelectorAll('button');
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

    /**
     * @description Выбор варианта сортировки и запись значения в поле select
     * @param {HTMLElement} option - кнопка с значением
     * @param {string} optionValue - один из вариантов сортировки
     * @param {Array} optionBtns - все кнопки
     */
    const chooseSelectValue = (option, optionValue, optionBtns) => {
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
      selectList.style.maxHeight = SELECT_LIST_DEFAULT_HEIGHT;
      // Убираем у checkbox состояние checked
      selectInputField.checked = false;
    }

    /**
     * @description Изменение значения у select
     */
    const changeSelectValue = (evt) => {
      if (evt.target.matches('[data-select-item]')) {
        const selectItem = evt.target;
        const selectItemValue = evt.target.textContent;

        switch (selectItemValue) {
          case 'По полулярности':

            chooseSelectValue(selectItem, selectItemValue, selectItems);
            break

          case 'Сначала дешевле':

            chooseSelectValue(selectItem, selectItemValue, selectItems);
            break

          case 'Сначала дороже':

            chooseSelectValue(selectItem, selectItemValue, selectItems);
            break
        }
      }
    }

    // /**
    //  *   Функция закрытия попапа при клике вне области
    //  */
    // const onOverlayClick = (evt) => {
    //   const elementsCLickArea = !evt.composedPath().includes(sortPopupMobile);

    //   if (elementsCLickArea) {
    //     sortSelectBlock.classList.remove('is-show');
    //     sortPopupMobile.classList.remove('is-open');
    //     pageBody.classList.remove('shadow');
    //     pageBody.classList.remove('scroll-lock');

    //     // Убираем у checkbox состояние checked
    //     selectInputField.checked = false;

    //     // Добавили обработчик на закрытие по клику вне модального окна
    //     document.removeEventListener('click', onOverlayClick);
    //   }
    // }

    selectInputField.addEventListener('change', (evt) => {


      switch (evt.target.checked) {
        case true:

          // /* Функционал только для мобилки */
          // if (window.matchMedia('screen and (max-width: 767px)').matches) {
          //   sortSelectBlock.classList.add('is-show');
          //   sortPopupMobile.classList.add('is-open');
          //   pageBody.classList.add('shadow');
          //   pageBody.classList.add('scroll-lock');

          //   // Добавили обработчик на закрытие по клику вне модального окна
          //   document.addEventListener('click', onOverlayClick);
          //   sortPopupList.addEventListener('click', onChangePopupSortValue);
          // }

          /* Функционал только для планшете и десктопа */
          if (window.matchMedia('screen and (min-width: 768px)').matches) {

            sortSelectBlock.classList.add('is-show');
            selectList.style.maxHeight = `${selectList.scrollHeight}px`;

            selectItems.forEach((item) => {
              item.disabled = false;
            })

            // !!!! Один обработчик на открытие списка и на выбор значения - не работает !!!!
            selectList.addEventListener('click', changeSelectValue);

            selectList.addEventListener('keydown', trapFocus);
          }

          break

        case false:

          // // Функционал только для мобилки
          // if (window.matchMedia('screen and (max-width: 767px)').matches) {

          //   if (sortSelectBlock.classList.contains('is-show')) {
          //     sortSelectBlock.classList.remove('is-show');
          //     sortPopupMobile.classList.remove('is-open');
          //     pageBody.classList.remove('shadow');
          //     pageBody.classList.remove('scroll-lock');

          //   }
          // }


          /* Функционал только для планшете и десктопа */
          if (window.matchMedia('screen and (min-width: 768px)').matches) {

            if (sortSelectBlock.classList.contains('is-show')) {
              sortSelectBlock.classList.remove('is-show');
              selectList.style.maxHeight = SELECT_LIST_DEFAULT_HEIGHT;

              selectItems.forEach((item) => {
                item.disabled = true;
              })

              selectList.removeEventListener('click', changeSelectValue);
              selectList.removeEventListener('keydown', trapFocus);

            }
          }

          break

      }
    })
  }
}




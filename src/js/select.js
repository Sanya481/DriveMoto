// Блок с сортировкой товаров
const sortSelectBlock = document.querySelector('[data-select]');

// Сортировка товаров
if (sortSelectBlock) {
  /**
   * Input поле для записи значения выбранного варинта сортировки
   */
  const selectInputField = sortSelectBlock.querySelector('[data-select-input-field]');
  /**
   * Список вариантов сортировки
   */
  const selectList = sortSelectBlock.querySelector('[data-select-list]');
  /**
   * Все кнопки
   */
  const selectItems = selectList.querySelectorAll('[data-select-item]');
  /**
   * Label для записи выбранного варианта сортировки
   */
  const selectBtn = sortSelectBlock.querySelector('[data-select-btn]');

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
   */
  const chooseSelectValue = (option, optionValue) => {
    // Для удобства считывания выбранной пользователем фильтрации - задаем value у input
    selectInputField.value = optionValue;
    // Текстовое значение подставляем в label
    selectBtn.textContent = optionValue;

    // Возвращаем кнопкам disabled и убираем класс (разворачиваем стрелочку)
    selectItems.forEach((item) => {
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

          chooseSelectValue(selectItem, selectItemValue);
          break

        case 'Сначала дешевле':

          chooseSelectValue(selectItem, selectItemValue);
          break

        case 'Сначала дороже':

          chooseSelectValue(selectItem, selectItemValue);
          break
      }
    }
  }

  selectInputField.addEventListener('change', (evt) => {

    switch (evt.target.checked) {
      case true:

        sortSelectBlock.classList.add('is-show');
        selectList.style.maxHeight = `${selectList.scrollHeight}px`;

        selectItems.forEach((item) => {
          item.disabled = false;
        })

        // !!!! Один обработчик на открытие списка и на выбор значения - не работает !!!!
        selectList.addEventListener('click', changeSelectValue);

        selectList.addEventListener('keydown', trapFocus);

        break

      case false:

        if (sortSelectBlock.classList.contains('is-show')) {
          sortSelectBlock.classList.remove('is-show');
          selectList.style.maxHeight = SELECT_LIST_DEFAULT_HEIGHT;

          selectItems.forEach((item) => {
            item.disabled = true;
          })

          selectList.removeEventListener('click', changeSelectValue);
          selectList.removeEventListener('keydown', trapFocus);

        }

        break

    }
  })
}

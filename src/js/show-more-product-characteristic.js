// Кнопка для навешиавания обработчика
const showMoreProductCharacteristicBtn = document.querySelector('[data-show-more-product-characteristic]');

/**
 * @description Переход к блоку с информацией о товаре в карточке товара
 */
const onShowMoreProductCharacteristic = (evt) => {
  if (evt.currentTarget.matches('[data-show-more-product-characteristic]')) {

    // Секция с табами
    const productDataSection = document.querySelector('[data-product-data]');
    // Секция с кнопками переключения табов
    const productDataTubList = productDataSection.querySelector('[data-product-data-tub-list]');

    // Кнопки переключения табов
    const productDataTubBtns = Array.from(productDataTubList.querySelectorAll('[data-tab-btn]'));
    // Контент табов
    const productDataTubContent = Array.from(productDataSection.querySelectorAll('[data-tab-content]'));

    // Значение по которому ищем
    const characteristicTabBtn = 'characteristic'

    /* Метод findIndex() возвращает индекс первого найденного в массиве элемента, который подходит под условие переданной функции. Если же ни одного подходящего элемента не найдётся, то метод вернёт -1. */

    // Индекс кнопки переключения табов
    const indexTabBtn = productDataTubBtns.findIndex(
      (btn) => btn.dataset.tabBtn === characteristicTabBtn)

    productDataTubBtns.forEach((tubBtn) => {
      tubBtn.classList.remove('is-active');

      if (tubBtn.dataset.tabBtn === characteristicTabBtn) {
        tubBtn.classList.add('is-active');
      }
    })

    productDataTubContent.forEach((tubContent) => {
      tubContent.classList.remove('is-active')
    })

    // ПРоверка на нахождение элемента в массиве
    if (indexTabBtn !== -1) {
      productDataTubContent[indexTabBtn].classList.add('is-active')
    }
  }
}

if (showMoreProductCharacteristicBtn) {
  showMoreProductCharacteristicBtn.addEventListener('click', onShowMoreProductCharacteristic)
}

  // Отслеживаем клик по кнопке
  // Находим все табы и убираем активный класс у всех
  // Нужному добавляем активный класс и считываем его индекс
  // Считываем все контенты табов и убираем у них активный класс
  // По индексу таба ищем контент таба и добавляем ему активный класс

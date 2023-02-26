// Массив выдуманных данных
const PRODUCT_FILTER_COUNTRIES = [
  'Росиия',
  'Германия',
  'Китай',
  'CША',
  'Индия',
  'Бразилия',
  'Франция',
  'Корея',
  'Африка',
  'Италия',
  'Турция',
]

const PRODUCT_FILTER_MODELS = [
  "SeaDoo Spark 2",
  "SeaDoo Spark 90",
  "SeaDoo GTI 155",
  "SeaDoo GTR 230",
  "BRP SeaDoo GTI 130hp",
  "BRP SeaDoo GTX 300hp",
  "SeaDoo Spark 60hp",
  "Spark 5-UP 1000",
  "BRP SeaDoo WAKE 230hp PRO",
  "Spark GTS 90hp Rental",
  "Spark 2-UP 900",
  "Sea-doo 9-UP 900",
  "Sea-doo 3-UP 666",
  "RXP-XRS 300",
  "RXP-XRS 355",
  "Wake Pro 230",
  "FishPro Scout",
  "Spark 3UP 90 Trixx IBR",
  "Spark 3UP 900 HO IBR Trixx",
  "Fish Pro Trophy",
]

const PRODUCT_FILTER_BRAND = [
  "Yamaha",
  "Sea-Doo",
  "Seabob",
  "Kawasaki",
  "Bombardier",
  "Castoldi",
  "Lampuga",
  "Polaris",
  "Hison",
  "Jetlev-Flyer",
  "Narke",
  "Two Oceans",
  "RFU Jachtspecialist",
  "Latrex Boats",
]

// Взяли массив с данными
// Скопировали его
// Заполнили шаблон и отрисовали на странице первые 4 эл-та
// В копии массива осталось на 4 эл-та меньше

/*  При клике по кнопке - показать ещё - добавляем оставшиеся в копии массива эл-ты и массив становится пустым - потому что splice */
/*  При клике по кнопке - свернуть - получаем эл-ты , которые на странице и копируем их в новый массив для удаления со страницы */
// Снова копируем массив исходных данных для дальнейшего повторения действий

const pageCatalog = document.querySelector('[data-page-catalog]');

// const filterGroups = Array.from(document.querySelectorAll('[data-filter-group]'));

const COUNTRY_FILTER_GROUP = 'country';
const MODEL_FILTER_GROUP = 'model';
const BRAND_FILTER_GROUP = 'brand';


/**
   * @description Отрисовка фильтра по странам на странице
   * @param {Array} filterItems - массив с данными
   * @param {HTMLElement} wrapperBlock - блок в который вставляем эл-ты
   * @returns
   */
const renderFilterItems = (filterItems, wrapperBlock) => {
  if (!filterItems.length) {
    return
  }

  const filterCountryItemTemplate = document.querySelector('#product-filter-item')
    .content.querySelector('[data-filter-group-item]');

  const filterItemFragment = document.createDocumentFragment();

  filterItems.forEach((item) => {

    const filterItem = filterCountryItemTemplate.cloneNode(true);

    const filterItemInput = filterItem.querySelector('input');
    const filterItemLabel = filterItem.querySelector('label');


    if (item.engName) {
      filterItemInput.id = `${item.engName}-country`;
      filterItemInput.name = item.engName;

      filterItemLabel.setAttribute('for', `${item.engName}-country`);
    } else {
      filterItemInput.name = item;

      filterItemInput.id = item.split(' ').join('');
      filterItemLabel.setAttribute('for', item.split(' ').join(''));
    }

    if (item.rusName) {
      filterItemLabel.textContent = item.rusName;
    } else {
      filterItemLabel.textContent = item;
    }

    filterItemFragment.append(filterItem);
  })

  wrapperBlock.append(filterItemFragment);
}


/**
 * @description Отрисовка элементов конкретного фильтра товаров, показать/скрыть товары
 * @param {HTMLElement} filterGroupTitle - блок с конкретным фильтром, который хотим обработать (значение атрибута)
 * @param {Array} filterItems - массив с исходными данными
 */
const changeViewFilterItems = (filterGroupTitle, filterItems) => {
  // Все фильтры на странице каталога
  const filterGroups = Array.from(document.querySelectorAll('[data-filter-group]'));
  // Ищем нужный нам фильтр
  const filterGroupCountry = filterGroups.find(group => group.dataset.filterGroup === filterGroupTitle);
  // Блок для изменения высоты при добавлении/удалении элементов
  const filterGroupWrapper = filterGroupCountry.querySelector('[data-filter-group-wrapper]');
  // Блок куда вставлять элементы фильтра
  const filterGroupList = filterGroupCountry.querySelector('[data-filter-group-list]');

  // Кнопка - показать ещё
  const showMoreFilterItemBtn = filterGroupCountry.querySelector('[data-show-more-filter-item]')
  // Кнопка - скрыть
  const hideMoreFilterItemBtn = filterGroupCountry.querySelector('[data-hide-more-filter-item]')

  // Количество показываемых эл-тов при загрузке страницы
  const FILTER_ITEM_VISIBLE = 4;

  // Копия исходного массива
  let copyArray = [];
  copyArray = filterItems.slice();

  // Если эл-тов в массиве меньше 4, убираем кнопку
  if (filterItems.length <= FILTER_ITEM_VISIBLE) {
    showMoreFilterItemBtn.classList.add('hidden');
  }


  // Сразу при загрузке страницы отрисовываем первые 4
  renderFilterItems(copyArray.splice(0, FILTER_ITEM_VISIBLE), filterGroupList);

  /**
   * @description Изменение состояния кнопок и высоты блока
   */
  const chahgeStatusBtns = (showBtn, hideBtn) => {
    showBtn.style.display = 'none';
    hideBtn.style.display = 'block';
    filterGroupWrapper.style.maxHeight = `${filterGroupWrapper.scrollHeight}px`;
  }

  /**
   * @description Добавление оставшихся в копии массива эл-ов, (сразу всех), (после первой отрисовки при загрузке страницы)
   */
  const onShowMoreFilterItems = () => {
    renderFilterItems(copyArray.splice(0, copyArray.length), filterGroupList);

    chahgeStatusBtns(showMoreFilterItemBtn, hideMoreFilterItemBtn);
  }

  /**
   * @description Скрытие элементов массива до 4 эл-тов
   */
  const onHideMoreFilterItems = () => {
    // Нашли отрисованные эл-ты на странице
    const filterGroupItems = Array.from(filterGroupList.querySelectorAll('[data-filter-group-item]'));

    // Взяли эл-ты которые нужно удалить/скрыть
    const copyArrayItems = filterGroupItems.splice(FILTER_ITEM_VISIBLE, filterGroupItems.length);
    copyArrayItems.forEach((item) => {
      item.remove();
    })

    chahgeStatusBtns(hideMoreFilterItemBtn, showMoreFilterItemBtn);

    // Т.к. массив пустой, добавили эл-ты
    copyArray = filterItems.slice().splice(FILTER_ITEM_VISIBLE, filterItems.length);
  }

  showMoreFilterItemBtn.addEventListener('click', onShowMoreFilterItems);
  hideMoreFilterItemBtn.addEventListener('click', onHideMoreFilterItems);
}


if (pageCatalog) {
  // Фильтр по странам
  changeViewFilterItems(COUNTRY_FILTER_GROUP, PRODUCT_FILTER_COUNTRIES);
  // Фильтр по моделям
  changeViewFilterItems(MODEL_FILTER_GROUP, PRODUCT_FILTER_MODELS);
  // Фильтр по брендам
  changeViewFilterItems(BRAND_FILTER_GROUP, PRODUCT_FILTER_BRAND);
}


/* Решение должно удалить из строки все символы новой строки, символы табуляции, пробелы или любые другие пробельные символы. */
// https://www.techiedelight.com/ru/remove-whitespaces-string-javascript/

// 1 Вариант
/* const str = '   Hello World   ';
console.log(str.replace(/ /g,''));

результат: HelloWorld
*/

// 2 Вариант
/* const str = '   Hello World   ';
console.log(str.split(' ').join(''));

результат: HelloWorld
*/

// 3 Вариант
/*
const str = '   Hello World   ';
console.log(str.split(/\s+/).join(''));

результат: HelloWorld
*/

// 4 Вариант
/*
const str = '   Hello World   ';
console.log(str.replace(/\s/g,''));

результат: HelloWorld
*/

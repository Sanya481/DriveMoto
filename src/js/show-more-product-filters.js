// Массив выдуманных данных
const PRODUCT_FILTER_COUNTRIES = [
  {
    rusName: 'Росиия',
    engName: 'russia'
  },
  {
    rusName: 'Германия',
    engName: 'germany'
  },
  {
    rusName: 'Китай',
    engName: 'china'
  },
  {
    rusName: 'CША',
    engName: 'usa'
  },
  {
    rusName: 'Индия',
    engName: 'india'
  },
  {
    rusName: 'Бразилия',
    engName: 'brazil'
  },
  {
    rusName: 'Франция',
    engName: 'france'
  },
  {
    rusName: 'Корея',
    engName: 'korea'
  },
  {
    rusName: 'Африка',
    engName: 'africa'
  },
  {
    rusName: 'Италия',
    engName: 'italy'
  },
  {
    rusName: 'Турция',
    engName: 'turkey'
  },
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

/**
   * @description Отрисовка фильтра по странам на странице
   * @param {Array} countries - массив с данными
   * @param {HTMLElement} wrapperBlock - блок в который вставляем эл-ты
   * @returns
   */
const renderFilterCountryItem = (countries, wrapperBlock) => {
  if (!countries.length) {
    return
  }

  const filterCountryItemTemplate = document.querySelector('#product-filter-country-item')
    .content.querySelector('[data-filter-group-item]');

  const filterItemFragment = document.createDocumentFragment();

  countries.forEach((country) => {

    const filterItem = filterCountryItemTemplate.cloneNode(true);

    const filterItemInput = filterItem.querySelector('input');
    filterItemInput.id = `${country.engName}-country`;
    filterItemInput.name = country.engName;

    const filterItemLabel = filterItem.querySelector('label');
    filterItemLabel.setAttribute('for', `${country.engName}-country`);
    filterItemLabel.textContent = country.rusName;

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
  renderFilterCountryItem(copyArray.splice(0, FILTER_ITEM_VISIBLE), filterGroupList);

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
    renderFilterCountryItem(copyArray.splice(0, copyArray.length), filterGroupList);

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
  changeViewFilterItems(COUNTRY_FILTER_GROUP, PRODUCT_FILTER_COUNTRIES);
}

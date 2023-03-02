import { onOpenNotificationGoodAvailability } from "./good-availability-modal.js";
import { mockJetSkiData, getProducts, checkSimilarGoodsInBasket, checkSimilarGoodsInFavourite } from "./util.js";
import { keyNameProductsInBasket } from "./rendering-goods-to-basket.js";
import { keyNameProductsInFavourite } from "./rendering-goods-to-favourite.js";
import { sortGoodsCheapFirst, sortGoodsExpensiveFirst, sortGoodsRating } from "./select.js";

// Секция каталога товаров (когда отрисовывать)
const pageCatalog = document.querySelector('[data-page-catalog]');

/**
 * Текущая страница
 */
let currentPage = 1;
/**
 * Сколько элементов показывать
 */
let elementsToShow = 9;


/**
 * @description Отрисовываем товары на странице каталога
 * @param {Array} products - массив с товарами и их данными
 * @param {number} countGoodsToRender - Сколько элементов показывать за раз
 * @param {number} page - Текущая страница
 */
const renderGoodsToCatalog = (products, countGoodsToRender, page) => {
  // Секция куда отрисовываем товары
  const popularGoodsList = document.querySelector('[data-popular-goods-list]');

  // При отрисовке товаров сначала оцищаем список товаров
  popularGoodsList.innerHTML = " ";

  // Уменьшаем до нуля т.к. отсчет в массиве идет с 0
  page--;
  // С какого эл-та копируем
  let startItemsToShow = countGoodsToRender * page;
  // До какого эл-та копируем массив
  let endItemsToShow = startItemsToShow + countGoodsToRender;
  // Скопировали массив для отрисовки
  // Метод slice() возвращает новый массив, содержащий копию части исходного массива.
  const goodsData = products.slice(startItemsToShow, endItemsToShow);

  if (popularGoodsList) {
    // Копируем шаблон и все его содержимое
    const catalogGoodTemplate = document.querySelector('#catalog-good')
      .content.querySelector('[data-product]');

    // Коробка для складирования товаров отрисованных
    const catalogGoodsFragment = document.createDocumentFragment();

    // Достали данные из локального хранилища по избранному товару
    const favouritesStore = getProducts(keyNameProductsInFavourite);

    // Товары в корзине
    const basketStore = getProducts(keyNameProductsInBasket);

    goodsData.forEach(good => {
      // Скопировали содержимое шаблона
      const goodItem = catalogGoodTemplate.cloneNode(true);

      const catalogGoodTitle = goodItem.querySelector('[data-good-title]');
      const catalogGoodPrice = goodItem.querySelector('[data-good-price]');
      const catalogGoodImageBlock = goodItem.querySelector('[data-good-image-block]');

      // Заполняем шаблон контентом
      goodItem.dataset.product = good.id;

      // // Работа с товарами из избранного
      // // =================
      // Один и тот же товар, в корзине, избранном и каталоге
      checkSimilarGoodsInFavourite(favouritesStore, goodItem, good);

      // // Работа с товарами из корзины
      // // =================
      // Один и тот же товар, в корзине, избранном и каталоге
      checkSimilarGoodsInBasket(basketStore, goodItem, good);

      catalogGoodTitle.textContent = good.title;
      // Для пробелов между цифрами используем метод toLocaleString
      // Преобразовали число в строку с пробелами между цифр
      catalogGoodPrice.textContent = good.price.toLocaleString();
      catalogGoodImageBlock.querySelector('img').src = `img/jet-ski/${good.url}.jpg`;
      catalogGoodImageBlock.querySelector('img').srcset = `img/jet-ski/${good.url}@2x.jpg 2x`;
      catalogGoodImageBlock.querySelector('source').srcset = `img/jet-ski/${good.url}.webp, img/jet-ski/${good.url}@2x.webp 2x`;
      catalogGoodImageBlock.querySelector('img').alt = good.title;

      // Если товар акционный
      if (!good.sale === false) {
        goodItem.classList.add('sale-pointer');
      }

      // Если товара нет в наличии
      // По логике, если товара нет в наличии, то мы его и не можем добавить в корзину
      if (!good.availability === true) {
        goodItem.classList.add('not-available');

        // Кнопка уведомления о наличии товара
        const notificationGoodAvailability = goodItem.querySelector('[data-notification-good-availability]');
        // Вешаем обработчик клика.
        // Показ - уведомления о наличии товара
        notificationGoodAvailability.addEventListener('click', onOpenNotificationGoodAvailability);
      } else {
        // Кнопка добавления товара в корзину
        // const productToBasketBtn = goodItem.querySelector('[data-product-to-basket]');

        // Вешаем обработчик клика.
        // Добавление товара в корзину
        // productToBasketBtn.addEventListener('click', onAddProductToBasket);
      }

      // Добавили в коробку товары
      catalogGoodsFragment.append(goodItem);
    });

    // Отрисовали на странице
    popularGoodsList.append(catalogGoodsFragment);
  }
}

/**
 * @description
 * @param {Array} products - массив с исходными данными
 * @param {number} countGoodsToRender - Сколько элементов показывать за раз
 */
const renderPagination = (products, countGoodsToRender) => {
  // Куда отрисовываем
  const paginationList = document.querySelector('[data-catalog-pagination-list]');

  // Метод Math.ceil() - округление вверх.
  // Округляет аргумент до ближайшего большего целого.
  // Находим кол-во кнопок пагинации, которое нужно отрисовать
  const quantityPaginationItem = Math.ceil(products.length / countGoodsToRender);

  for (let i = 0; i < quantityPaginationItem; i++) {

    // Начинаем отсчет с 1, а не с 0
    let pageNumber = i + 1;

    const liEl = document.createElement('li');
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.textContent = pageNumber;

    if (currentPage === pageNumber) {
      btn.classList.add('is-active');
      btn.disabled = true;
    }

    // Навесили обработчик на каждую кноку
    btn.addEventListener('click', () => {
      // Передали
      currentPage = pageNumber;

      // У всех кнопок удяляем класс
      const paginationItems = paginationList.querySelectorAll('button');
      paginationItems.forEach((btn) => {
        btn.classList.remove('is-active');
        btn.disabled = false;
      })

      // Кнопке по которой кликнули добавляем класс
      btn.classList.add('is-active')
      btn.disabled = true;

      const sortSelectBlock = document.querySelector('[data-sort-select]');
      const sortSelectItems = Array.from(sortSelectBlock.querySelectorAll('[data-sort-select-item]'))

      // Нашли ту сортировку по которой пользователь кликнул
      const SelectedTypeOfSort = sortSelectItems.find(item => item.classList.contains('is-active'))

      // И в зависимости от типа сортировки
      // Сначала сортируем , потом отрисовываем
      switch (SelectedTypeOfSort.dataset.sortSelectItem) {
        case 'По полулярности':
          renderGoodsToCatalog(mockJetSkiData, elementsToShow, currentPage);
          break
        case 'Сначала дешевле':
          const CheapGoodsArr = sortGoodsCheapFirst(mockJetSkiData);
          renderGoodsToCatalog(CheapGoodsArr, elementsToShow, currentPage);
          break
        case 'Сначала дороже':
          const expensiveGoodsArr = sortGoodsExpensiveFirst(mockJetSkiData);
          renderGoodsToCatalog(expensiveGoodsArr, elementsToShow, currentPage);
          break
        case 'Высокий рейтинг':
          const highRatingGoodsArr = sortGoodsRating(mockJetSkiData);
          renderGoodsToCatalog(highRatingGoodsArr, elementsToShow, currentPage)
          break
      }
    })

    liEl.append(btn);
    paginationList.append(liEl);
  }
}

if (pageCatalog) {

  renderPagination(mockJetSkiData, elementsToShow);
  renderGoodsToCatalog(mockJetSkiData, elementsToShow, currentPage);
}

export { renderGoodsToCatalog, currentPage, elementsToShow }



// Пагинация
// https://www.youtube.com/watch?v=cMw9x0BP_xk

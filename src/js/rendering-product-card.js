import { mockJetSkiData, getProducts, putProducts, checkQuantityGoods } from "./util.js";
import { keyNameProductsInFavourite } from "./rendering-goods-to-favourite.js"

// data-product-card-page - в main атрибут, чтобы отрисовывать когда мы на странице карточки товара
const productCardPage = document.querySelector('[data-product-card-page]')

// Блок с отрисовкой кол-ва товаров в избранном
const countGoodsInFavourite = document.querySelector('[data-count-goods-in-favourites]');

const ADD_GOOD_TO_FAVOURITE = "Добавить в избранное";
const REMOVE_GOOD_FROM_FAVOURITE = "Удалить из избранного";

/**
 * Ключ в localStorage по которому хранится товар, который нужно отрисовать в карточке товара
 */
const keyNameGoodInProductCard = 'goodInProductCard';


/**
 * @description Меняем текст подсказки у иконки сердца
 * @param {string} hintText - строка
 */
const changeHintContent = (btn, hintText) => {
  const productCardIconItem = btn.closest('[data-product-card-icon]');
  const productCardIconHint = productCardIconItem.querySelector('[data-product-card-icon-hint]');
  productCardIconHint.querySelector('p').textContent = hintText;
}

/**
 * @description Меняем состояние сердечка и добавляем/удаляем товары из localStorage
 */
const onChangeFavoriteProducts = (evt) => {
  // Кнопка по которой кликнули
  const productToFavouriteBtn = evt.currentTarget;
  // Идентификатор товара
  const goodId = productToFavouriteBtn.closest('[data-product-card]').dataset.productCard;

  if (productToFavouriteBtn.classList.contains('is-favourite')) {
    productToFavouriteBtn.classList.remove('is-favourite')

    // Меняем текст подсказки
    changeHintContent(productToFavouriteBtn, ADD_GOOD_TO_FAVOURITE);
  } else {
    productToFavouriteBtn.classList.add('is-favourite')

    // Меняем текст подсказки
    changeHintContent(productToFavouriteBtn, REMOVE_GOOD_FROM_FAVOURITE);
  }

  putProducts(goodId, keyNameProductsInFavourite);

  // Количество товаров в избранном при загрузке/обновлении страницы
  const amountGoodsInFavourite = getProducts(keyNameProductsInFavourite);

  // Подсчет кол-ва товаров в избранном
  checkQuantityGoods(amountGoodsInFavourite, countGoodsInFavourite)
}

/**
 * @description Заполненяем данными шаблон карточки товара и отрисовываем его на странице
 * @param {Object} selectedGood - Товар по которому кликнул пользователь в каталоге товаров
 */
const fillProductCardData = (selectedGood) => {

  // Секция куда отрисовываем товары
  const productCardBlock = document.querySelector('[data-product-card-wrapper]');

  // Хлебная крошка
  const activeBreadcrumbsLink = document.querySelector('[data-active-breadcrumbs-link]');

  // Копируем шаблон и все его содержимое
  const goodCardTemplate = document.querySelector('#product-card')
    .content.querySelector('[data-product-card]');

  // Скопировали содержимое шаблона
  const productCardData = goodCardTemplate.cloneNode(true);

  // Заполняем шаблон контентом
  productCardData.dataset.productCard = selectedGood.id;
  productCardData.querySelector('[data-product-card-title]').textContent = selectedGood.title;
  productCardData.querySelector('[data-product-card-new-price]').textContent = selectedGood.price.toLocaleString();
  productCardData.querySelector('[data-product-card-code]').textContent = selectedGood.productCode;
  productCardData.querySelector('[data-product-card-img]').querySelector('img').src = `img/product-card/${selectedGood.url}.jpg`;
  productCardData.querySelector('[data-product-card-img]').querySelector('img').srcset = `img/product-card/${selectedGood.url}@2x.jpg 2x`;
  productCardData.querySelector('[data-product-card-img]').querySelector('source').srcset = `img/product-card/${selectedGood.url}.webp, img/jet-ski/${selectedGood.url}@2x.webp 2x`;
  productCardData.querySelector('[data-product-card-img]').querySelector('img').alt = selectedGood.title;
  productCardData.querySelector('[data-product-card-manufacturer]').textContent = selectedGood.manufacturer;
  productCardData.querySelector('[data-product-card-numberOfSeats]').textContent = selectedGood.numberOfSeats;
  productCardData.querySelector('[data-product-card-power]').textContent = selectedGood.power;
  productCardData.querySelector('[data-product-card-engineType]').textContent = selectedGood.engineType;
  productCardData.querySelector('[data-product-card-yearOfRelease]').textContent = selectedGood.yearOfRelease;

  // Хлебная крошка
  activeBreadcrumbsLink.textContent = selectedGood.title;

  // Добавление обработчика на добавление/удаление товара из избранного
  const productCardToFavouriteBtn = productCardData.querySelector('[data-product-card-to-favourite]');
  productCardToFavouriteBtn.addEventListener('click', onChangeFavoriteProducts);

  // Если товар акционный
  if (selectedGood.sale !== false) {
    productCardData.querySelector('[data-product-card-img-wrapper]').classList.add('sale-pointer');
  }

  // Если у товара есть старая цена
  if (selectedGood.oldPrice) {
    productCardData.querySelector('[data-product-card-old-price]').querySelector('p').textContent = selectedGood.oldPrice.toLocaleString();
  } else {
    productCardData.querySelector('[data-product-card-old-price]').style.display = 'none';
  }

  // Работа с товарами из избранного
  // =================
  const favouriteStore = getProducts(keyNameProductsInFavourite);

  if (favouriteStore.length !== 0) {
    if (favouriteStore.find(good => good === selectedGood.id)) {
      // Меняем текст подсказки
      const productCardIconItem = productCardToFavouriteBtn.closest('[data-product-card-icon]');
      const productCardIconHint = productCardIconItem.querySelector('[data-product-card-icon-hint]');
      productCardIconHint.querySelector('p').textContent = "Удалить из избранного";

      // Красим сердечко
      productCardToFavouriteBtn.classList.add('is-favourite');
    }
  }

  // Отрисовали на странице
  productCardBlock.append(productCardData)
}

/**
 * @description Отрисовка карточки товара
 * @param {Array} goods - массив с исходными данными
 * @param {string} goodId - id товара, который нужно отрисовать(по которому кликнул пользователь)
 */
const renderProductCard = (goods) => {
  // Получили id товара
  const goodId = localStorage.getItem('goodInProductCard');

  // Товар по которому кликнул пользователь в каталоге товаров
  const selectedGoodData = goods.find(good => good.id === goodId);

  // Отрисовали
  fillProductCardData(selectedGoodData);
}

/**
 * @description Отлавливаем клик на товаре, берем его id и записываем в localStorage
 */
const onSelecteProductInCatalog = (evt) => {
  if (evt.target.matches('[data-product-link]')) {
    // Товар по которому кликнули в каталоге
    const selectedGood = evt.target.closest('[data-product]');
    // Его id
    const selectedGoodId = selectedGood.dataset.product;

    // Записали в localStorage
    localStorage.setItem(keyNameGoodInProductCard, selectedGoodId)
  }
}

// Обработчик клика по карточке товара
document.addEventListener('click', onSelecteProductInCatalog);

// Отрисовываем только, если на странице - карточка товара
if (productCardPage) {
  renderProductCard(mockJetSkiData)
}


// Отслеживаем клик по товару
// Считываем его уникальный идентификатор - (data-product="jetSki-1") - jetSki-1
// Записываем идентификатор в localStorage

// Достаем из localStorage идентификатор
// Ищем по идентификатору данные о товаре в массиве общих данных о товарах (mockJetSkiData)
// Заполняем шаблон данными
// Отрисовываем на странице карточки товара

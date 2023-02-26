import { mockJetSkiData, getProducts, putProducts, checkQuantityGoods, changeEmptyBlockVisibility } from "./util.js";

// Секция куда отрисовываем товары
const goodsListInBasket = document.querySelector('[data-basket-list]');
// Блок с отрисовкой кол-ва товаров в корзине
const countGoodsInBasket = document.querySelector('[data-count-goods-in-basket]');
// Блок с отображением состояния корзины пустая/полная
const basketWithoutGoods = document.querySelector('[data-basket-without-goods]');

// Ключ в localStorage по которому хранятся товары добавленные в корзину
const keyNameProductsInBasket = 'productsInBasket';

// Количество товаров в корзине при загрузке/обновлении страницы
const amountGoodsInBasket = getProducts(keyNameProductsInBasket);

if (basketWithoutGoods) {
  changeEmptyBlockVisibility(amountGoodsInBasket, basketWithoutGoods)
}

// Записываем кол-во товара
checkQuantityGoods(amountGoodsInBasket, countGoodsInBasket);


/**
* Добавление товара в корзину
*/
const onAddProductToBasket = (evt) => {
  // Проверка, кликнул ли пользователь по кнопке - 'добавить товар в корзину'
  if (evt.target.hasAttribute('data-product-to-basket')) {

    // Выбранный товар
    const selectedGood = evt.target.closest('[data-product]');

    // Информация по выбранному товару
    const goodInfo = {
      id: selectedGood.dataset.product,
      title: selectedGood.querySelector('[data-good-title]').textContent,
      url: selectedGood.querySelector('[data-good-image-block]').querySelector('img').src,
      price: selectedGood.querySelector('[data-good-price]').textContent,
      sale: selectedGood.classList.contains('sale-pointer'),
      // availability: selectedGood.classList.contains('not-available'),
    }

    const result = putProducts(goodInfo.id, keyNameProductsInBasket);
    let quantityGoods = result.products;


    if (result.pushProduct === true) {
      evt.target.classList.add('is-basket');
    } else {
      evt.target.classList.remove('is-basket');
    }



    checkQuantityGoods(quantityGoods, countGoodsInBasket)
  }
}

/**
 * @description Отрисовываем выбранные пользователем товары в корзине
 * @param {Array} products - массив с товарами и их данными
 */
const renderGoodsToBasket = (products) => {

  // Получаем данные из localStorage с id товарами, которые нужно отрисовать на странице
  const basketStore = getProducts(keyNameProductsInBasket);

  // Достали данные из локального хранилища по избранному товару
  const favouritesStore = getProducts('productsInFavourite');

  if (goodsListInBasket) {

    // Общая сумма товаров в корзине
    const goodsSumPriceInBasket = document.querySelector('[data-goods-sum-price]');
    let sumGoodsInBasket = 0;


    // Копируем шаблон и все его содержимое
    const basketGoodTemplate = document.querySelector('#catalog-good')
      .content.querySelector('[data-product]');

    // Коробка для складирования товаров отрисованных
    const basketGoodsFragment = document.createDocumentFragment();

    products.forEach(good => {
      // Скопировали содержимое шаблона
      const basketGoodItem = basketGoodTemplate.cloneNode(true);

      // Если id в массиве из localStorage совпадают с товарами из рандомных данных , то отрисовываем
      if (basketStore.find(goodInBasket => goodInBasket === good.id)) {

        const basketGoodTitle = basketGoodItem.querySelector('[data-good-title]');
        const basketGoodPrice = basketGoodItem.querySelector('[data-good-price]');
        const basketGoodImageBlock = basketGoodItem.querySelector('[data-good-image-block]');

        // Заполнили шаблон контентом
        basketGoodItem.dataset.product = good.id;

        // Работа с товарами из избранного
        // =================
        // Один и тот же товар, в корзин, избранном и каталоге
        let selectedFavouriteGoods;

        // Если в localStorage есть избранные товары
        if (favouritesStore.length !== 0) {
          selectedFavouriteGoods = favouritesStore.find(element => element === good.id)
        }

        // Вешаем класс лишь тем товарам, которые есть в избранном
        if (selectedFavouriteGoods !== undefined) {

          if (selectedFavouriteGoods === basketGoodItem.dataset.product) {
            basketGoodItem.querySelector('[data-product-to-favourites]').classList.add('is-favourite')
          }
        }

        basketGoodTitle.textContent = good.title;
        basketGoodPrice.textContent = good.price.toLocaleString();
        basketGoodImageBlock.querySelector('img').src = `img/jet-ski/${good.url}.jpg`;
        basketGoodImageBlock.querySelector('img').srcset = `img/jet-ski/${good.url}@2x.jpg 2x`;
        basketGoodImageBlock.querySelector('source').srcset = `img/jet-ski/${good.url}.webp, img/jet-ski/${good.url}@2x.webp 2x`;
        basketGoodImageBlock.querySelector('img').alt = good.title;

        // Каждый раз прибавляем сумму добавленного товара с имеющейся суммой
        sumGoodsInBasket += good.price;

        // Если товар акционный
        if (!good.sale === false) {
          basketGoodItem.classList.add('sale-pointer');
        }

        // Добавили в коробку товары
        basketGoodsFragment.append(basketGoodItem);
      }
    });

    // Записали сумму
    goodsSumPriceInBasket.textContent = sumGoodsInBasket.toLocaleString();

    // Отрисовали на странице
    goodsListInBasket.append(basketGoodsFragment);
  }
}

// Обработчик клика на кнопку -'добавить товар в корзину'
document.addEventListener('click', onAddProductToBasket);

renderGoodsToBasket(mockJetSkiData)

export {keyNameProductsInBasket}






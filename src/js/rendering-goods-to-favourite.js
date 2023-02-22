import { getProducts, putProducts, mockJetSkiData, checkQuantityGoods, changeEmptyBlockVisibility } from "./util.js";

// Секция куда отрисовываем товары
const goodsListInFavourites = document.querySelector('[data-favourites-list]');
// Блок с отрисовкой кол-ва товаров в избранном
const countGoodsInFavourite = document.querySelector('[data-count-goods-in-favourites]');
// Блок с отображением состояния избранного пустая/полная
const favouritesWithoutGoods = document.querySelector('[data-favourites-without-goods]');

// Количество товаров в избранном при загрузке/обновлении страницы
const amountGoodsInFavourite = getProducts('productsInFavourite');

if (favouritesWithoutGoods) {
  changeEmptyBlockVisibility(amountGoodsInFavourite, favouritesWithoutGoods)
}

// Записываем кол-во товара
checkQuantityGoods(amountGoodsInFavourite, countGoodsInFavourite);


const onAddProductToFavourite = (evt) => {
  if (evt.target.hasAttribute('data-product-to-favourites')) {

    const selectedGood = evt.target.closest('[data-product]');

    // Если мы находимся на странице 'избранное' и кликнули по сердечку
    if (goodsListInFavourites) {

      // Идентификатор товара по которому кликнули
      const selectedGoodId = selectedGood.dataset.product;

      // Получаем данные из localStorage о товарах в корзине
      const favouriteStore = getProducts('productsInFavourite');
      // const quantityGoods = favouriteStore.length;

      // Ищем id товара по которому кликнули и id товара в localStorage
      const goodToDelete = favouriteStore.find(el => el === selectedGoodId);

      const index = favouriteStore.indexOf(goodToDelete);
      favouriteStore.splice(index, 1);


      // Массив товаров отрисованных на странице в корзине
      const goodsInBasket = goodsListInFavourites.querySelectorAll('[data-product]')

      goodsInBasket.forEach((item) => {
        if (item.dataset.product === goodToDelete) {
          item.remove();
        }
      })

      localStorage.setItem('productsInFavourite', JSON.stringify(favouriteStore));

      checkQuantityGoods(favouriteStore, countGoodsInFavourite);

      if (favouritesWithoutGoods) {
        changeEmptyBlockVisibility(favouriteStore, favouritesWithoutGoods)
      }

    } else {
      // Если мы на любой другой странице

      // Информация по выбранному товару
      const goodInfo = {
        id: selectedGood.dataset.product,
        title: selectedGood.querySelector('[data-good-title]').textContent,
        url: selectedGood.querySelector('[data-good-image-block]').querySelector('img').src,
        price: selectedGood.querySelector('[data-good-price]').textContent,
        sale: selectedGood.classList.contains('sale-pointer'),
        // availability: selectedGood.classList.contains('not-available'),
      }

      const result = putProducts(goodInfo.id, 'productsInFavourite')
      let quantityGoods = result.products;

      // Изменение цвета сердечка - добавление в избранное
      if (result.pushProduct === true) {
        evt.target.classList.add('is-favourite');
      } else {
        evt.target.classList.remove('is-favourite');
      }

      // Записываем кол-во товара
      checkQuantityGoods(quantityGoods, countGoodsInFavourite);
    }
  }
}

/**
 * @description Отрисовываем выбранные пользователем товары в корзине
 * @param {Array} products - массив с товарами и их данными
 */
function renderGoodsToFavourite(products) {

  // Получаем данные из localStorage с id товарами, которые нужно отрисовать на странице
  const localStorageFavourite = getProducts('productsInFavourite');

  //  Получаем данные из localStorage, которые находятся в корзине
  const basketStore = getProducts('productsInBasket');

  if (goodsListInFavourites) {

    // Копируем шаблон и все его содержимое
    const favouriteGoodTemplate = document.querySelector('#catalog-good')
      .content.querySelector('[data-product]');

    // Коробка для складирования товаров отрисованных
    const favouriteGoodFragment = document.createDocumentFragment();

    products.forEach((good) => {
      // Скопировали содержимое шаблона
      const favouriteGoodItem = favouriteGoodTemplate.cloneNode(true);

      // Если id в массиве из localStorage совпадают с товарами из рандомных данных , то отрисовываем
      if (localStorageFavourite.find(goodInFavourite => goodInFavourite === good.id)) {

        const favouriteGoodTitle = favouriteGoodItem.querySelector('[data-good-title]');
        const favouriteGoodPrice = favouriteGoodItem.querySelector('[data-good-price]');
        const favouriteGoodImageBlock = favouriteGoodItem.querySelector('[data-good-image-block]');

        // Заполнили шаблон контентом
        favouriteGoodItem.dataset.product = good.id;

        // Работа с товарами из корзины
        // =================
        // Один и тот же товар, в корзине, каталоге и избранном
        let selectedBasketGoods;
        // Если localStorage не пустое
        if (basketStore.length !== 0) {
          selectedBasketGoods = basketStore.find(element => element === good.id)
        }
        // Если нашли похожие товары (обьекты)
        if (selectedBasketGoods !== undefined) {
          // Вешаем класс лишь тем товарам, которые есть в избранном
          if (selectedBasketGoods === favouriteGoodItem.dataset.product) { }
          favouriteGoodItem.querySelector('[data-product-to-basket]').classList.add('is-basket');
        }

        favouriteGoodTitle.textContent = good.title;
        favouriteGoodPrice.textContent = good.price;
        favouriteGoodImageBlock.querySelector('img').src = `img/jet-ski/${good.url}.jpg`;
        favouriteGoodImageBlock.querySelector('img').srcset = `img/jet-ski/${good.url}@2x.jpg 2x`;
        favouriteGoodImageBlock.querySelector('source').srcset = `img/jet-ski/${good.url}.webp, img/jet-ski/${good.url}@2x.webp 2x`;
        favouriteGoodImageBlock.querySelector('img').alt = good.title;
        favouriteGoodItem.querySelector('[data-product-to-favourites]').classList.add('is-favourite');

        if (!good.sale === false) {
          favouriteGoodItem.classList.add('sale-pointer');
        }

        if (!good.availability === true) {
          favouriteGoodItem.classList.add('not-available');
        }

        // Добавили в коробку товары
        favouriteGoodFragment.append(favouriteGoodItem);

      }
    })

    // Отрисовали на странице
    goodsListInFavourites.append(favouriteGoodFragment)
  }

}

// Обработчик клика на кнопку -'добавить товар в избранное'
document.addEventListener('click', onAddProductToFavourite);

renderGoodsToFavourite(mockJetSkiData)

import { onOpenNotificationGoodAvailability } from "./good-availability-modal.js";
import { mockJetSkiData, getProducts } from "./util.js";


/**
 * @description Отрисовываем товары на странице каталога
 * @param {Array} products - массив с товарами и их данными
 */
const renderGoodsToCatalog = (products) => {
  // Секция куда отрисовываем товары
  const popularGoodsList = document.querySelector('[data-popular-goods-list]');

  if (popularGoodsList) {
    // Копируем шаблон и все его содержимое
    const catalogGoodTemplate = document.querySelector('#catalog-good')
      .content.querySelector('[data-product]');

    // Коробка для складирования товаров отрисованных
    const catalogGoodsFragment = document.createDocumentFragment();

    // Достали данные из локального хранилища по избранному товару
    const favouritesStore = getProducts('productsInFavourite');

    // Товары в корзине
    const basketStore = getProducts('productsInBasket');

    products.forEach(good => {
      // Скопировали содержимое шаблона
      const goodItem = catalogGoodTemplate.cloneNode(true);

      const catalogGoodTitle = goodItem.querySelector('[data-good-title]');
      const catalogGoodPrice = goodItem.querySelector('[data-good-price]');
      const catalogGoodImageBlock = goodItem.querySelector('[data-good-image-block]');

      // Заполняем шаблон контентом
      goodItem.dataset.product = good.id;

      // Работа с товарами из избранного
      // =================
      // Один и тот же товар, в избранном и каталоге
      let favouritesGood;
      // Если localStorage не пустое
      if (favouritesStore !== null) {
        // Сравнили id товары в избранном и id товары в каталоге для нахождения одинаковых товаров
        favouritesGood = favouritesStore.find(element => element === good.id);
      }
      // Если нашли похожие товары (обьекты)
      /* Метод find() возвращает значение первого найденного в массиве элемента (favouritesGood), которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined. */
      if (favouritesGood !== undefined) {

        // Сравниваем их id
        if (favouritesGood === goodItem.dataset.product) {
          goodItem.querySelector('[data-product-to-favourites]').classList.add('is-favourite');
        }
      }

      // Работа с товарами из корзины
      // =================
      // Один и тот же товар, в корзине и каталоге
      let basketGood;
      // Если localStorage не пустое
      if (basketStore !== null) {
        basketGood = basketStore.find(element => element === good.id);
      }
      // Если нашли похожие товары (обьекты)
      if (basketGood !== undefined) {
        // Вешаем класс лишь тем товарам, которые есть в избранном
        if (basketGood === goodItem.dataset.product) {
          goodItem.querySelector('[data-product-to-basket]').classList.add('is-basket');
        }
      }

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

renderGoodsToCatalog(mockJetSkiData)

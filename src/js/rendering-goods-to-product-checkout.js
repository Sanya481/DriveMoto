import { getProducts } from "./util.js";
import { keyNameProductsInBasket } from "./rendering-goods-to-basket.js";

const productCheckoutPage = document.querySelector('[data-product-checkout-page]');
const productCheckoutGoodsList = document.querySelector('[data-product-checkout-goods-list]');


const renderGoodsToProductCheckout = (goods) => {
  if (productCheckoutPage) {

    const basketStore = getProducts(keyNameProductsInBasket);


    if (productCheckoutGoodsList) {

      // Общая сумма товаров в корзине
      const goodsSumPriceInProductCheckout = document.querySelector('[data-goods-sum-price]');
      let sumGoodsInProductCheckout = 0;

      // Копируем шаблон и все его содержимое
      const productTemplate = document.querySelector('#catalog-good')
        .content.querySelector('[data-product]');


      goods.forEach((good) => {
        // Скопировали содержимое шаблона
        const productCheckoutGood = productTemplate.cloneNode(true);

        // Коробка для складирования товаров отрисованных
        const productCheckoutFragment = document.createDocumentFragment();

        if (basketStore.find(goodInBasket => goodInBasket === good.id)) {

          const productCheckoutGoodTitle = productCheckoutGood.querySelector('[data-good-title]');
          const productCheckoutGoodPrice = productCheckoutGood.querySelector('[data-good-price]');
          const productCheckoutGoodImageBlock = productCheckoutGood.querySelector('[data-good-image-block]');

          productCheckoutGood.dataset.product = good.id;

          productCheckoutGoodTitle.textContent = good.title;
          productCheckoutGoodPrice.textContent = good.price.toLocaleString();
          productCheckoutGood.querySelector('[data-product-card-code]').textContent = good.productCode;
          productCheckoutGoodImageBlock.querySelector('img').src = `img/jet-ski/${good.url}.jpg`;
          productCheckoutGoodImageBlock.querySelector('img').srcset = `img/jet-ski/${good.url}@2x.jpg 2x`;
          productCheckoutGoodImageBlock.querySelector('source').srcset = `img/jet-ski/${good.url}.webp, img/jet-ski/${good.url}@2x.webp 2x`;
          productCheckoutGoodImageBlock.querySelector('img').alt = good.title;

          // Каждый раз прибавляем сумму добавленного товара с имеющейся суммой
          sumGoodsInProductCheckout += good.price;

          // Если товар акционный
          if (!good.sale === false) {
            productCheckoutGood.classList.add('sale-pointer');
          }

          // Добавили в коробку товары
          productCheckoutFragment.append(productCheckoutGood);
        }

        goodsSumPriceInProductCheckout.textContent = sumGoodsInProductCheckout.toLocaleString();

        // Отрисовали на странице
        productCheckoutGoodsList.append(productCheckoutFragment);

      });
    }

    // console.log(basketStore)
  }
}

export { renderGoodsToProductCheckout }

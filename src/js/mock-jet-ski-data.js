import { onOpenNotificationGoodAvailability } from "./good-availability-modal.js";

// Выдуманные данные по гидроциклам
const mockJetSkiData = [
  {
    title: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango',
    url: 'gidrotsikl-1',
    price: 1049500,
    sale: false,
    availability: true,
  },
  {
    title: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
    url: 'gidrotsikl-2',
    price: 1100475,
    sale: true,
    availability: false,
  },
  {
    title: 'Гидроцикл BRP SeaDoo GTR 230hp X California green',
    url: 'gidrotsikl-3',
    price: 1323700,
    sale: false,
    availability: true,
  },
  {
    title: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream',
    url: 'gidrotsikl-4',
    price: 1567800,
    sale: true,
    availability: false,
  },
  {
    title: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal',
    url: 'gidrotsikl-5',
    price: 1543000,
    sale: false,
    availability: true,
  },
  {
    title: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up',
    url: 'gidrotsikl-6',
    price: 732435,
    sale: false,
    availability: true,
  },
  {
    title: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental',
    url: 'gidrotsikl-7',
    price: 857666,
    sale: false,
    availability: true,
  },
  {
    title: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue',
    url: 'gidrotsikl-8',
    price: 1229711,
    sale: true,
    availability: true,
  },
  {
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper',
    url: 'gidrotsikl-9',
    price: 587440,
    sale: false,
    availability: true,
  },
  {
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple',
    url: 'gidrotsikl-10',
    price: 587440,
    sale: false,
    availability: true,
  },
  {
    title: 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla',
    url: 'gidrotsikl-11',
    price: 2587450,
    sale: true,
    availability: false,
  },
  {
    title: 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry',
    url: 'gidrotsikl-12',
    price: 1677450,
    sale: false,
    availability: false,
  }
]

/**
 *
 * @param {Array} products - массив с товарами и их данными
 */
const renderGoods = (products) => {
  // Секция куда отрисовываем товары
  const popularGoodsList = document.querySelector('[data-popular-goods-list]');

  if (popularGoodsList) {
    // Копируем шаблон и все его содержимое
    const catalogGoodTemplate = document.querySelector('#catalog-good')
      .content.querySelector('[data-product]');

    // Коробка для складирования товаров отрисованных
    const catalogGoodsFragment = document.createDocumentFragment();

    products.forEach(good => {
      // Скопировали содержимое шаблона
      const goodItem = catalogGoodTemplate.cloneNode(true);

      const catalogGoodTitle = goodItem.querySelector('[data-good-title]');
      const catalogGoodPrice = goodItem.querySelector('[data-good-price]');
      const catalogGoodImageBlock = goodItem.querySelector('[data-good-image-block]');

      // Кнопка уведомления о наличии товара
      const notificationGoodAvailability = goodItem.querySelector('[data-notification-good-availability]');

      // Заполнили шаблон контентом
      catalogGoodTitle.textContent = good.title;
      catalogGoodPrice.textContent = good.price;
      catalogGoodImageBlock.querySelector('img').src = `img/jet-ski/${good.url}.jpg`;
      catalogGoodImageBlock.querySelector('img').srcset = `img/jet-ski/${good.url}@2x.jpg 2x`;
      catalogGoodImageBlock.querySelector('source').srcset = `img/jet-ski/${good.url}.webp, img/jet-ski/${good.url}@2x.webp 2x`;
      catalogGoodImageBlock.querySelector('img').alt = good.title;

      if (!good.sale === false) {
        goodItem.classList.add('sale-pointer');
      }

      if (!good.availability === true) {
        goodItem.classList.add('not-available');
      }

      // Вешаем обработчик клика.
      // Показ - уведомления о наличии товара
      notificationGoodAvailability.addEventListener('click', onOpenNotificationGoodAvailability);

      // Добавили в коробку товары
      catalogGoodsFragment.append(goodItem);
    });

    // Отрисовали на странице
    popularGoodsList.append(catalogGoodsFragment);
  }
}

renderGoods(mockJetSkiData)

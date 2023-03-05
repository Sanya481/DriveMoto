/**
 *  Выдуманные данные по гидроциклам
 */
// const mockJetSkiData = [
//   {
//     id: 'jetSki-1',
//     title: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango',
//     productCode: '366666-1',
//     url: 'gidrotsikl-1',
//     price: 1049500,
//     sale: false,
//     availability: true,
//     manufacturer: 'Россия',
//     numberOfSeats: 2,
//     power: 180,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2021,
//     rating: 4,
//   },
//   {
//     id: 'jetSki-2',
//     title: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
//     productCode: '366666-2',
//     url: 'gidrotsikl-2',
//     oldPrice: 2453785,
//     price: 1100475,
//     sale: true,
//     availability: false,
//     manufacturer: 'Канада',
//     numberOfSeats: 3,
//     power: 155,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2018,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-3',
//     title: 'Гидроцикл BRP SeaDoo GTR 230hp X California green',
//     productCode: '366666-3',
//     url: 'gidrotsikl-3',
//     price: 6323700,
//     sale: false,
//     availability: true,
//     manufacturer: 'США',
//     numberOfSeats: 1,
//     power: 145,
//     engineType: 'Дизельный',
//     yearOfRelease: 2011,
//     rating: 2,
//   },
//   {
//     id: 'jetSki-4',
//     title: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream',
//     productCode: '366666-4',
//     url: 'gidrotsikl-4',
//     oldPrice: 8454485,
//     price: 4567800,
//     sale: true,
//     availability: false,
//     manufacturer: 'Китай',
//     numberOfSeats: 5,
//     power: 200,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2022,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-5',
//     title: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal',
//     productCode: '366666-5',
//     url: 'gidrotsikl-5',
//     price: 5543000,
//     sale: false,
//     availability: true,
//     manufacturer: 'Великобритания',
//     numberOfSeats: 4,
//     power: 225,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2010,
//     rating: 1,
//   },
//   {
//     id: 'jetSki-6',
//     title: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up',
//     productCode: '366666-6',
//     url: 'gidrotsikl-6',
//     price: 732435,
//     sale: false,
//     availability: true,
//     manufacturer: 'Франция',
//     numberOfSeats: 2,
//     power: 190,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2016,
//     rating: 3,
//   },
//   {
//     id: 'jetSki-7',
//     title: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental',
//     productCode: '366666-7',
//     url: 'gidrotsikl-7',
//     price: 857666,
//     sale: false,
//     availability: true,
//     manufacturer: 'Чехия',
//     numberOfSeats: 5,
//     power: 194,
//     engineType: 'Дизельный',
//     yearOfRelease: 2023,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-8',
//     title: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue',
//     productCode: '366666-8',
//     url: 'gidrotsikl-8',
//     oldPrice: 4456785,
//     price: 2229711,
//     sale: true,
//     availability: true,
//     manufacturer: 'Корея',
//     numberOfSeats: 1,
//     power: 199,
//     engineType: 'Бензиновый',
//     yearOfRelease: 1999,
//     rating: 4,
//   },
//   {
//     id: 'jetSki-9',
//     title: 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper',
//     productCode: '366666-9',
//     url: 'gidrotsikl-9',
//     price: 587440,
//     sale: false,
//     availability: true,
//     manufacturer: 'Бразилия',
//     numberOfSeats: 3,
//     power: 229,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2013,
//     rating: 3,
//   },
//   {
//     id: 'jetSki-10',
//     title: 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple',
//     productCode: '366666-10',
//     url: 'gidrotsikl-10',
//     price: 607440,
//     sale: false,
//     availability: true,
//     manufacturer: 'Индия',
//     numberOfSeats: 6,
//     power: 177,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2017,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-11',
//     title: 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla',
//     productCode: '366666-11',
//     url: 'gidrotsikl-11',
//     oldPrice: 4453785,
//     price: 3587450,
//     sale: true,
//     availability: false,
//     manufacturer: 'Турция',
//     numberOfSeats: 13,
//     power: 105,
//     engineType: 'Электрический',
//     yearOfRelease: 2022,
//     rating: 3,
//   },
//   {
//     id: 'jetSki-12',
//     title: 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry',
//     productCode: '366666-12',
//     url: 'gidrotsikl-12',
//     price: 1677450,
//     sale: false,
//     availability: false,
//     manufacturer: 'Греция',
//     numberOfSeats: 2,
//     power: 89,
//     engineType: 'Электрический',
//     yearOfRelease: 2023,
//     rating: 4,
//   },
//   {
//     id: 'jetSki-13',
//     title: 'Гидроцикл YAMAHA FX Cruiser SVHO',
//     productCode: '366666-13',
//     url: 'gidrotsikl-13',
//     price: 867750,
//     sale: false,
//     availability: true,
//     manufacturer: 'Исландия',
//     numberOfSeats: 6,
//     power: 100,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2099,
//     rating: 2,
//   },
//   {
//     id: 'jetSki-14',
//     title: 'Гидроцикл YAMAHA EX',
//     productCode: '366666-14',
//     url: 'gidrotsikl-14',
//     price: 2567750,
//     sale: true,
//     availability: true,
//     manufacturer: 'Греция',
//     numberOfSeats: 3,
//     power: 199,
//     engineType: 'Дизельный',
//     yearOfRelease: 1999,
//     rating: 3,
//   },
//   {
//     id: 'jetSki-15',
//     title: 'Гидроцикл YAMAHA SuperJet',
//     productCode: '366666-15',
//     url: 'gidrotsikl-15',
//     price: 599750,
//     sale: false,
//     availability: true,
//     manufacturer: 'Польша',
//     numberOfSeats: 6,
//     power: 110,
//     engineType: 'Бензиновый',
//     yearOfRelease: 1999,
//     rating: 4,
//   },
//   {
//     id: 'jetSki-16',
//     title: 'Гидроцикл GTX 300 Limited',
//     productCode: '366666-16',
//     url: 'gidrotsikl-16',
//     price: 5599750,
//     sale: false,
//     availability: true,
//     manufacturer: 'Беларусь',
//     numberOfSeats: 5,
//     power: 115,
//     engineType: 'Дизельный',
//     yearOfRelease: 1993,
//     rating: 3,
//   },
//   {
//     id: 'jetSki-17',
//     title: 'Гидроцикл YAMAHA VXR',
//     productCode: '366666-17',
//     url: 'gidrotsikl-17',
//     price: 500050,
//     sale: true,
//     availability: true,
//     manufacturer: 'Китай',
//     numberOfSeats: 8,
//     power: 120,
//     engineType: 'Электрический',
//     yearOfRelease: 1993,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-18',
//     title: 'Гидроцикл GTI 130 PRO',
//     productCode: '366666-18',
//     url: 'gidrotsikl-18',
//     price: 1500050,
//     sale: false,
//     availability: true,
//     manufacturer: 'Индия',
//     numberOfSeats: 3,
//     power: 129,
//     engineType: 'Дизельный',
//     yearOfRelease: 1988,
//     rating: 4,
//   },
//   {
//     id: 'jetSki-19',
//     title: 'Гидроцикл FISH PRO 170',
//     productCode: '366666-19',
//     url: 'gidrotsikl-19',
//     price: 2599050,
//     sale: false,
//     availability: false,
//     manufacturer: 'Корея',
//     numberOfSeats: 10,
//     power: 170,
//     engineType: 'Дизельный',
//     yearOfRelease: 2022,
//     rating: 3,
//   },
//   {
//     id: 'jetSki-20',
//     title: 'Гидроцикл YAMAHA EXRS 220',
//     productCode: '366666-20',
//     url: 'gidrotsikl-20',
//     price: 3999999,
//     sale: true,
//     availability: true,
//     manufacturer: 'Беларусь',
//     numberOfSeats: 4,
//     power: 179,
//     engineType: 'Электрический',
//     yearOfRelease: 2022,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-21',
//     title: 'Гидроцикл YAMAHA GP1800 S',
//     productCode: '366666-21',
//     url: 'gidrotsikl-21',
//     price: 965748,
//     sale: false,
//     availability: true,
//     manufacturer: 'Беларусь',
//     numberOfSeats: 2,
//     power: 220,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2028,
//     rating: 4,
//   },
//   {
//     id: 'jetSki-22',
//     title: 'Гидроцикл YAMAHA VX Cruiser SH',
//     productCode: '366666-22',
//     url: 'gidrotsikl-22',
//     price: 1965748,
//     sale: false,
//     availability: true,
//     manufacturer: 'Шри-ланка',
//     numberOfSeats: 8,
//     power: 229,
//     engineType: 'Дизельный',
//     yearOfRelease: 2025,
//     rating: 2,
//   },
//   {
//     id: 'jetSki-23',
//     title: 'Гидроцикл Spark TRIXX 3up',
//     productCode: '366666-23',
//     url: 'gidrotsikl-23',
//     price: 2969948,
//     sale: true,
//     availability: true,
//     manufacturer: 'Турция',
//     numberOfSeats: 1,
//     power: 229,
//     engineType: 'Дизельный',
//     yearOfRelease: 2023,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-24',
//     title: 'Гидроцикл YAMAHA FX Cruiser High Output',
//     productCode: '366666-24',
//     url: 'gidrotsikl-24',
//     price: 894783,
//     sale: true,
//     availability: true,
//     manufacturer: 'Иран',
//     numberOfSeats: 5,
//     power: 299,
//     engineType: 'Электрический',
//     yearOfRelease: 2013,
//     rating: 1,
//   },
//   {
//     id: 'jetSki-25',
//     title: 'Гидроцикл GTX LIMITED 300 RS',
//     productCode: '366666-25',
//     url: 'gidrotsikl-25',
//     price: 5894783,
//     sale: false,
//     availability: true,
//     manufacturer: 'Россия',
//     numberOfSeats: 6,
//     power: 320,
//     engineType: 'Бензиновый',
//     yearOfRelease: 2033,
//     rating: 5,
//   },
//   {
//     id: 'jetSki-26',
//     title: 'Гидроцикл GTX LIMITED 300 RS',
//     productCode: '366666-26',
//     url: 'gidrotsikl-26',
//     price: 398322,
//     sale: false,
//     availability: true,
//     manufacturer: 'Марокко',
//     numberOfSeats: 1,
//     power: 322,
//     engineType: 'Электрический',
//     yearOfRelease: 2039,
//     rating: 5,
//   },
// ]

/**
 * @description Получаем данные из локального хранилища
 * @param {string} keyName - ключ в localStorage для нужных данных
 * @returns
 */
const getProducts = (keyName) => {
  const productsLocalStorage = localStorage.getItem(keyName);
  if (productsLocalStorage !== null) {
    return JSON.parse(productsLocalStorage);
  } else {
    return [];
  }
}

/**
 * @description Записываем данные в локальное хранилище
 * @param {string} id - уникальный идентификатор (id товара)
 * @param {string} keyName - ключ в localStorage для нужных данных
 */
const putProducts = (id, keyName) => {
  let products = getProducts(keyName);
  let pushProduct = false;
  const index = products.indexOf(id);

  if (index === -1) {
    products.push(id);
    pushProduct = true;
  } else {
    products.splice(index, 1)
  }

  localStorage.setItem(keyName, JSON.stringify(products));

  // Если у обьекта ключ и значение совпадают (pushProduct: pushProduct)- можно сократить
  return {
    pushProduct,
    products,
  }
}

/**
 * @description  Проверка на количество товаров в корзине и показ/скрытие блока с кол-вом товаров (счетчик)
 * @param {Array} goods - массив товаров (их id) в localStorage
 * @param {HTMLElement} counter - элемент на странице куда записываем кол-во
 * @param {HTMLElement} emptyBlockVisibility - элемент на странице куда записываем кол-во *
 */
const checkQuantityGoods = (goods, counter) => {
  if (goods.length === 0) {
    counter.style.opacity = 0;
  } else {
    counter.style.opacity = 1;
    counter.textContent = goods.length;
  }
}

/**
 * @description Проверка на количество товаров в корзине и показ/скрытие блока информацией, что корзина/избранное пусто
 * @param {Array} goods - массив товаров (их id) в localStorage
 * @param {HTMLElement} blockVisibility - блок который показываем/скрываем
 */
const changeEmptyBlockVisibility = (goods, blockVisibility) => {
  if (goods.length === 0) {
    blockVisibility.classList.remove('is-hidden');
  } else {
    blockVisibility.classList.add('is-hidden');
  }
}

/**
* @description Получение данные из localStorage, которые находятся на нужной нам странице (корзина, каталог, избранное)
* @param {Array} localStorePageData - массив данных (id товаров) из localStorage
* @param {HTMLElement} productToRender - шаблон элемента для отрисовки (разметка)
* @param {Object} product - обьект, который перебираем в массиве для отрисовки
*/
const checkSimilarGoodsInBasket = (localStorePageData, productToRender, product) => {
  // Работа с товарами (из корзины, каталога, избранного)
  // =================
  // Один и тот же товар, в корзине, каталоге и избранном
  let similarGood;
  // Если localStorage не пустое
  if (localStorePageData.length !== 0) {
    similarGood = localStorePageData.find(element => element === product.id);
  }
  // Если нашли похожие товары (обьекты)
  if (similarGood !== undefined) {
    // Вешаем класс лишь тем товарам, которые есть в избранном
    if (similarGood === productToRender.dataset.product) { }
    productToRender.querySelector('[data-product-to-basket]').classList.add('is-basket');
  }
}

/**
* @description Получение данные из localStorage, которые находятся на нужной нам странице (корзина, каталог, избранное)
* @param {Array} localStorePageData - массив данных (id товаров) из localStorage
* @param {HTMLElement} productToRender - шаблон элемента для отрисовки (разметка)
* @param {Object} product - обьект, который перебираем в массиве для отрисовки
*/
const checkSimilarGoodsInFavourite = (localStorePageData, productToRender, product) => {
  // Работа с товарами (из корзины, каталога, избранного)
  // =================
  // Один и тот же товар, в корзине, каталоге и избранном
  let similarGood;
  // Если localStorage не пустое
  if (localStorePageData.length !== 0) {
    similarGood = localStorePageData.find(element => element === product.id);
  }
  // Если нашли похожие товары (обьекты)
  if (similarGood !== undefined) {
    // Вешаем класс лишь тем товарам, которые есть в избранном
    if (similarGood === productToRender.dataset.product) { }
    productToRender.querySelector('[data-product-to-favourites]').classList.add('is-favourite');
  }
}

export { getProducts, putProducts, checkQuantityGoods, changeEmptyBlockVisibility, checkSimilarGoodsInBasket, checkSimilarGoodsInFavourite }



// /**
// * @description Ловушка фокуса
// */
// export const trapFocus = (evt) => {
//   // Элементы списка можно изменять и это может быть не только button
//   const focusableEls = selectList.querySelectorAll('button');
//   const firstFocusableEl = focusableEls[0];
//   const lastFocusableEl = focusableEls[focusableEls.length - 1];
//   const isTabPressed = (evt.key === 'Tab' || evt.key === KEYCODE_TAB)

//   if (!isTabPressed) {
//     return
//   }

//   /* shift + tab */
//   if (evt.shiftKey) {
//     if (document.activeElement === firstFocusableEl) {
//       lastFocusableEl.focus();
//       evt.preventDefault();
//     }
//     /* tab */
//   } else {
//     if (document.activeElement === lastFocusableEl) {
//       firstFocusableEl.focus()
//       evt.preventDefault();
//     }
//   }
// }


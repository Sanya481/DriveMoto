/**
 *  Выдуманные данные по гидроциклам
 */
const mockJetSkiData = [
  {
    id: 'jetSki-1',
    title: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango',
    productCode: '366666-1',
    url: 'gidrotsikl-1',
    price: 1049500,
    sale: false,
    availability: true,
    manufacturer: 'Россия',
    numberOfSeats: 2,
    power: 180,
    engineType: 'Бензиновый',
    yearOfRelease: 2021,
  },
  {
    id: 'jetSki-2',
    title: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
    productCode: '366666-2',
    url: 'gidrotsikl-2',
    oldPrice: 2453785,
    price: 1100475,
    sale: true,
    availability: false,
    manufacturer: 'Канада',
    numberOfSeats: 3,
    power: 155,
    engineType: 'Бензиновый',
    yearOfRelease: 2018,
  },
  {
    id: 'jetSki-3',
    title: 'Гидроцикл BRP SeaDoo GTR 230hp X California green',
    productCode: '366666-3',
    url: 'gidrotsikl-3',
    price: 6323700,
    sale: false,
    availability: true,
    manufacturer: 'США',
    numberOfSeats: 1,
    power: 145,
    engineType: 'Дизельный',
    yearOfRelease: 2011,
  },
  {
    id: 'jetSki-4',
    title: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream',
    productCode: '366666-4',
    url: 'gidrotsikl-4',
    oldPrice: 8454485,
    price: 4567800,
    sale: true,
    availability: false,
    manufacturer: 'Китай',
    numberOfSeats: 5,
    power: 200,
    engineType: 'Бензиновый',
    yearOfRelease: 2022,
  },
  {
    id: 'jetSki-5',
    title: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal',
    productCode: '366666-5',
    url: 'gidrotsikl-5',
    price: 5543000,
    sale: false,
    availability: true,
    manufacturer: 'Великобритания',
    numberOfSeats: 4,
    power: 225,
    engineType: 'Бензиновый',
    yearOfRelease: 2010,
  },
  {
    id: 'jetSki-6',
    title: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up',
    productCode: '366666-6',
    url: 'gidrotsikl-6',
    price: 732435,
    sale: false,
    availability: true,
    manufacturer: 'Франция',
    numberOfSeats: 2,
    power: 190,
    engineType: 'Бензиновый',
    yearOfRelease: 2016,
  },
  {
    id: 'jetSki-7',
    title: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental',
    productCode: '366666-7',
    url: 'gidrotsikl-7',
    price: 857666,
    sale: false,
    availability: true,
    manufacturer: 'Чехия',
    numberOfSeats: 5,
    power: 194,
    engineType: 'Дизельный',
    yearOfRelease: 2023,
  },
  {
    id: 'jetSki-8',
    title: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue',
    productCode: '366666-8',
    url: 'gidrotsikl-8',
    oldPrice: 4456785,
    price: 2229711,
    sale: true,
    availability: true,
    manufacturer: 'Корея',
    numberOfSeats: 1,
    power: 199,
    engineType: 'Бензиновый',
    yearOfRelease: 1999,
  },
  {
    id: 'jetSki-9',
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper',
    productCode: '366666-9',
    url: 'gidrotsikl-9',
    price: 587440,
    sale: false,
    availability: true,
    manufacturer: 'Бразилия',
    numberOfSeats: 3,
    power: 229,
    engineType: 'Бензиновый',
    yearOfRelease: 2013,
  },
  {
    id: 'jetSki-10',
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple',
    productCode: '366666-10',
    url: 'gidrotsikl-10',
    price: 607440,
    sale: false,
    availability: true,
    manufacturer: 'Индия',
    numberOfSeats: 6,
    power: 177,
    engineType: 'Бензиновый',
    yearOfRelease: 2017,
  },
  {
    id: 'jetSki-11',
    title: 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla',
    productCode: '366666-11',
    url: 'gidrotsikl-11',
    oldPrice: 4453785,
    price: 3587450,
    sale: true,
    availability: false,
    manufacturer: 'Турция',
    numberOfSeats: 13,
    power: 105,
    engineType: 'Электрический',
    yearOfRelease: 2022,
  },
  {
    id: 'jetSki-12',
    title: 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry',
    productCode: '366666-12',
    url: 'gidrotsikl-12',
    price: 1677450,
    sale: false,
    availability: false,
    manufacturer: 'Греция',
    numberOfSeats: 2,
    power: 89,
    engineType: 'Электрический',
    yearOfRelease: 2023,
  }
]

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

export { mockJetSkiData, getProducts, putProducts, checkQuantityGoods, changeEmptyBlockVisibility }



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


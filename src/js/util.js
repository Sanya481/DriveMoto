/**
 *  Выдуманные данные по гидроциклам
 */
const mockJetSkiData = [
  {
    id: 'jetSki-1',
    title: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango',
    url: 'gidrotsikl-1',
    price: 1049500,
    sale: false,
    availability: true,
  },
  {
    id: 'jetSki-2',
    title: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic',
    url: 'gidrotsikl-2',
    price: 1100475,
    sale: true,
    availability: false,
  },
  {
    id: 'jetSki-3',
    title: 'Гидроцикл BRP SeaDoo GTR 230hp X California green',
    url: 'gidrotsikl-3',
    price: 1323700,
    sale: false,
    availability: true,
  },
  {
    id: 'jetSki-4',
    title: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream',
    url: 'gidrotsikl-4',
    price: 1567800,
    sale: true,
    availability: false,
  },
  {
    id: 'jetSki-5',
    title: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal',
    url: 'gidrotsikl-5',
    price: 1543000,
    sale: false,
    availability: true,
  },
  {
    id: 'jetSki-6',
    title: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up',
    url: 'gidrotsikl-6',
    price: 732435,
    sale: false,
    availability: true,
  },
  {
    id: 'jetSki-7',
    title: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental',
    url: 'gidrotsikl-7',
    price: 857666,
    sale: false,
    availability: true,
  },
  {
    id: 'jetSki-8',
    title: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue',
    url: 'gidrotsikl-8',
    price: 1229711,
    sale: true,
    availability: true,
  },
  {
    id: 'jetSki-9',
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper',
    url: 'gidrotsikl-9',
    price: 587440,
    sale: false,
    availability: true,
  },
  {
    id: 'jetSki-10',
    title: 'Гидроцикл Spark 2-UP 900 Ho Ace Pineapple',
    url: 'gidrotsikl-10',
    price: 587440,
    sale: false,
    availability: true,
  },
  {
    id: 'jetSki-11',
    title: 'Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla',
    url: 'gidrotsikl-11',
    price: 2587450,
    sale: true,
    availability: false,
  },
  {
    id: 'jetSki-12',
    title: 'Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry',
    url: 'gidrotsikl-12',
    price: 1677450,
    sale: false,
    availability: false,
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


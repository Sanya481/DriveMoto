import nouislider from './vendor/nouislider.js';
// https://refreshless.com/wnumb/
import './vendor/wNumb.js';

import imask from './vendor/imask.js';

// Как сделать пробелы медлу числами
/*  https://ru.stackoverflow.com/questions/874794/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B8%D1%81%D0%BB%D0%B0-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B7%D1%80%D1%8F%D0%B4%D1%8B-js */

const filterPpriceSlider = document.querySelector('[data-price-slider]');

// const re = /\d{1,3}(?=(\d{3})+(?!\d))/g;

if (filterPpriceSlider) {

  // Input для вывода минимального значения
  const productPriceMin = document.querySelector('[data-slider-value-min]');
  // Input для вывода максимального значения
  const productPriceMax = document.querySelector('[data-slider-value-max]');
  // Массив из двух Input - min, max
  const prices = [productPriceMin, productPriceMax];

  /**
   * @description Изменение ползунка слайдера в зависимости от введенного значения
   * @param {number} inputIndex - индекс input
   * @param {number} inputValue - значение input
   */
  const setRangeSlider = (inputIndex, inputValue) => {
    // Массив для изменения только одного значения
    let arr = [null, null];
    arr[inputIndex] = inputValue;

    filterPpriceSlider.noUiSlider.set(arr);

    // console.log(arr)
    // console.log(inputIndex)
    // console.log(inputValue)
  }

  // const Format = wNumb({
  //   suffix: ' $',
  //   // decimals: 3,
  //   thousand: ','
  // });

  // console.log(Format.to(10865567))
  // console.log(Format.from('10,865,567 $'))


  noUiSlider.create(filterPpriceSlider, {
    start: [8000000, 90000000],
    connect: true,
    step: 1,
    range: {
      'min': [100000],
      'max': [100000000]
    },

    // format: {
    //   // 'to' the formatted value. Receives a number.
    //   to: function (value) {
    //     // console.log(value)
    //     return value;
    //   },
    //   // 'from' the formatted value.
    //   // Receives a string, should return a number.
    //   from: function (value) {
    //     // console.log(value)
    //     // console.log(Number(value.replace()))
    //     return Number(value.replace(',-', ''));
    //   }
    // }

    // format: wNumb({
    //   // decimals: 3,
    //   thousand: ',',
    //   // suffix: ' (US $)'
    // })
  })



  filterPpriceSlider.noUiSlider.on('update', function (values, handle) {
    // console.log('productPriceMin', productPriceMin.value)
    // console.log('handle', handle)
    // console.log('values', values)

    const number = Math.round(values[handle]);

    prices[handle].value = number;
    // prices[handle].textContent = number.toLocaleString();

    // numberRange.textContent = number.toLocaleString();
    // numberRange.value = number.toLocaleString();

    // console.log('prices[handle].value', prices[handle].value)
    // console.log('Math.round(values[handle])', Math.round(values[handle]))
    // console.log('prices[handle].textContent', prices[handle].textContent)
    // console.log('number', number)
  })

  prices.forEach((input, index) => {
    input.addEventListener('change', (evt) => {
      setRangeSlider(index, evt.currentTarget.value);

      // console.log(evt.currentTarget.value)
    })
  })

}

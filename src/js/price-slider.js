import nouislider from './vendor/nouislider.js';

import imask from './vendor/imask.js';

// const numberMask = IMask(
//   document.querySelector('#number-mask'),
//   {
//     mask: Number,
//     // other options are optional with defaults below
//     scale: 2,  // digits after point, 0 for integers
//     signed: false,  // disallow negative
//     thousandsSeparator: ',',  // any single char
//     padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
//     normalizeZeros: true,  // appends or removes zeros at ends
//     radix: ',',  // fractional delimiter
//     mapToRadix: ['.'],  // symbols to process as radix

//     // additional number interval options (e.g.)
//     min: -10000,
//     max: 100000000
//   });

const filterPpriceSlider = document.querySelector('[data-price-slider]');

if (filterPpriceSlider) {

  const productPriceMin = document.querySelector('[data-slider-value-min]');
  const productPriceMax = document.querySelector('[data-slider-value-max]');
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
  }

  noUiSlider.create(filterPpriceSlider, {
    start: [10000, 100000000],
    connect: true,
    step: 1,
    range: {
      'min': [100000],
      'max': [100000000]
    }
  })

  filterPpriceSlider.noUiSlider.on('update', function (values, handle) {
    // console.log('productPriceMin', productPriceMin.value)
    // console.log('handle', handle)
    prices[handle].value = Math.round(values[handle]);
  })

  prices.forEach((input, index) => {
    input.addEventListener('change', (evt) => {
      setRangeSlider(index, evt.currentTarget.value)
    })
  })

}

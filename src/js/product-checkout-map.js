// Быстрый старт
// https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html


/* Создавать карту следует после того, как веб-страница загрузится целиком и будет создан контейнер с id. Это нужно, чтобы к нему можно обращаться по id. Чтобы инициализировать карту после загрузки страницы, можно воспользоваться функцией ready(). Она вызовется тогда, когда API будет загружен и DOM сформирован. */

// Карта
const productCheckoutMap = document.querySelector('[data-product-checkout-map]');
// Кнопка поиска адреса на карте
const searchAddressBtn = document.querySelector('[data-search-address-btn]');

function init() {
  // Создание карты.
  const myMap = new ymaps.Map(productCheckoutMap, {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [55.76, 37.64],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 7
  });

  // отключаем скролл карты (опционально)
  myMap.behaviors.disable(['scrollZoom']);


  function onGetAddress(evt) {
    const formGroupAddress = evt.target.closest('[data-form-group-address]')
    const addressField = formGroupAddress.querySelector('[data-address-field]').value;

    // Если поле ввода не пустое
    if (addressField) {
      ymaps.geocode(addressField, {
        results: 1
      }).then((res) => {
        // Выбираем первый результат геокодирования.
        const firstGeoObject = res.geoObjects.get(0);
        // Координаты геообъекта.
        const coords = firstGeoObject.geometry.getCoordinates();
        // Область видимости геообъекта.
        const bounds = firstGeoObject.properties.get('boundedBy');

        firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');

        // Получаем строку с адресом и выводим в иконке геообъекта.
        firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

        // Добавляем первый найденный геообъект на карту.
        myMap.geoObjects.add(firstGeoObject);

        // Масштабируем карту на область видимости геообъекта.
        myMap.setBounds(bounds, {
          // Проверяем наличие тайлов на данном масштабе.
          checkZoomRange: true
        });
      })
    }
  }

  if (searchAddressBtn) {
    searchAddressBtn.addEventListener('click', onGetAddress);
  }
}

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
if (productCheckoutMap) {
  ymaps.ready(init);
}

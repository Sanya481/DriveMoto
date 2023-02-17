const body = document.body;

/**
 * Модалка уведомления о наличии товара
 */
const goodAvailabilityModal = document.querySelector('[data-good-availability-modal]');
/**
 * Контент модалки
 */
const goodAvailabilityModalContent = document.querySelector('[data-good-availability-modal-content]');
/**
 * Кнопка закрытия модалки
 */
const goodAvailabilityBtnClose = document.querySelector('[data-good-availability-close-btn]');

/**
 * Закрытие модалки уведомления о наличии товара по нажатию на крестик
 */
const onCloseNotificationGoodAvailability = () => {
  body.classList.remove('scroll-lock');
  goodAvailabilityModal.classList.remove('is-show')

  document.removeEventListener('click', onOverlayClick);
  goodAvailabilityBtnClose.removeEventListener('click', onCloseNotificationGoodAvailability);

  if (window.matchMedia('screen and (min-width:1024px)').matches) {
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

/**
 * Закрытие модалки уведомления о наличии товара по нажатию на ESCAPE
 */
const onEscKeyPress = (evt) => {
  evt.preventDefault();

  if (evt.key === 'Escape') {
    body.classList.remove('scroll-lock');
    goodAvailabilityModal.classList.remove('is-show')

    document.removeEventListener('click', onOverlayClick);
    goodAvailabilityBtnClose.removeEventListener('click', onCloseNotificationGoodAvailability);

    if (window.matchMedia('screen and (min-width:1024px)').matches) {
      document.removeEventListener('keydown', onEscKeyPress);
    }
  }
}

/**
 * Закрытие модалки уведомления о наличии товара по клику вне модалки
 */
const onOverlayClick = (evt) => {
  const elementsClickArea = !evt.composedPath().includes(goodAvailabilityModalContent);

  if (elementsClickArea) {
    body.classList.remove('scroll-lock');
    goodAvailabilityModal.classList.remove('is-show')

    document.removeEventListener('click', onOverlayClick);
    goodAvailabilityBtnClose.removeEventListener('click', onCloseNotificationGoodAvailability);

    if (window.matchMedia('screen and (min-width:1024px)').matches) {
      document.removeEventListener('keydown', onEscKeyPress);
    }
  }
}

/**
 * Открытие модалки уведомления о наличии товара
 */
const onOpenNotificationGoodAvailability = (evt) => {
  evt.stopPropagation();
  /* Свойство currentTarget  содержит объект, на которого была совершена подписка (у которого вы вызывали addEventListener ). */

  // Товар для уведомления о его наличии
  // const good = evt.currentTarget.closest('[data-product]');
  // console.log(good);

  body.classList.add('scroll-lock');
  goodAvailabilityModal.classList.add('is-show')

  document.addEventListener('click', onOverlayClick);
  goodAvailabilityBtnClose.addEventListener('click', onCloseNotificationGoodAvailability);

  if (window.matchMedia('screen and (min-width:1024px)').matches) {
    document.addEventListener('keydown', onEscKeyPress);
  }
}

export { onOpenNotificationGoodAvailability };

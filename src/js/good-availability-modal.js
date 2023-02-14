const body = document.body;

const notificationGoodAvailabilityBtn = document.querySelectorAll('[data-notification-good-availability]');

const goodAvailabilityModal = document.querySelector('[data-good-availability-modal]');

const goodAvailabilityModalContent = goodAvailabilityModal.querySelector('[data-good-availability-modal-content]');

const goodAvailabilityBtnClose = goodAvailabilityModal.querySelector('[data-good-availability-close-btn]');


const onCloseNotificationGoodAvailability = () => {
  body.classList.remove('scroll-lock');
  goodAvailabilityModal.classList.remove('is-show')

  document.removeEventListener('click', onOverlayClick);
  goodAvailabilityBtnClose.removeEventListener('click', onCloseNotificationGoodAvailability);

  if (window.matchMedia('screen and (min-width:1024px)').matches) {
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

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

if (notificationGoodAvailabilityBtn) {

  notificationGoodAvailabilityBtn.forEach((notificationBtn) => {
    notificationBtn.addEventListener('click', (evt) => {
      evt.stopPropagation();
      /* Свойство currentTarget  содержит объект, на которого была совершена подписка (у которого вы вызывали addEventListener ). */

      // Товар для уведомления о его наличии
      const good = evt.currentTarget.closest('[data-product]');
      console.log(good);

      body.classList.add('scroll-lock');
      goodAvailabilityModal.classList.add('is-show')

      document.addEventListener('click', onOverlayClick);
      goodAvailabilityBtnClose.addEventListener('click', onCloseNotificationGoodAvailability);

      if (window.matchMedia('screen and (min-width:1024px)').matches) {
        document.addEventListener('keydown', onEscKeyPress);
      }
    })
  })
}

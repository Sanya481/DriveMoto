const body = document.body;
/**
 * Кнопка авторизации
 */
const signInBtn = document.querySelector('[data-sign-in]');
/**
 * Модалка авторизации
 */
const authorizationModal = document.querySelector('[data-modal-login]');
/**
 * Кнопка закрытия
 */
const authorizationModalBtnClose = document.querySelector('[data-close-login-modal]');
/**
 * Кнопка - Показать/скрыть пароль
 */
const passwordViewBtn = document.querySelector('[data-password-view]');
/**
 * Контент модалки
 */
const loginContent = document.querySelector('[data-login-content]');

/**
 * Закрытие по нажатию на ESC
 */
const onEscKeyPress = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();

    body.classList.remove('scroll-lock');
    authorizationModal.classList.remove('is-show');

    if (window.matchMedia('screen and (min-width: 1024px)').matches) {
      document.removeEventListener('keydown', onEscKeyPress);
    }

    authorizationModalBtnClose.removeEventListener('click', onCloseAuthorizationModal);
    passwordViewBtn.removeEventListener('click', onChangeViewPassword);
    document.removeEventListener('click', onClickOverlay);
  }
};

/**
 * Закртыие по нажатию на крестик
 */
const onCloseAuthorizationModal = () => {
  body.classList.remove('scroll-lock');
  authorizationModal.classList.remove('is-show');

  if (window.matchMedia('screen and (min-width: 1024px)').matches) {
    document.removeEventListener('keydown', onEscKeyPress);
  }

  authorizationModalBtnClose.removeEventListener('click', onCloseAuthorizationModal);
  passwordViewBtn.removeEventListener('click', onChangeViewPassword);
  document.removeEventListener('click', onClickOverlay);
};

/**
 * Показать/скрыть пароль
 */
const onChangeViewPassword = (evt) => {
  const groupPasswordBlock = evt.target.closest('[data-group-password]');
  const passwordInput = groupPasswordBlock.querySelector('[data-password-input]');

  if (passwordInput.getAttribute('type') === 'password') {
    passwordInput.setAttribute('type', 'text')
    passwordViewBtn.classList.add('is-show');
  } else {
    passwordInput.setAttribute('type', 'password')
    passwordViewBtn.classList.remove('is-show');
  }
};
/**
 * Закрытие по клику вне области модалки
 */
const onClickOverlay = (evt) => {
  const elementsClickArea = !evt.composedPath().includes(loginContent);

  if (elementsClickArea) {
    body.classList.remove('scroll-lock');
    authorizationModal.classList.remove('is-show');

    if (window.matchMedia('screen and (min-width: 1024px)').matches) {
      document.removeEventListener('keydown', onEscKeyPress);
    }

    authorizationModalBtnClose.removeEventListener('click', onCloseAuthorizationModal);
    passwordViewBtn.removeEventListener('click', onChangeViewPassword);
    document.removeEventListener('click', onClickOverlay);
  }
}

/**
 * Открытие модалки авторизации
 */
const onOpenAuthorizationModal = (evt) => {
  evt.stopPropagation();
  // Чтобы каждый раз при загрузке страницы не появлялось и не раздражало
  authorizationModal.style.background = 'rgba(0, 0, 0, 0.8)';

  body.classList.add('scroll-lock');
  authorizationModal.classList.add('is-show');

  if (window.matchMedia('screen and (min-width: 1024px)').matches) {
    // Закрытие по нажатию на ESC
    document.addEventListener('keydown', onEscKeyPress);
  }

  // Закртыие по нажатию на крестик
  authorizationModalBtnClose.addEventListener('click', onCloseAuthorizationModal);
  // Показать/скрыть пароль
  passwordViewBtn.addEventListener('click', onChangeViewPassword);
  // Закрытие модалки по клику вне модалки
  document.addEventListener('click', onClickOverlay);
};


if (signInBtn) {
  // Добавление обработчика если есть кнопка авторизации
  signInBtn.addEventListener('click', onOpenAuthorizationModal);
}



if (window.matchMedia('screen and (max-width: 899px)').matches) {
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const mobileNav = header.querySelector('[data-mobile-nav]');
  const burger = document.querySelector('[data-burger]');
  const burgerCircle = burger.querySelector('[data-burger-circle]');

  burger.addEventListener('click', (evt) => {
    evt.preventDefault();

    body.classList.toggle('scroll-lock');
    // header.classList.toggle('is-show');
    burger.classList.toggle('is-show');

    burger.classList.toggle('is-open');
    burgerCircle.classList.toggle('is-expand');
    mobileNav.classList.toggle('is-open');

  })

}

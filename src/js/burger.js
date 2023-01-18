if (window.matchMedia('screen and (max-width: 767px)').matches) {
  const burger = document.querySelector('[data-burger]');


  burger.addEventListener('click', (evt) => {
    evt.preventDefault();

    burger.classList.toggle('is-open');
  })

}

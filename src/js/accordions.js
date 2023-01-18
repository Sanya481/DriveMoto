
const accordions = document.querySelectorAll('[data-accordion]');


if (accordions) {

  accordions.forEach((accordion) => {

    accordion.addEventListener('click', (evt) => {
      if (evt.target.matches('[data-accordion-btn]')) {
        const accordionBtn = evt.target;
        const accordion = evt.target.closest('[data-accordion]');

        const accordionList = accordion.querySelector('[data-accordion-list]');

        accordion.classList.toggle('is-open');
        accordionBtn.classList.toggle('is-open');

        if (accordionBtn.classList.contains('is-open')) {
          accordionList.style.maxHeight = `${accordionList.scrollHeight}px`;
        } else {
          accordionList.style.maxHeight = 0;
        }



        console.log(accordionBtn)
      }
    })
  })
}

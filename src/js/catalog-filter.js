if (window.matchMedia('screen and (max-width: 767px)').matches) {

  const pageBody = document.body;

  const pageCatalog = document.querySelector('[data-page-catalog]');
  const filterCatalog = pageCatalog.querySelector('[data-filter-catalog]');
  const filterCatalogCloseBtn = pageCatalog.querySelector('[data-filter-catalog-close]');

  const filterMobileBtn = document.querySelector('[data-filter-mobile]');


  const onFilterPopupClose = () => {
    filterCatalog.classList.remove('is-open');
    pageBody.classList.remove('scroll-lock');

    filterCatalogCloseBtn.removeEventListener('click', onFilterPopupClose);
  }

  const onFilterPopupOpen = () => {

    filterCatalog.classList.add('is-open');
    pageBody.classList.add('scroll-lock');
    filterCatalogCloseBtn.addEventListener('click', onFilterPopupClose);
  }

  if (filterMobileBtn) {
    filterMobileBtn.addEventListener('click', onFilterPopupOpen);
  }



}







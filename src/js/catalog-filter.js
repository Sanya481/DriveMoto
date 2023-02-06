if (window.matchMedia('screen and (max-width: 1023px)').matches) {

  const pageBody = document.body;
  // Общая секция с каталогом и фильтром
  const pageCatalog = document.querySelector('[data-page-catalog]');

  if (pageCatalog) {
    // Фильтр
    const filterCatalog = pageCatalog.querySelector('[data-filter-catalog]');
    // Кнопка закрытия фильтра
    const filterCatalogCloseBtn = pageCatalog.querySelector('[data-filter-catalog-close]');
    // Кнопка открытия фильтра
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
}







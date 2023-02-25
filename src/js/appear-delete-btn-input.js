// Появление крестика при наборе текста и удаление текста

// Блок с вводом текста
const presearch = document.querySelector('[data-presearch]');

if (presearch) {
  // Поле для ввода текста
  const presearchInputField = presearch.querySelector('[data-presearch-input]');
  // Кнопка удаления набранного текста
  const presearchResetBtn = presearch.querySelector('[data-presearch-reset]');

  /**
   * @description Появление/скрытие кнопки сброса набранного текста
   */
  const onAppearDeleteTextBtn = () => {
    if (presearchInputField.value !== "") {
      presearchResetBtn.classList.add('is-active');
    } else {
      presearchResetBtn.classList.remove('is-active');
    }
  }

  /**
   * @description Удаление текста, если в поле есть текст
   */
  const onInputTextDelete = (evt) => {
    if (evt.target.matches('[data-presearch-reset]')) {
      if (presearchInputField.value !== "") {
        presearchInputField.value = "";
        presearchResetBtn.classList.remove('is-active');
      }
    }
  }

  // Удаление текста
  presearch.addEventListener('click', onInputTextDelete);

  // Обработчик ввода текста в поле ввода
  presearchInputField.addEventListener('input', onAppearDeleteTextBtn);
}

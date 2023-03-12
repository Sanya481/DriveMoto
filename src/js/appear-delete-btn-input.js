// Появление крестика при наборе текста и удаление текста

// Блок с вводом текста
const presearchBlocks = Array.from(document.querySelectorAll('[data-presearch]'));

if (presearchBlocks.length !== 0) {

  let presearchInputField;
  let presearchResetBtn;

  presearchBlocks.forEach((block) => {
    // Поле для ввода текста
    presearchInputField = block.querySelector('[data-presearch-input]');
    // Кнопка удаления набранного текста
    presearchResetBtn = block.querySelector('[data-presearch-reset]');
  })

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

  if (presearchInputField.value !== "") {
    presearchResetBtn.classList.add('is-active');
  }

  // Удаление текста
  presearchBlocks.forEach((block) => {
    block.addEventListener('click', onInputTextDelete);
  })

  // Обработчик ввода текста в поле ввода
  presearchInputField.addEventListener('input', onAppearDeleteTextBtn);
}

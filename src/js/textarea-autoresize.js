// Все текстовые поля
const textareaField = document.querySelectorAll('[data-autoresize]');

if (textareaField) {

  textareaField.forEach((textarea) => {
    // Высота каждого textarea, которая задана в стилях
    let textareaHeight = textarea.offsetHeight;

    textarea.addEventListener('input', (evt) => {

      // Устанавливаем высоту, которая задана в стилях
      textarea.style.height = `${textareaHeight}px`;

      // Изменяем высоту textarea с которым взаимодействуем
      textarea.style.height = `${evt.target.scrollHeight}px`;
    })
  })
}

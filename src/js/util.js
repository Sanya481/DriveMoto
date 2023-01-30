// /**
// * @description Ловушка фокуса
// */
// export const trapFocus = (evt) => {
//   // Элементы списка можно изменять и это может быть не только button
//   const focusableEls = selectList.querySelectorAll('button');
//   const firstFocusableEl = focusableEls[0];
//   const lastFocusableEl = focusableEls[focusableEls.length - 1];
//   const isTabPressed = (evt.key === 'Tab' || evt.key === KEYCODE_TAB)

//   if (!isTabPressed) {
//     return
//   }

//   /* shift + tab */
//   if (evt.shiftKey) {
//     if (document.activeElement === firstFocusableEl) {
//       lastFocusableEl.focus();
//       evt.preventDefault();
//     }
//     /* tab */
//   } else {
//     if (document.activeElement === lastFocusableEl) {
//       firstFocusableEl.focus()
//       evt.preventDefault();
//     }
//   }
// }


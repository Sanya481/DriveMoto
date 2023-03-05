const body = document.body;

const descriptionIssueBtn = document.querySelector('[data-description-issue]');

const descriptionIssueModal = document.querySelector('[data-description-issue-modal]');

const descriptionIssueContent = document.querySelector('[data-description-issue-content]');

const descriptionIssueCloseBtn = document.querySelector('[data-description-issue-close-btn]');


const onDescriptionIssueClose = () => {
  body.classList.remove('scroll-lock');
  descriptionIssueModal.classList.remove('is-show');

  document.removeEventListener('click', onOverlayClick);
  descriptionIssueCloseBtn.removeEventListener('click', onDescriptionIssueClose);

  if (window.matchMedia('screen and (min-width: 1024px)').matches) {
    document.removeEventListener('keydown', onEscKeyPress);
  }
}

const onEscKeyPress = (evt) => {
  evt.preventDefault();

  if (evt.key === 'Escape') {
    body.classList.remove('scroll-lock');
    descriptionIssueModal.classList.remove('is-show');

    document.removeEventListener('click', onOverlayClick);
    descriptionIssueCloseBtn.removeEventListener('click', onDescriptionIssueClose);

    if (window.matchMedia('screen and (min-width: 1024px)').matches) {
      document.removeEventListener('keydown', onEscKeyPress);
    }
  }
}

const onOverlayClick = (evt) => {
  const elementsClickArea = !evt.composedPath().includes(descriptionIssueContent);

  if (elementsClickArea) {
    body.classList.remove('scroll-lock');
    descriptionIssueModal.classList.remove('is-show');

    document.removeEventListener('click', onOverlayClick);
    descriptionIssueCloseBtn.removeEventListener('click', onDescriptionIssueClose);

    if (window.matchMedia('screen and (min-width: 1024px)').matches) {
      document.removeEventListener('keydown', onEscKeyPress);
    }
  }
}

const onDescriptionIssueOpen = (evt) => {
  evt.stopPropagation();

  body.classList.add('scroll-lock');
  descriptionIssueModal.classList.add('is-show');

  document.addEventListener('click', onOverlayClick);
  descriptionIssueCloseBtn.addEventListener('click', onDescriptionIssueClose);

  if (window.matchMedia('screen and (min-width: 1024px)').matches) {
    document.addEventListener('keydown', onEscKeyPress);
  }


}

if (descriptionIssueBtn) {
  descriptionIssueBtn.addEventListener('click', onDescriptionIssueOpen)
}

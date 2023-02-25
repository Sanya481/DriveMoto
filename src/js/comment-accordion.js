// Аккордеон в комментариях

const userReviewBlock = document.querySelector('[data-reviews]');

if (userReviewBlock) {

  // Ответ на отзыв
  userReviewBlock.addEventListener('click', (evt) => {
    if (evt.target.matches('[data-user-comments]')) {
      const userCommentsShowBtn = evt.target;
      const currentUserReviewBlock = userCommentsShowBtn.closest('[data-user-review]');
      const commentsWrapper = currentUserReviewBlock.querySelector('[data-comments-wrapper]');

      commentsWrapper.classList.toggle('is-open');
      userCommentsShowBtn.classList.toggle('is-open');


      if (commentsWrapper.classList.contains('is-open')) {
        commentsWrapper.style.maxHeight = commentsWrapper.scrollHeight + 'px';
      } else {
        commentsWrapper.classList.remove('is-open');
        userCommentsShowBtn.classList.remove('is-open');
        commentsWrapper.style.maxHeight = 0;

      }
    }

    // Ответ на коммент
    if (evt.target.matches('[data-comment-answer-btn]')) {
      const answerCommentBtn = evt.target;

      const currentUserReviewBlock = answerCommentBtn.closest('[data-user-review]');
      const commentsWrapper = currentUserReviewBlock.querySelector('[data-comments-wrapper]');

      const commentItem = answerCommentBtn.closest('[data-user-comment]');
      const commentFooter = commentItem.querySelector('[data-comment-footer]');
      const commentsAnswerForm = commentItem.querySelector('[data-answer-form]');

      commentsAnswerForm.classList.toggle('is-open');
      commentFooter.classList.toggle('is-open');

      if (commentsAnswerForm.classList.contains('is-open')) {
        commentsAnswerForm.style.maxHeight = commentsAnswerForm.scrollHeight + 'px';
        commentsWrapper.style.maxHeight = '100%';
        console.log(commentsWrapper)
      } else {
        commentsAnswerForm.classList.remove('is-open');
        commentFooter.classList.remove('is-open');
        commentsAnswerForm.style.maxHeight = 0;
      }
    }

    if (evt.target.matches('[data-comment-answer-btn]')) {

    }

  })
}

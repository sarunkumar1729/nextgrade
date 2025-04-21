const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const isActive = question.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
      q.nextElementSibling.classList.remove('show');
      q.querySelector('span').textContent = '+';
    });

    // Open current if not already active
    if (!isActive) {
      question.classList.add('active');
      question.nextElementSibling.classList.add('show');
      question.querySelector('span').textContent = '×';
    }
  });
});

const accordion = document.querySelectorAll('.faq-question');
const svg = document.querySelectorAll('svg');

accordion.forEach((question) => {
  question.addEventListener('click', (e) => {
    let nextElement = e.target.nextElementSibling;
    nextElement.classList.toggle('closed');
    question.children[1].children[0].classList.toggle('svg-closed');
  });
});

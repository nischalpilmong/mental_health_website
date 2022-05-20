const hamBtn = document.querySelector('.hamburger__btn');
const navBar = document.querySelector('.navbar__nav');
const body = document.querySelector('body');


hamBtn.addEventListener('click', () => {
   hamBtn.classList.toggle('active');
   navBar.classList.toggle('change');
   body.classList.toggle('overflow__hidden');
});
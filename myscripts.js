const burgerButton = document.querySelector('.fa-bars');
const closeButton = document.querySelector('.mobile-menu-i');
const mobileMenu = document.querySelector('.mobile-menu');
// const body = document.querySelector('body');

burgerButton.addEventListener('click', (e) => {
  e.target.style.visibility = 'hidden';
  closeButton.style.visibility = 'visible';
  mobileMenu.classList.remove('mobile-menu');
  mobileMenu.classList.add('mobile-menu-style');
});

closeButton.addEventListener('click', (e) => {
  e.target.style.visibility = 'hidden';
  burgerButton.style.visibility = 'visible';
  mobileMenu.classList.add('mobile-menu');
  mobileMenu.classList.remove('mobile-menu-style');
});

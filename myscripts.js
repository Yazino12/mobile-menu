const burgerButton = document.querySelector('.menu-bars');
const closeButton = document.querySelector('.mobile-menu-i');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('body');

burgerButton.addEventListener('click', (e) => {
  body.style.overflow = 'hidden';
  e.target.style.visibility = 'hidden';
  closeButton.style.visibility = 'visible';
  mobileMenu.classList.remove('mobile-menu');
  mobileMenu.classList.add('mobile-menu-style');
});

closeButton.addEventListener('click', (e) => {
  body.style.overflow = 'visible';
  e.target.style.visibility = 'hidden';
  burgerButton.style.visibility = 'visible';
  mobileMenu.classList.add('mobile-menu');
  mobileMenu.classList.remove('mobile-menu-style');
});

for (let i = 0; i < 100; i += 1) {
  console.log('Success');
}

if (burgerButton) {
  if (closeButton) {
    console.log('Please try again');
  }
}

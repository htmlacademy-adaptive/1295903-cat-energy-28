const headerNavNoJsClass = 'header__nav--no-js';
const headerNav = document.querySelector(`.${headerNavNoJsClass}`);
const toggleMenuButton = document.querySelector('.nav__toggle');
const menu = document.querySelector('.header__menu');
const menuOpenClass = 'header__menu--is-open';
const toggleMenuButtonOpenClass = 'nav__toggle--is-open';

const toggleMenuOpen = () => {
  menu.classList.toggle(menuOpenClass);
  toggleMenuButton.classList.toggle(toggleMenuButtonOpenClass);
}

if (toggleMenuButton && menu) {
  toggleMenuButton.addEventListener('click', toggleMenuOpen)
}

if (headerNav) {
  headerNav.classList.remove(headerNavNoJsClass);
}

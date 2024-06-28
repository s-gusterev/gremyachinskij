import 'normalize.css';
import './assets/styles/main.css';

const burger = document.querySelector('.header__burger');

const headerNavigation = document.querySelector('.header__nav');
const headerContacts = document.querySelector('.header__top-contacts');

const toggledMenu = () => {
  burger.classList.toggle('header__burger_active');
  const isOpenBurger = burger.classList.contains('header__burger_active');
  burger.ariaLabel = isOpenBurger ? 'Закрыть меню' : 'Открыть меню';

  headerNavigation.classList.toggle('header__nav_open');
  headerContacts.classList.toggle('header__top-contacts_open');

  const positionInfoHeaderNavigation = headerNavigation.getBoundingClientRect();
  const heightHeaderNavigation = positionInfoHeaderNavigation.height;

  headerContacts.style.top = isOpenBurger
    ? 92 + heightHeaderNavigation + 'px'
    : 92 + 'px';
};

burger.addEventListener('click', toggledMenu);

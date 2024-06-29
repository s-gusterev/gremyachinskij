import 'normalize.css';
import './assets/styles/main.css';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const toggledMenu = () => {
  burger.classList.toggle('header__burger_active');
  const isOpenBurger = burger.classList.contains('header__burger_active');
  burger.ariaLabel = isOpenBurger ? 'Закрыть меню' : 'Открыть меню';

  menu.classList.toggle('header__menu_open');
};

burger.addEventListener('click', toggledMenu);

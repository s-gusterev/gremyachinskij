import 'normalize.css';
import './assets/styles/main.css';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const productsSlider = document.querySelector('.products__slider');
const productsList = document.querySelector('.products__list');
const productsSlide = document.querySelectorAll('.products__slide');

const toggledMenu = () => {
  burger.classList.toggle('header__burger_active');
  const isOpenBurger = burger.classList.contains('header__burger_active');
  burger.ariaLabel = isOpenBurger ? 'Закрыть меню' : 'Открыть меню';

  menu.classList.toggle('header__menu_open');
};

burger.addEventListener('click', toggledMenu);

const breakpoint = window.matchMedia('(min-width: 824px)');

let productsSwiper;

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (productsSwiper !== undefined) {
      productsSwiper.destroy(true, true);
      productsSlider.classList.remove('swiper');
      productsList.classList.remove('swiper-wrapper');
      productsSlide.forEach((slide) => {
        slide.classList.remove('swiper-slide');
      });
    }
    return;
  } else if (breakpoint.matches === false) {
    productsSlider.classList.add('swiper');
    productsList.classList.add('swiper-wrapper');
    productsSlide.forEach((slide) => {
      slide.classList.add('swiper-slide');
      slide.style.width = '360px';
    });
    return enableProductsSwiper();
  }
};

const enableProductsSwiper = function () {
  productsSwiper = new Swiper('.swiper', {
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    loop: true,
    speed: 700,
    spaceBetween: 40,
    watchOverflow: true,
    modules: [Navigation],
    navigation: {
      prevEl: '.products__button-slider-prev',
      nextEl: '.products__button-slider-next',
    },
    on: {
      resize: function () {
        productsSwiper.update();
      },
    },
  });
};

breakpoint.addEventListener('change', () => breakpointChecker());

breakpointChecker();

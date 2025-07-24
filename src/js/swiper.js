import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 16,
  pagination: {
    pagination: false,
  },
  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    enabled: true,
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1200: {
      navigation: {
        enabled: true,
      },
      scrollbar: {
        enabled: false,
      },
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
    },
  },
});

import Swiper from "swiper";
import "swiper/css";

const heroSlider = document.querySelector(".hero__slider");

if (heroSlider) {
  new Swiper(heroSlider, {
    slidesPerView: 1.2,
    spaceBetween: 15,
    speed: 600,
    grabCursor: true,
    watchOverflow: true,
    rewind: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        allowTouchMove: false,
        grabCursor: false,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
        allowTouchMove: false,
        grabCursor: false,
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
        grabCursor: false,
      },
      1920: {
        slidesPerView: 2,
        spaceBetween: 40,
        allowTouchMove: false,
        grabCursor: false,
      },
    },
  });
}

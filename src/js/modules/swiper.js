import Swiper from "swiper";
import "swiper/css";

const heroSlider = document.querySelector(".hero__slider");

if (heroSlider) {
  new Swiper(heroSlider, {
    slidesPerView: 1.2,
    spaceBetween: 15,
    speed: 500,
    grabCursor: true,
    loop: true,
  });
}

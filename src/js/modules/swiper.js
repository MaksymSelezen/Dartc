import Swiper from "swiper";
import "swiper/css";

const heroSlider = document.querySelector(".hero__slider");

if (heroSlider) {
  new Swiper(heroSlider, {
    slidesPerView: "auto",
    spaceBetween: 15,
    speed: 500,
    grabCursor: true,
    watchOverflow: true,
    loop: true,
  });
}

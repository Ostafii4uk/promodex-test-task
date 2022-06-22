const swiper = new Swiper(".adaptive__swiper", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

const swiperm = new Swiper(".mobile__swiper", {
  slidesPerView: 2,
  spaceBetween: 60,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

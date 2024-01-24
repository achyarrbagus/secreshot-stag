new Swiper(".swiper-article", {
  loop: false,
  slidesPerView: 3.5,
  centeredSlides: false,
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.5,
    },

    // when window width is >= 640px
    768: {
      slidesPerView: 3.5,
    },
  },
});

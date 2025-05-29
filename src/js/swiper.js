import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs'

const swiper = new Swiper(".swiper", {
slidesPerView: 1.1,
spaceBetween: 24,
loop: true,
navigation: {
nextEl: ".swiper-next-btn",
prevEl: ".swiper-prev-btn",
},
breakpoints: {

    361: {
      slidesPerView: 4,
      spaceBetween: 24
    },
}
});  





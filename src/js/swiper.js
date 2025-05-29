const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    //centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-next-btn",
      prevEl: ".swiper-prev-btn",
    },
  });





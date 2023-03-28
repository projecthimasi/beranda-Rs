var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   freeMode: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   loop: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   }
});
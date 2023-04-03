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


// splide
var splide = new Splide('#splide0', {
   pagination: false,
   type: 'loop',
   perPage: 3,
   autoplay: true,
   gap: '3rem',
   breakpoints: {
      1600: {
         perPage: 3,
         gap: '3rem',
      },
      1400: {
         perPage: 3,
         gap: '1rem',
      },
      1000: {
         perPage: 3,
         gap: '.7rem',
      },
      800: {
         perPage: 2,
         gap: '.7rem',
      },
      640: {
         perPage: 2,
         gap: '.7rem',
      },
      480: {
         perPage: 1,
         gap: '2rem'
      },
   },
});

splide.mount();

var splide = new Splide('#splide1', {
   arrows: false,
   type: 'loop',
   autoplay: true,
   perPage: 3,
   gap: '1rem',
   breakpoints: {
      1600: {
         perPage: 3,
         gap: '.7rem',
      },
      1400: {
         perPage: 2,
         gap: '.7rem',
      },
      1000: {
         perPage: 1,
         gap: '.7rem',
      },
      800: {
         perPage: 1,
         gap: '.7rem',
      },
   },
});

splide.mount();

var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 2,
   freeMode: true,
   loop: true,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   }
});

var swiper = new Swiper(".youSwiper", {
   pagination: {
      el: ".swiper-pagination",
   },
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});



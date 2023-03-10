var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
      390: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1080:{
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  var swiper = new Swiper(".Blog_mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      390: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1080:{
        slidesPerView: 2,
        spaceBetween: 20,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   loop: true,      
//   effect: "fade",
//   pagination: {
//     el: ".swiper-pagination",
//     
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  //   effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

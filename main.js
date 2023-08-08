const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 8000
  },
  speed: 500,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

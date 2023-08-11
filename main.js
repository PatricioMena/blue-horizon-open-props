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

///////////////////////////////////////
// Mobile Menu
const mobileBtn = document.querySelector('#mobile-nav-toggle');
const navItems = document.querySelector('#navigation-items');
const mainNav = document.querySelector('#main-navigation');

const toggleMenu = () => {
  mainNav.toggleAttribute('open');
  const visibility = navItems.getAttribute('data-visible');
  if (visibility === 'false') {
    navItems.setAttribute('data-visible', true);
    mobileBtn.setAttribute('aria-expanded', true);
  } else if (visibility === 'true') {
    navItems.setAttribute('data-visible', false);
    mobileBtn.setAttribute('aria-expanded', false);
  }
};

mobileBtn.addEventListener('click', toggleMenu);

///////////////////////////////////////
// Scroll animation
const reveal = () => {
  let reveals = Array.from(document.querySelectorAll('.reveal'));
  for (let i = 0; i < reveals.length; i++) {
    // ↓ height of viewport
    let windowHeight = window.innerHeight;
    // ↓ distance of reveal element from top of viewport
    let elementTop = reveals[i].getBoundingClientRect().top;
    // ↓ height element will be revealed to the user
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
};

// event listenet to run every time the user scrolls the page in any direction
window.addEventListener('scroll', reveal);
reveal();

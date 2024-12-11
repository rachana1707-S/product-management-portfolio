// script.js

// Add a class when the slide enters the viewport
const slides = document.querySelectorAll('.slide');

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
};

const handleScroll = () => {
  slides.forEach((slide) => {
    if (isInViewport(slide)) {
      slide.classList.add('in-view');
    }
  });
};

// Trigger animations on scroll
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

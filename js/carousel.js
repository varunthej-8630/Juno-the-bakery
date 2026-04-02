// ===================================
// JUNO BAKERY — CAROUSEL JS
// ===================================

let currentSlide = 0;
const totalSlides = 4;
let autoplayInterval;
const AUTOPLAY_DELAY = 6000;

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  startAutoplay();
  initScrollReveal();
});

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides[0]) slides[0].classList.add('active');
  const dots = document.querySelectorAll('.pagination-dot');
  if (dots[0]) dots[0].classList.add('active');
}

function goToSlide(slideIndex) {
  stopAutoplay();
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.pagination-dot');
  if (!slides.length) return;

  slides[currentSlide].classList.remove('active');
  dots[currentSlide] && dots[currentSlide].classList.remove('active');

  currentSlide = slideIndex;

  slides[currentSlide].classList.add('active');
  dots[currentSlide] && dots[currentSlide].classList.add('active');

  setTimeout(() => startAutoplay(), 3000);
}

function nextSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}
function prevSlide() {
  goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

function startAutoplay() {
  stopAutoplay();
  autoplayInterval = setInterval(() => {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots   = document.querySelectorAll('.pagination-dot');
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    dots[currentSlide] && dots[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
    dots[currentSlide] && dots[currentSlide].classList.add('active');
  }, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (autoplayInterval) clearInterval(autoplayInterval);
}

// Simple scroll-reveal for elements with data-reveal attribute
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    io.observe(el);
  });
}

// Tab filter for menu section
window.filterMenu = function(category, btn) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.menu-card[data-category]').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
};

// Window exposes
window.prevSlide   = prevSlide;
window.nextSlide   = nextSlide;
window.goToSlide   = goToSlide;
window.scrollToMenu = function() {
  const m = document.getElementById('menu');
  if (m) m.scrollIntoView({ behavior: 'smooth' });
};

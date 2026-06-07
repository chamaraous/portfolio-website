/* ════════════════════════════
   SCROLL ANIMATIONS
════════════════════════════ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.hidden-left, .hidden-right').forEach(el => {
  observer.observe(el);
});

/* ════════════════════════════
   PROJECT CAROUSEL
════════════════════════════ */
const carousel = document.getElementById('carousel');
const cards = carousel.querySelectorAll('.proj-card');
let currentIndex = 0;
const visibleCount = 3;

function updateCarousel() {
  cards.forEach((card, i) => {
    card.style.display = (i >= currentIndex && i < currentIndex + visibleCount)
      ? 'block'
      : 'none';
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = Math.min(cards.length - visibleCount, currentIndex + 1);
  updateCarousel();
});

updateCarousel();

/* ════════════════════════════
   SMOOTH SCROLL NAV LINKS
════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ════════════════════════════
   ACTIVE NAV LINK ON SCROLL
════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#a78bfa';
    }
  });
});

/* ════════════════════════════
   DARK / LIGHT MODE TOGGLE
════════════════════════════ */
const darkBtn = document.querySelector('.dark-btn');
let isDark = true;

darkBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.body.style.background = isDark ? '#050a1a' : '#f0f0f5';
  document.body.style.color = isDark ? '#fff' : '#111';
  darkBtn.textContent = isDark ? '🌙' : '☀️';
});

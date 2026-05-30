// Loader
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Burger Menu
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => navLinks.classList.toggle('active'));

// Back to Top
const backBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backBtn.classList.add('show');
  else backBtn.classList.remove('show');
});
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Scroll Reveal for fade-in sections
const fadeElements = document.querySelectorAll('.service-card, .videos, .partners, .service-cta');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) el.classList.add('visible');
    else el.classList.remove('visible');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

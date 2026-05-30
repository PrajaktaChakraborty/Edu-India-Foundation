/* ===============================
   Loader Animation
=============================== */
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

/* ===============================
   Burger Menu Toggle
=============================== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('active'));
}

/* ===============================
   Navigation Shadow on Scroll
=============================== */
const mainNav = document.querySelector('nav');
function updateNavShadow() {
  if (!mainNav) return;
  if (window.scrollY > 10) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', updateNavShadow);
window.addEventListener('load', updateNavShadow);
updateNavShadow();

/* ===============================
   Scroll Reveal for Sections
=============================== */
const sections = document.querySelectorAll('section');
function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < triggerBottom && rect.bottom > 0) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
revealSections();

/* ===============================
   Count-Up Animation (Stats)
=============================== */
const counters = document.querySelectorAll('.stats .count');
let countersStarted = false;

function startCountersIfVisible() {
  if (countersStarted || counters.length === 0) return;
  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;
  const rect = statsSection.getBoundingClientRect();
  const triggerBottom = window.innerHeight * 0.85;
  if (rect.top < triggerBottom && rect.bottom > 0) {
    countersStarted = true;
    counters.forEach(el => animateCount(el));
  }
}

function animateCount(el) {
  const target = parseInt(el.getAttribute('data-target'), 10) || 0;
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1500; // ms
  const start = 1;
  const startTime = performance.now();

  function formatNumber(num) {
    return num.toLocaleString('en-IN'); // comma grouping
  }

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = Math.floor(start + (target - start) * progress);
    el.textContent = formatNumber(value) + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = formatNumber(target) + suffix;
    }
  }
  requestAnimationFrame(update);
}

window.addEventListener('scroll', startCountersIfVisible);
window.addEventListener('load', startCountersIfVisible);

/* ===============================
   WhatsApp Enquiry Form Submission
=============================== */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault(); // stop normal submit

    const name  = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();

    // Build the WhatsApp message
    const msg = `New enquiry from Edu India Foundation website:
Name: ${name}
Email: ${email}
Phone: ${phone}`;

    const encodedMsg = encodeURIComponent(msg);
    const dest = '917002086090'; // +91 70020 86090

    // Open WhatsApp
    const waURL = `https://wa.me/${dest}?text=${encodedMsg}`;
    window.open(waURL, '_blank'); // open in new tab (or change to location.href = waURL)

    // Optional: clear the form
    form.reset();
  });
});

/* =======================================================
   EDU INDIA FOUNDATION - SAAS SCROLL ANIMATIONS ENGINE
   ======================================================= */

// LOADER & INITIALIZATION
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  initializeAllAnimations();
});

function initializeAllAnimations() {
  initScrollProgress();
  initGlassNav();
  initSplitText();
  initScrollObserver();
  init3DTiltDelegated();
  initStatsObserver();
}

/* =======================================================
   1. DYNAMIC SCROLL PROGRESS BAR
   ======================================================= */
function initScrollProgress() {
  if (!document.querySelector('.scroll-progress')) {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.prepend(progressBar);
  }

  const progressBar = document.querySelector('.scroll-progress');
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  });
}

/* =======================================================
   2. GLASSMORPHIC NAVIGATION SCROLL WATCHER
   ======================================================= */
function initGlassNav() {
  const mainNav = document.querySelector('nav');
  function updateNav() {
    if (!mainNav) return;
    if (window.scrollY > 20) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNav);
  updateNav();
}

/* =======================================================
   3. WORD-BY-WORD TEXT SPLIT FUNCTION
   ======================================================= */
function initSplitText() {
  const splitTargets = document.querySelectorAll('.split-text-target');
  
  splitTargets.forEach(target => {
    const originalText = target.textContent.trim();
    const words = originalText.split(/\s+/);
    target.innerHTML = ''; // Clear original text
    
    words.forEach((word, index) => {
      const container = document.createElement('span');
      container.className = 'split-word-container';
      
      const span = document.createElement('span');
      span.className = 'split-word';
      span.textContent = word;
      span.style.transitionDelay = `${index * 0.05}s`;
      
      container.appendChild(span);
      target.appendChild(container);
      
      if (index < words.length - 1) {
        target.appendChild(document.createTextNode(' '));
      }
    });
  });
}

/* =======================================================
   4. SCROLL INTERSECTION OBSERVER FOR TRANSITIONS
   ======================================================= */
function initScrollObserver() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        if (entry.target.classList.contains('stagger-container')) {
          const children = entry.target.children;
          Array.from(children).forEach((child, index) => {
            if (!child.style.transitionDelay) {
              child.style.transitionDelay = `${index * 0.08}s`;
            }
            child.classList.add('animated');
            // If the child is a reveal-on-scroll, trigger its entrance directly
            child.classList.add('visible');
          });
        }
        
        const splitWords = entry.target.querySelectorAll('.split-word');
        if (splitWords.length > 0) {
          splitWords.forEach(word => word.classList.add('revealed'));
        }
        
        // Dynamic nested cards trigger
        const revealChildren = entry.target.querySelectorAll('.reveal-on-scroll');
        revealChildren.forEach(child => child.classList.add('animated'));

        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Setup standard elements
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(el => observer.observe(el));
  
  const staggerContainers = document.querySelectorAll('.stagger-container');
  staggerContainers.forEach(container => observer.observe(container));
  
  // Create helper to re-observe dynamic templates if needed
  window.observeAnimatedElements = function() {
    const dynamicElements = document.querySelectorAll('.reveal-on-scroll:not(.animated)');
    dynamicElements.forEach(el => observer.observe(el));
  };
}

/* =======================================================
   5. 3D PERSPECTIVE CARD TILT MOUSE TRACKER (EVENT DELEGATION)
   ======================================================= */
function init3DTiltDelegated() {
  document.addEventListener('mousemove', e => {
    const card = e.target.closest('.tilt-card');
    if (!card) return;
    const inner = card.querySelector('.tilt-card-inner');
    if (!inner) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    const rotY = ((x - xc) / xc) * 8;
    const rotX = -((y - yc) / yc) * 8;
    
    inner.style.setProperty('--rx', rotX.toFixed(2));
    inner.style.setProperty('--ry', rotY.toFixed(2));
  });
  
  document.addEventListener('mouseout', e => {
    const card = e.target.closest('.tilt-card');
    if (!card) return;
    const inner = card.querySelector('.tilt-card-inner');
    if (!inner) return;
    
    // Smooth reset when leaving card
    inner.style.setProperty('--rx', '0');
    inner.style.setProperty('--ry', '0');
  });
}

/* =======================================================
   6. COUNTER ANIMATION WITH INTERSECTION OBSERVER
   ======================================================= */
function initStatsObserver() {
  const counters = document.querySelectorAll('.stats .count');
  if (counters.length === 0) return;
  
  const statsSection = document.querySelector('.stats');
  if (!statsSection) return;
  
  let countersStarted = false;
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        counters.forEach(el => animateCount(el));
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  observer.observe(statsSection);
}

function animateCount(el) {
  const target = parseInt(el.getAttribute('data-target'), 10) || 0;
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1800; // ms
  const start = 1;
  const startTime = performance.now();

  function formatNumber(num) {
    return num.toLocaleString('en-IN');
  }

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutQuad = progress * (2 - progress);
    const value = Math.floor(start + (target - start) * easeOutQuad);
    
    el.textContent = formatNumber(value) + suffix;
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = formatNumber(target) + suffix;
    }
  }
  requestAnimationFrame(update);
}

/* =======================================================
   7. BURGER MENU TOGGLE
   ======================================================= */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => navLinks.classList.toggle('active'));
}

/* =======================================================
   8. WHATSAPP ENQUIRY FORM SUBMISSION (PRESERVED)
   ======================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();

    const msg = `New enquiry from Edu India Foundation website:
Name: ${name}
Email: ${email}
Phone: ${phone}`;

    const encodedMsg = encodeURIComponent(msg);
    const dest = '917002086090';

    const waURL = `https://wa.me/${dest}?text=${encodedMsg}`;
    window.open(waURL, '_blank');

    form.reset();
  });
});

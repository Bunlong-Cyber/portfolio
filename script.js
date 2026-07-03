// ============================================================================
// This file wires up behavior only — all editable CONTENT (your projects,
// certs, experience, skills, etc.) lives in index.html, not here.
// You generally will NOT need to touch this file when adding content, as
// long as new HTML re-uses these existing patterns:
//   class="reveal"        → fades/slides in on scroll (any new element)
//   data-fill="NN"        → animates a bar's width to NN% on scroll
//                            (used by skill bars, hero gauges, CTF bars)
//   <section id="...">    → automatically gets nav-highlighting IF a
//                            matching <a href="#id"> exists in .nav-links
// ============================================================================

// ---------------------------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------------------------
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// ---------------------------------------------------------------------------
// Terminal boot sequence in hero console
// ---------------------------------------------------------------------------
const bootLines = [
  { text: '$ whoami', cls: 'fade' },
  { text: 'bo.bunlong // foundation_year → year_02', cls: 'ok' },
  { text: '$ cat profile.txt', cls: 'fade' },
  { text: 'institution : Cambodia Academy of Digital Technology (CADT)', cls: 'info' },
  { text: 'department  : TN Department', cls: 'info' },
  { text: 'track       : Cybersecurity', cls: 'info' },
  { text: 'focus       : SOC Operations · Purple Team', cls: 'info' },
  { text: '$ status --check', cls: 'fade' },
  { text: '[OK] curiosity........... online', cls: 'ok' },
  { text: '[OK] discipline.......... online', cls: 'ok' },
  { text: '[..] expertise........... in_progress', cls: 'warn' },
];

const consoleBody = document.getElementById('consoleBody');

function typeLine(el, text, speed = 14) {
  return new Promise((resolve) => {
    let i = 0;
    const span = document.createElement('span');
    el.appendChild(span);
    const interval = setInterval(() => {
      span.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function bootSequence() {
  if (!consoleBody) return;
  const cursor = document.createElement('span');
  cursor.className = 'type-cursor';
  for (const line of bootLines) {
    const row = document.createElement('div');
    row.className = 'line ' + line.cls;
    consoleBody.insertBefore(row, consoleBody.lastElementChild);
    await typeLine(row, line.text, 10);
    await new Promise(r => setTimeout(r, 90));
  }
}

// Run boot sequence once hero is visible
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      bootSequence();
      heroObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

const heroConsole = document.querySelector('.console');
if (heroConsole) heroObserver.observe(heroConsole);

// ---------------------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------------------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ---------------------------------------------------------------------------
// Animate skill / gauge / ctf progress bars when they scroll into view
// ---------------------------------------------------------------------------
const fillEls = document.querySelectorAll('[data-fill]');
const fillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const value = target.getAttribute('data-fill');
      requestAnimationFrame(() => {
        target.style.width = value + '%';
      });
      fillObserver.unobserve(target);
    }
  });
}, { threshold: 0.3 });
fillEls.forEach(el => {
  el.style.width = '0%';
  el.style.transition = 'width 1s cubic-bezier(.2,.8,.2,1)';
  fillObserver.observe(el);
});

// ---------------------------------------------------------------------------
// Active nav link highlight
// ---------------------------------------------------------------------------
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.style.color = '');
      link.style.color = 'var(--green)';
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));

// ---------------------------------------------------------------------------
// Footer year
// ---------------------------------------------------------------------------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
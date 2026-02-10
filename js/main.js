(function () {
  'use strict';

  // Nav scroll state
  const header = document.querySelector('.site-header');
  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Intersection observer — fade-up elements
  const fadeEls = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });

  // Skill bar animation — trigger when skills section enters view
  const skillsSection = document.querySelector('.about');
  const skillFills = document.querySelectorAll('.skill-fill');

  if (skillsSection) {
    const skillObserver = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting) {
          skillFills.forEach(function (bar) {
            bar.classList.add('animate');
          });
          skillObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    skillObserver.observe(skillsSection);
  }

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav() {
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 80;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });

    navItems.forEach(function (link) {
      link.style.color = '';
      const href = link.getAttribute('href').slice(1);
      if (href === current) {
        link.style.color = 'var(--text)';
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
}());

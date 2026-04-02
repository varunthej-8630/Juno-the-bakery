// js/mobileMenu.js
export function initMobileMenu() {
  const body = document.body;
  if (document.querySelector('.mobile-menu-overlay')) return; // Check if already initialized

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  overlay.innerHTML = `
    <div class="mobile-menu-content">
      <div class="mobile-menu-header">
        <div class="nav-logo-icon"><span></span><span></span><span></span><span></span></div>
        <button class="close-mobile-menu">&times;</button>
      </div>
      <div class="mobile-nav-links">
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="about.html">Our Story</a>
        <a href="blog.html">Journal</a>
      </div>
      <div class="mobile-menu-footer">
        <a href="menu.html" class="nav-cta-mobile">Order Now</a>
      </div>
    </div>
  `;
  body.appendChild(overlay);

  // Close logic
  const closeBtn = overlay.querySelector('.close-mobile-menu');
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    body.style.overflow = '';
  });

  // Close when clicking a link
  const links = overlay.querySelectorAll('.mobile-nav-links a, .nav-cta-mobile');
  links.forEach(link => {
      link.addEventListener('click', () => {
          overlay.classList.remove('active');
          body.style.overflow = '';
      });
  });

  // Ensure hamburger button exists and attach click listener
  document.querySelectorAll('.navbar').forEach(nav => {
      let btn = nav.querySelector('.nav-hamburger');
      if (!btn) {
          btn = document.createElement('button');
          btn.className = 'nav-hamburger';
          btn.innerHTML = '<span></span><span></span><span></span>';
          nav.appendChild(btn);
      }
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          overlay.classList.add('active');
          body.style.overflow = 'hidden';
      });
  });

  // Override the global toggleMobileMenu function just in case
  window.toggleMobileMenu = function() {
      overlay.classList.add('active');
      body.style.overflow = 'hidden';
  };
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

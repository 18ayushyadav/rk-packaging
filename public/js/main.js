// ===== RK Packaging — Main JS =====

document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const spans = hamburger.querySelectorAll('span');
      if (navLinks.classList.contains('show')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Scroll reveal animation
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const successMsg = document.getElementById('formSuccess');
      btn.disabled = true;
      btn.textContent = 'Sending...';

      try {
        const data = {
          name: contactForm.name.value,
          phone: contactForm.phone.value,
          message: contactForm.message.value
        };

        const res = await fetch('/api/contacts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (res.ok) {
          successMsg.classList.add('show');
          contactForm.reset();
          setTimeout(() => successMsg.classList.remove('show'), 5000);
        } else {
          const err = await res.json();
          alert(err.message || 'Failed to send message');
        }
      } catch (err) {
        alert('Network error. Please try again.');
      }

      btn.disabled = false;
      btn.textContent = 'Send Message';
    });
  }

  // Load products dynamically on products page
  const productsContainer = document.getElementById('productsGrid');
  if (productsContainer && productsContainer.dataset.dynamic === 'true') {
    loadProducts();
  }

  // Load gallery dynamically
  const galleryContainer = document.getElementById('galleryGrid');
  if (galleryContainer && galleryContainer.dataset.dynamic === 'true') {
    loadGallery();
  }
});

async function loadProducts() {
  const container = document.getElementById('productsGrid');
  try {
    const res = await fetch('/api/products');
    const products = await res.json();

    if (products.length === 0) {
      // Keep static fallback cards
      return;
    }

    // Prepend dynamic products before static ones
    const dynamicHTML = products.map(p => `
      <div class="product-card reveal active">
        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          ${p.benefits ? `<div class="product-benefits">${p.benefits.split(',').map(b => `<span>${b.trim()}</span>`).join('')}</div>` : ''}
        </div>
      </div>
    `).join('');

    container.insertAdjacentHTML('afterbegin', dynamicHTML);
  } catch (err) {
    console.log('Could not load products from API, showing static content.');
  }
}

async function loadGallery() {
  const container = document.getElementById('galleryGrid');
  try {
    const res = await fetch('/api/gallery');
    const images = await res.json();

    if (images.length === 0) {
      container.innerHTML = `
        <div class="gallery-empty">
          <div class="icon">📷</div>
          <h3>Gallery Coming Soon</h3>
          <p>We're adding photos of our work. Check back soon!</p>
        </div>`;
      return;
    }

    container.innerHTML = images.map(img => `
      <div class="gallery-item reveal active">
        <img src="${img.image}" alt="${img.caption || 'RK Packaging'}" loading="lazy">
        ${img.caption ? `<div class="caption">${img.caption}</div>` : ''}
      </div>
    `).join('');
  } catch (err) {
    console.log('Could not load gallery from API.');
  }
}

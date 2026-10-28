// ===== RK Packaging — Admin Panel JS =====

const API_BASE = '/api';

// Auth helpers
function getToken() { return localStorage.getItem('adminToken'); }
function setToken(token) { localStorage.setItem('adminToken', token); }
function removeToken() { localStorage.removeItem('adminToken'); }

function authHeaders() {
  return {
    'Authorization': 'Bearer ' + getToken()
  };
}

function authHeadersJSON() {
  return {
    'Authorization': 'Bearer ' + getToken(),
    'Content-Type': 'application/json'
  };
}

function requireAuth() {
  if (!getToken()) {
    window.location.href = '/admin/login.html';
    return false;
  }
  return true;
}

function logout() {
  removeToken();
  window.location.href = '/admin/login.html';
}

// ===== LOGIN =====
async function handleLogin(e) {
  e.preventDefault();
  const errorEl = document.getElementById('loginError');
  const btn = e.target.querySelector('button');
  errorEl.classList.remove('show');
  btn.disabled = true;
  btn.textContent = 'Logging in...';

  try {
    const res = await fetch(API_BASE + '/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
      })
    });

    const data = await res.json();
    if (res.ok) {
      setToken(data.token);
      window.location.href = '/admin/dashboard.html';
    } else {
      errorEl.textContent = data.message || 'Invalid credentials';
      errorEl.classList.add('show');
    }
  } catch (err) {
    errorEl.textContent = 'Network error. Please try again.';
    errorEl.classList.add('show');
  }

  btn.disabled = false;
  btn.textContent = 'Sign In';
}

// ===== SEED ADMIN =====
async function seedAdmin() {
  try {
    await fetch(API_BASE + '/auth/seed', { method: 'POST' });
  } catch (e) {}
}

// ===== DASHBOARD =====
async function loadDashboard() {
  if (!requireAuth()) return;

  try {
    const [products, gallery, contacts] = await Promise.all([
      fetch(API_BASE + '/products').then(r => r.json()),
      fetch(API_BASE + '/gallery').then(r => r.json()),
      fetch(API_BASE + '/contacts', { headers: authHeaders() }).then(r => r.json())
    ]);

    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('totalGallery').textContent = gallery.length;
    document.getElementById('totalMessages').textContent = contacts.length;
  } catch (err) {
    console.error('Dashboard load error:', err);
  }
}

// ===== PRODUCTS MANAGEMENT =====
async function loadAdminProducts() {
  if (!requireAuth()) return;

  try {
    const res = await fetch(API_BASE + '/products');
    const products = await res.json();
    const tbody = document.getElementById('productsTableBody');

    if (products.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="empty-state"><div class="icon">📦</div><p>No products yet. Add your first product.</p></td></tr>';
      return;
    }

    tbody.innerHTML = products.map(p => `
      <tr>
        <td><img src="${p.image}" alt="${p.name}"></td>
        <td><strong>${p.name}</strong></td>
        <td>${p.description.substring(0, 80)}...</td>
        <td>${new Date(p.createdAt).toLocaleDateString()}</td>
        <td>
          <button class="btn-edit" onclick="openEditProduct('${p._id}', '${escapeHTML(p.name)}', '${escapeHTML(p.description)}', '${escapeHTML(p.benefits || '')}')">Edit</button>
          <button class="btn-delete" onclick="deleteProduct('${p._id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  } catch (err) {
    console.error('Products load error:', err);
  }
}

async function handleAddProduct(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'Saving...';

  const formData = new FormData();
  formData.append('name', form.productName.value);
  formData.append('description', form.productDesc.value);
  formData.append('benefits', form.productBenefits.value);
  formData.append('image', form.productImage.files[0]);

  try {
    const res = await fetch(API_BASE + '/products', {
      method: 'POST',
      headers: authHeaders(),
      body: formData
    });

    if (res.ok) {
      closeModal('productModal');
      form.reset();
      loadAdminProducts();
    } else {
      const data = await res.json();
      alert(data.message || 'Failed to add product');
    }
  } catch (err) {
    alert('Network error');
  }

  btn.disabled = false;
  btn.textContent = 'Add Product';
}

function openEditProduct(id, name, desc, benefits) {
  document.getElementById('editProductId').value = id;
  document.getElementById('editProductName').value = name;
  document.getElementById('editProductDesc').value = desc;
  document.getElementById('editProductBenefits').value = benefits;
  openModal('editProductModal');
}

async function handleEditProduct(e) {
  e.preventDefault();
  const form = e.target;
  const id = form.editProductId.value;
  const btn = form.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'Saving...';

  const formData = new FormData();
  formData.append('name', form.editProductName.value);
  formData.append('description', form.editProductDesc.value);
  formData.append('benefits', form.editProductBenefits.value);
  if (form.editProductImage.files[0]) {
    formData.append('image', form.editProductImage.files[0]);
  }

  try {
    const res = await fetch(API_BASE + '/products/' + id, {
      method: 'PUT',
      headers: authHeaders(),
      body: formData
    });

    if (res.ok) {
      closeModal('editProductModal');
      loadAdminProducts();
    } else {
      alert('Failed to update product');
    }
  } catch (err) {
    alert('Network error');
  }

  btn.disabled = false;
  btn.textContent = 'Save Changes';
}

async function deleteProduct(id) {
  if (!confirm('Are you sure you want to delete this product?')) return;

  try {
    const res = await fetch(API_BASE + '/products/' + id, {
      method: 'DELETE',
      headers: authHeaders()
    });

    if (res.ok) {
      loadAdminProducts();
    } else {
      alert('Failed to delete product');
    }
  } catch (err) {
    alert('Network error');
  }
}

// ===== GALLERY MANAGEMENT =====
async function loadAdminGallery() {
  if (!requireAuth()) return;

  try {
    const res = await fetch(API_BASE + '/gallery');
    const images = await res.json();
    const grid = document.getElementById('galleryAdminGrid');

    if (images.length === 0) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1;"><div class="icon">🖼️</div><p>No gallery images yet. Upload your first image.</p></div>';
      return;
    }

    grid.innerHTML = images.map(img => `
      <div class="gallery-admin-item">
        <img src="${img.image}" alt="${img.caption || ''}">
        <button class="delete-overlay" onclick="deleteGalleryImage('${img._id}')" title="Delete">✕</button>
      </div>
    `).join('');
  } catch (err) {
    console.error('Gallery load error:', err);
  }
}

async function handleUploadGallery(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = 'Uploading...';

  const formData = new FormData();
  formData.append('image', form.galleryImage.files[0]);
  formData.append('caption', form.galleryCaption.value);

  try {
    const res = await fetch(API_BASE + '/gallery', {
      method: 'POST',
      headers: authHeaders(),
      body: formData
    });

    if (res.ok) {
      closeModal('galleryModal');
      form.reset();
      loadAdminGallery();
    } else {
      alert('Failed to upload image');
    }
  } catch (err) {
    alert('Network error');
  }

  btn.disabled = false;
  btn.textContent = 'Upload Image';
}

async function deleteGalleryImage(id) {
  if (!confirm('Delete this image?')) return;

  try {
    const res = await fetch(API_BASE + '/gallery/' + id, {
      method: 'DELETE',
      headers: authHeaders()
    });

    if (res.ok) {
      loadAdminGallery();
    } else {
      alert('Failed to delete image');
    }
  } catch (err) {
    alert('Network error');
  }
}

// ===== CONTACTS MANAGEMENT =====
async function loadAdminContacts() {
  if (!requireAuth()) return;

  try {
    const res = await fetch(API_BASE + '/contacts', { headers: authHeaders() });
    const contacts = await res.json();
    const tbody = document.getElementById('contactsTableBody');

    if (contacts.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="empty-state"><div class="icon">📩</div><p>No messages yet.</p></td></tr>';
      return;
    }

    tbody.innerHTML = contacts.map(c => `
      <tr>
        <td><strong>${escapeHTML(c.name)}</strong></td>
        <td>${escapeHTML(c.phone)}</td>
        <td>${escapeHTML(c.message).substring(0, 100)}${c.message.length > 100 ? '...' : ''}</td>
        <td>${new Date(c.createdAt).toLocaleDateString()}</td>
        <td>
          <button class="btn-delete" onclick="deleteContact('${c._id}')">Delete</button>
        </td>
      </tr>
    `).join('');
  } catch (err) {
    console.error('Contacts load error:', err);
  }
}

async function deleteContact(id) {
  if (!confirm('Delete this message?')) return;

  try {
    const res = await fetch(API_BASE + '/contacts/' + id, {
      method: 'DELETE',
      headers: authHeaders()
    });

    if (res.ok) {
      loadAdminContacts();
    }
  } catch (err) {
    alert('Network error');
  }
}

// ===== MODAL HELPERS =====
function openModal(id) {
  document.getElementById(id).classList.add('show');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('show');
}

// ===== UTILITY =====
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== MOBILE SIDEBAR =====
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('show');
}

// Active sidebar link
document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-nav a').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.classList.add('active');
    }
  });
});

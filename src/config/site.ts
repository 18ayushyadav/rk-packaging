/**
 * Centralized Site & Business Configuration for RK Packaging
 *
 * NOTE: Verified business contact details are configured here.
 * Any environment overrides (e.g. VITE_WHATSAPP_NUMBER) will take precedence.
 */

export const siteConfig = {
  name: 'RK Packaging',
  shortName: 'RK Packaging',
  tagline: 'Custom Packaging Solutions for Growing Businesses',
  description:
    'Indian paper packaging manufacturer specializing in corrugated shipping boxes, custom-printed cartons, and rigid hardboard packaging for businesses.',
  url: import.meta.env.VITE_SITE_URL || 'https://rkpackaging.in',

  // Verified Business Contact Details
  contact: {
    whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER || '918447849753').replace(/\D/g, ''),
    phoneDisplay: import.meta.env.VITE_PHONE_DISPLAY || '+91 84478 49753',
    phoneRaw: '+918447849753',
    email: import.meta.env.VITE_CONTACT_EMAIL || 'info@rkpackaging.in',
    location: {
      street: 'C-107i Industrial Area Phase 1',
      locality: 'Naraina',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      pincode: '110028',
      display: 'C-107i Industrial Area Phase 1, Naraina, Delhi - 110028',
      note: 'Industrial manufacturing facility for bulk & custom packaging inquiries.',
    },
    operatingHours: {
      weekdays: 'Mon – Sat: 9:00 AM – 7:00 PM',
      weekend: 'Sunday: Closed',
    },
  },

  announcement: {
    text: 'Custom Packaging Solutions for Growing Businesses',
    badge: 'B2B Manufacturing',
  },

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],

  quoteCta: {
    label: 'Request a Quote',
    path: '/quote',
  },

  productCategories: [
    { id: 'corrugated-boxes', label: 'Corrugated Boxes', isCore: true },
    { id: 'custom-printed-cartons', label: 'Custom-Printed Cartons', isCore: true },
    { id: 'hardboard-boxes', label: 'Hardboard Boxes', isCore: true },
    { id: 'electronics-packaging', label: 'Electronics Packaging', isCore: false },
    { id: 'cosmetic-packaging', label: 'Beauty & Cosmetic Packaging', isCore: false },
    { id: 'other-paper-packaging', label: 'Other Custom Paper Packaging', isCore: false },
  ] as const,

  quantityRanges: [
    'Under 500',
    '500–999',
    '1,000–4,999',
    '5,000–9,999',
    '10,000+',
    'Not Sure Yet',
  ] as const,
};

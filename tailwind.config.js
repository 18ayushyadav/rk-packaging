/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D62828',
          darkRed: '#A61E22',
          lightRed: '#FEE2E2',
          redWash: '#FFF5F5',
          charcoal: '#202124',
          darkGray: '#374151',
          muted: '#6B7280',
          border: '#E5E7EB',
          borderDark: '#D1D5DB',
          lightBg: '#F7F7F7',
          cardBg: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'brand': '0 8px 20px -4px rgba(214, 40, 40, 0.25)',
      },
    },
  },
  plugins: [],
}

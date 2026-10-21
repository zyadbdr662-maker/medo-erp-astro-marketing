/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sap-blue': '#0057d2',
        'sap-blue-hover': '#0046a8',
        'sap-dark': '#0A192F',
        'sap-dark-secondary': '#1D2D3E',
        'sap-gray': '#F5F6F7',
        'sap-card': '#FFFFFF',
        'sap-text': '#1D2D3E',
        'sap-muted': '#5A6872',
        'sap-gold': '#d4af37',
        'sap-border': '#E5E9EC',
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '8px',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'sap-card': '0 4px 20px -2px rgba(10, 25, 47, 0.08)',
        'sap-hover': '0 12px 30px -4px rgba(0, 87, 210, 0.15)',
      },
    },
  },
  plugins: [],
};

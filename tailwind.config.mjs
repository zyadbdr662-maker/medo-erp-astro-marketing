/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sap-blue': '#0057d2',
        'sap-blue-hover': '#0046a8',
        'sap-dark': '#0A192F',
        'sap-gray': '#F5F6F7',
        'sap-card': '#FFFFFF',
        'sap-text': '#1D2D3E',
        'sap-muted': '#5A6872',
      },
      fontFamily: { arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'] },
      borderRadius: { DEFAULT: '8px', lg: '8px' },
      boxShadow: { subtle: '0 1px 3px 0 rgba(0,0,0,0.05)' },
    },
  },
  plugins: [],
};

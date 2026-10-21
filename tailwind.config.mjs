/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design System 2.0 (Stripe / SAP / Linear / Vercel Palette)
        navy: {
          DEFAULT: '#0A2540',
          light: '#112B4F',
        },
        sap: {
          DEFAULT: '#0057D2',
          hover: '#0046A8',
        },
        cta: {
          DEFAULT: '#0070F3',
          hover: '#0059C9',
        },
        ivory: '#FAFBFC',
        dark: '#0A192F',
        gold: '#C9A227',
        'gray-text': '#6B7A8F',

        // Legacy compatibility aliases
        'sap-blue': '#0057D2',
        'sap-blue-hover': '#0046A8',
        'sap-dark': '#0A192F',
        'sap-dark-secondary': '#1D2D3E',
        'sap-gray': '#F5F6F7',
        'sap-card': '#FFFFFF',
        'sap-text': '#0A2540',
        'sap-muted': '#6B7A8F',
        'sap-gold': '#C9A227',
        'sap-border': '#E5E9EC',
      },
      fontFamily: {
        heading: ['"Tajawal"', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        'mono-num': ['"Space Grotesk"', 'monospace'],
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'sap-card': '0 4px 20px -2px rgba(10, 25, 47, 0.08)',
        'sap-hover': '0 12px 30px -4px rgba(0, 87, 210, 0.15)',
        'cta-glow': '0 0 25px -3px rgba(0, 112, 243, 0.45)',
        'gold-glow': '0 0 25px -3px rgba(201, 162, 39, 0.35)',
      },
    },
  },
  plugins: [],
};

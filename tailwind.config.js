/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        soft: '0 10px 40px -14px rgba(15,23,42,.10)',
        softlg: '0 24px 60px -22px rgba(15,23,42,.16)',
      },
    },
  },
  plugins: [],
}

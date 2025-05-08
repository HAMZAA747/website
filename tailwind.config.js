// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent:  '#F2AA21',
        white:   '#FFFFFF',
      },
      fontFamily: {
        // Use the user’s system sans for ultimate simplicity
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

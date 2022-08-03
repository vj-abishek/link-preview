/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fb-dark': '#3A3B3C',
        'fb-dark-text': '#b0b3b8',
        'tt-dark': 'rgb(21, 32, 43)',
        'tt-border': 'rgb(56, 68, 77)',
        'tt-dark-text': 'rgb(139, 152, 165)',
        'ig-dark': '#121212',
        'ig-border': '#969696',
        'wa-dark': '#202c33',
        'wa-dark-text': 'rgb(233,237,239)'
      }
    },
  },
  plugins: [],
}

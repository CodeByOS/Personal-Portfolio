// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-100': 'theme(color-black-100)', // use the variable defined in @theme inline
      },
    },
  },
  plugins: [],
}

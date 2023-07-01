/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    screens: {
      'sm': '414px',
      'md': '908px',
      'phone': '909px',
      'xl': '1200px',
      'phone-s': '400px',
    },
  },
  plugins: [],
}


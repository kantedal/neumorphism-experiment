module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#6B5CD8'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-font-inter')]
}

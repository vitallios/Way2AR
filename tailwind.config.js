module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobail': '600px',

      'laptop': '900px',

      'desktop': '1280px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
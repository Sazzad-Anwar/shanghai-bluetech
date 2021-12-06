module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',  // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '2rem',
        '2xl': '0rem',
      },
    },
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#6AC9F3',
      'secondary': '#D9EFFC',
      'tertiary': '#838383',
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#6AC9F3',
      'secondary': '#D9EFFC',
      'blurBg': '#00000078',
      "pink": '#EE6C5A',
      "ash": '#53617E',
      "olive": '#32959B',
      "light-blue": '#D9EFFC',
      "dark-blue": '#28B7FF'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
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
      "light-blue": '#D9EFFC',
      "dark-blue": '#28B7FF',
    }),
    extend: {
      spacing: {
        "800": "50rem",
        "82": "21.875rem"
      },
      width: {
        "63": "15.625rem"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
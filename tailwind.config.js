const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './*.html',
    ]
  },
  darkMode: 'media', // or 'none' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#2B2B2B',
      grey: '#787878',
      darkblue: '#0466A4',
      skyblue: '#2AAAE2',
      orange: '#FBB03C',
      gold: '#F9D025',
      green: '#5CB85C',
      lightgrey: '#EEEEEE',
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

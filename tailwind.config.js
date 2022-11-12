/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#0B0D17',
      'secundary': '#D0D6F9',
      'success': '#FFFFFF',
      'menu': 'rgba(255, 255, 255, 0.04)',
      'grazy': '#374151',
    },
    fontFamily: {
      'barlow': ['Barlow', 'sans-serif'],
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      'bellefair': ['Bellefair', 'serif'],
    },

    letterSpacing: {
      'widest': '2.7px',
    },

    fontSize: {
      'sm': '0.9375rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.441rem',
      '5xl': '3.5rem',
      '7xl': '5rem',
      '8xl': '9.375rem',
      '9xl': '200px',
    },
    extend: {

      'width': {
        '128': '60ch',
      },

      boxShadow: {
        'btn': ' 0 0 0 3.5rem  rgba(255, 255, 255, 0.1)'
      }

    },

    animation: {
      'spin-slow': 'spin 14s linear infinite',
    },

  },
  plugins:  [require('prettier-plugin-tailwindcss')],

}
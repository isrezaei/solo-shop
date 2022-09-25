module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '85' : '22rem',
        '225' : '150rem'
      },

      colors: {
        'glass-black': 'rgba(0,0,0,0.70)',
      },

      fontFamily: {
        'rubik' : ['rubik' , 'sans-serif'],
        'dancing' : ['Pacifico' , 'cursive']
      },

      boxShadow : {
        center : '0px 0px 20px 0px rgba(0,0,0,0.10)'
      },

      inset: {
        '128.5' : '28.5rem',
        '141': '41rem',
      },


      spacing: {
        '128': '38rem',
      },

      keyframes: {
        openFilter: {
          '0%': {  width : '4rem' },
          '100%': {  width: '100%' },
        },
        closeFilter: {
          '0%': {  width : '100%' },
          '100%': {  width: '4rem' },
        }
      },

      animation: {
        openFilter: 'openFilter 1s ',
        closeFilter : 'closeFilter 1s '
      }

    },



    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '0rem',
      },
    },


    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '20xl': '20rem',
    },

    screens: {
      'xs' : '320px',
      'md' : '1000px',
      'lg': '1280px',
      '2xl' : '1920px'
    },

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-neumorphism')
  ],
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '85' : '22rem',
        '32' : '32rem',
        '60' : '60rem',
        '100': '40rem',
        '101' : '27rem',
        '140'  : '40rem',
        '150' : '50rem',
      },

      colors: {
        'glass-black': 'rgba(0,0,0,0.70)',
      },

      fontFamily: {
        'rubik' : ['Rubik' , 'sans-serif'],
        'dancing' : ['Pacifico' , 'cursive']
      },

      boxShadow : {
        center : '0px 0px 20px 0px rgba(0,0,0,0.10)'
      },

      inset: {
        '128.5' : '28.5rem',
        '141': '41rem',
      }

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
    }

  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide')
  ],
}
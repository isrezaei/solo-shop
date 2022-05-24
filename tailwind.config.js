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
    },

    maxWidth: {
      'max-w-8xl': '90rem',
    }

  },
  plugins: [],
}
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
        'rubik' : ['Rubik' , 'sans-serif']
      }

    },
  },
  plugins: [],
}
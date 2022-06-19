module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'dekstop': "url('./images/bg-desktop.svg')",
        'mobile': "url('./images/bg-mobile.svg')",
      },
      colors: {
        "original": "#674bb1"
      }
    },
  },
  plugins: [],
}

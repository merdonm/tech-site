/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Montserrat" : 'Montserrat'
      },
      flex:{
        "flex-1-50%" : "1 1 50%",
        "flex-1-20%" : "0 0 20%",
        "flex-1-30%" : "0 0 30%",
        "flex-1-70%" : "0 0 70%",
        "flex-1-80%" : "0 0 80%",
      },
      "video" : {
        maxWidth:"none"
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
          video: {
              maxWidth: 'none',
          },
      });
  }
  ],
}
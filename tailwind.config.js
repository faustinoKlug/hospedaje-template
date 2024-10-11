/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "secondary": "Poppins",
        "main": "Raleway"
      },
      colors: {
        "main": "#141416",
        "secondary": "#eff3f8",
      },
      screens: {
        "1280px": "1280px",
      }
    },
  },
  plugins: [],
}
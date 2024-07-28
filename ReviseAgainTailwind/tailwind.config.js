/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
     
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "color-primary": "#01051e",
        "color-primary-light": "#920726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#4427DF",
        'custom-dark-blue': '#01051E',
        "banti": "#250C48"
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      blackhans: ["Black Han Sans", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "10rem",
        "2xl": "10rem",
      },
    },

    extend: {
      colors: {
        primary: "#404eed",
        black: "#23272a",
      },
    },
  },
  plugins: [],
};

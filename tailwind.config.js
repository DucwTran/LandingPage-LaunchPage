/** @type {import('tailwindcss').Config} */

const textshadow = require("tailwindcss-textshadow");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        text: ["Open Sans", "sans-serif"],
        title: ["Nunito", "sans-serif"],
      },
      textshadow: {
        title: "#373737 1px 1px 0px",
      },
      colors: {
        redpage: "#e52f37",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        showAndScale: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        slideDown: "slideDown .5s ease-in-out",
        showAndScale: "showAndScale 2s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

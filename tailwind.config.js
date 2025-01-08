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
      boxShadow: {
        custom: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
        customnobottom: "0px 0px 8px 0px rgba(99, 99, 99, 0.2)",
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
  corePlugins: {
    before: true,
    after: true,
  },
  plugins: [require("tailwindcss-textshadow")],
};

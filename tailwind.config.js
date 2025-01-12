/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"DM Serif Display"', "serif"],
        subheading: ['"PT Serif"', "sans-serif"],
        bodyText: ['"Nunito"', "sans-serif"],
      },
      colors: {
        primary: "#84CAEA",
        secondary: "#AF3616",
        accent: "#428B7E",
        light: "#DEEEEB",
        dark: "#3C3F40",
        muted: "#55595A",
      },
      backgroundImage: {
        "gradient-top-bottom": "linear-gradient(to bottom, #DEEEEB, #FFF)",
        "gradient-bottom-top": "linear-gradient(to top, #DEEEEB, #FFF)",
      },
      screens: {
        xs: "360px",
        s: "410px",
      },
      animation: {
        spin: "spin 1s linear infinite",
        slideIn: "slideIn 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out",
      },
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0.12 },
        },
        slideUp: {
          "0%": { top: "100%" },
          "100%": { top: 0 },
        },
      },
      listStyleType: {
        "lower-alpha": "lower-alpha",
        "lower-roman": "lower-roman",
      },
    },
  },
  plugins: [],
};

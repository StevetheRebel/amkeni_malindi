tailwind.config.js;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"DM Serif Display"', "serif"],
        subheading: ['"PT Sans"', "sans-serif"],
        bodyText: ['"Nunito"', "sans-serif"],
      },
      colors: {
        primary: "#84CAEA",
        secondary: "#EB8A93",
        accent: "#428B7E",
        light: "#DEEEEB",
        dark: "#3C3F40",
        muted: "#55595A",
      },
      backgroundImage: {
        "gradient-top-bottom": "linear-gradient(to bottom, #DEEEEB, #FFF)",
        "gradient-bottom-top": "linear-gradient(to top, #DEEEEB, #FFF)",
      },
    },
  },
  plugins: [],
};

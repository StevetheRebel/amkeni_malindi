/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"DM Serif Display"', "serif"],
        subheading: ['"PT Serif"', "serif"],
        bodyText: ['"DM Sans"', "sans-serif"],
        "button-links": ['"PT Sans"', "sans-serif"],
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
        pride: 'url("./public/pride.jpg")',
        image1:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url("./public/image1.jpg")',
        image2: 'url("./public/image2.jpg")',
        image3: 'url("./public/image3.jpg")',
        image4: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./public/image4.jpg")',
        image5: 'url("./public/image5.jpg")',
        image6: 'url("./public/image6.jpg")',
        image7: 'url("./public/image7.jpg")',
        image8: 'url("./public/image8.jpg")',
        image9:
          'linear-gradient(rgba(8, 100, 58, 0.3), rgba(8, 10, 58, 0.7)), url("./public/image9.jpg")',
        image10: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./public/image10.jpg")',
        image11: 'url("./public/image11.jpg")',
        image12: 'url("./public/image12.jpg")',
        image13: 'url("./public/image13.jpg")',
        image14: 'url("./public/image14.jpg")',
        image15: 'url("./public/image15.jpg")',
        image16: 'url("./public/image16.jpg")',
        image17: 'url("./public/image17.jpg")',
        image18: 'url("./public/image18.jpg")',
        image19: 'url("./public/image19.jpg")',
        image20: 'url("./public/image20.jpg")',
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
        slideUp: "slideUp 0.5s ease-in-out forwards",
        slideDown: "slideDown 0.5s ease-in-out forwards",
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
        slideDown: {
          "0%": { bottom: 0 },
          "100%": { top: 0 },
        },
      },
      listStyleType: {
        "lower-alpha": "lower-alpha",
        "lower-roman": "lower-roman",
      },
      dropShadow: {
        "white-custom": "10px 4px 8px rgba(255, 255, 255, 0.7)",
      },
      boxShadow: {
        custom: "0px 0px 20px rgba(255, 255, 255, 0.7)",
        "custom-shadow":
          "inset 19px 19px 16px #959f9d, inset -19px -19px 16px #ffffff",
      },
    },
  },
  plugins: [],
};

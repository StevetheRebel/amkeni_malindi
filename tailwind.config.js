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
        pride: 'url("/pride.jpg")',
        image1:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)) ,url("/image1.jpg")',
        image2:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)) ,url("/image2.jpg")',
        image3:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)) ,url("/image3.jpg")',
        image4:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("/image4.jpg")',
        image5: 'url("/image5.jpg")',
        image6:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("/image6.jpg")',
        image7: 'url("/image7.jpg")',
        image8: 'url("/image8.jpg")',
        image9:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("/image9.jpg")',
        image10:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("/image10.jpg")',
        image11:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("/image11.jpg")',
        image12:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)) ,url("/image12.jpg")',
        image13: 'url("/image13.jpg")',
        image14: 'url("/image14.jpg")',
        image15: 'url("/image15.jpg")',
        image16: 'url("/image16.jpg")',
        image17: 'url("/image17.jpg")',
        image18: 'url("/image18.jpg")',
        image19: 'url("/image19.jpg")',
        image20: 'url("/image20.jpg")',
      },
      screens: {
        xs: "360px",
        s: "410px",
        sx: "500px",
      },
      animation: {
        spin: "spin 1s linear infinite",
        slideIn: "slideIn 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
        slideDown: "slideDown 0.5s ease-in-out forwards",
        spinCustom: "spin 1.5s infinite",
        shrink: "shrink 0.5s ease-in-out forwards",
        rainbowSlide: "rainbowSlide 1.5s ease-in-out forwards",
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
        shrink: {
          "0%": { width: "100%" },
          "100%": { width: "50%" },
        },
        rainbowSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      listStyleType: {
        "lower-alpha": "lower-alpha",
        "lower-roman": "lower-roman",
        "circle": "circle"
      },
      dropShadow: {
        "white-custom": "10px 4px 8px rgba(255, 255, 255, 0.7)",
      },
      boxShadow: {
        "custom": "0px 0px 20px rgba(255, 255, 255, 0.7)",
        "custom-shadow":
          "inset 19px 19px 16px #959f9d, inset -19px -19px 16px #ffffff",
        "custom-chat": "0px 3px 25px 0px rgba(0, 145, 255, 0.64);",
        "neomorph-shadow": "35px 35px 70px #818a88, -35px -35px 70px #ffffff",
        "neomorph-soft": "7px 7px 14px #818a88, -7px -7px 14px #ffffff",
        "neomorph-other": "inset 20px 20px 60px #bdcac8, inset -20px -20px 60px #ffffff",
      },
    },
  },
  plugins: [],
};

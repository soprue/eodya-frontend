/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      fontSize: {},
      letterSpacing : {
        custom : "-0.02em"
      },
      colors: {
        primary: "#FF6060",
        gray: {
          950: "#0F0F0F",
          900: "#282828",
          800: "#424242",
          700: "#5B5B5B",
          600: "#757575",
          500: "#8E8E8E",
          400: "#A8A8A8",
          300: "#C1C1C1",
          200: "#DBDBDB",
          100: "#F4F4F4",
        },
        error: {
          900: "#aa1010",
          800: "#c21212",
          300: "#da1415",
          200: "#f58989",
          100: "#ffeff0",
        },
        warning: {
          900: "#863a00",
          800: "#a04500",
          300: "#b95000",
          200: "#ff8f39",
          100: "#fef4eb",
        },
        success: {
          900: "#1d5629",
          800: "#236933",
          300: "#287d3c",
          200: "#5aca74",
          100: "#edf8f0",
        },
        info: {
          900: "#234584",
          800: "#294f98",
          300: "#2d5aab",
          200: "#88a7de",
          100: "#eef2fb",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

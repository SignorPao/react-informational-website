/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Merriweather", "serif"],
      secondary: ["Inter", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "16px",
        xl: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
      "2xl": "1560px",
    },
    // colors: {
    //   primary: "",
    //   secondary: "",
    //   accent: "",
    // },
    // backgroundImage: {
    //   hero: "url('')",
    // },
    extend: {},
  },
  plugins: [],
};

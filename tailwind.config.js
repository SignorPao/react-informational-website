/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
      colors: {
        primary: "#3D5A80",
        secondary: "#98C1D9",
        secondaryLight: "#E0FBFC",
        accent: "#EE6C4D",
        dark: "#171717",
        light: "#FFF",
      },
      backgroundImage: {
        hero1: "url('assets/mainPage/hero-1.webp')",
        hero2: "url('assets/mainPage/hero-2.webp')",
        hero3: "url('assets/mainPage/hero-3.webp')",
        heroMobile: "url('assets/mainPage/heroMobile-1.webp')",
      },
    },
  },
  plugins: [],
};

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
        // primary: "#3D5A80",
        primary: "#326789",
        // primary: "#244D61",
        // primary: "#1F6CAB",

        // secondary: "#98C1D9",
        secondary: "#78A6C8",
        // secondary: "#5689C0",

        secondaryLight: "#E0FBFC",

        // accent: "#EE6C4D",
        accent: "#E65C4F",
        // accent: "#75E2FF",
        // accent: "#00E6F6",

        dark: "#171717",
        // dark: "#1B1C1E",
        // dark: "#1F1F1F",
        // dark: "#2B2B2B",
        // dark: "#303030",
        // dark: "#222831",
        // dark: "#252525",
        // dark: "#111315",
        // dark: "#21251F",
        // dark: "#14202E",
        // dark: "#132620",
        // dark: "#082A3A",

        light: "#FFF",
        // light: "#EEE",
        // light: "#EDEDED",
        // light: "#DDD",
        // light: "#E9EEF2",

        lightGrey: "#F2F4F5",
        // lightGrey: "#EAEBED",

        // grey: "#787A91",
        grey: "#444",
        // grey: "#393E46",
        // grey: "#30475E",
        // grey: "#2C3333",
        // grey: "#4E515C",
        // grey: "#89AAC3",
      },
      backgroundImage: {
        hero1: "url('assets/mainPage/hero-1.webp')",
        hero2: "url('assets/mainPage/hero-2.webp')",
        hero3: "url('assets/mainPage/hero-3.webp')",
        heroMobile: "url('assets/mainPage/heroMobile-1.webp')",
        // mainCountryHouse: "url('')",
      },
    },
  },
  plugins: [],
};

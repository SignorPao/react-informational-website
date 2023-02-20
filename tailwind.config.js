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
        // primary: "#1F6CAB",
        // primary: "#326789",
        // primary: "#3D5A80",
        // primary: "#244D61",

        // primary: "#003865",
        // primary: "#0079c1",
        // primary: "#004b79",
        // primary: "#013ca6",
        // primary: "#0033a1",
        // primary: "#003580",
        primary: "#01295c",

        // secondary: "#78A6C8",
        // secondary: "#5689C0",
        secondary: "#219BE4",

        // secondary: "#00629b",
        
        // secondaryLight: "#E0FBFC",
        // secondaryLight: "#98C1D9",
        // secondaryLight: "#A5C9CA",

        // accent: "#00E6F6",
        // accent: "#EE6C4D",
        // accent: "#E65C4F",
        // accent: "#75E2FF",
        // accent: "#DA0037",
        // accent: "#88F4FF",
        // accent: "#2A86FF",
        // accent: "#30A0E0",
        // accent: "#98DAD9",
        
        // accent: "#00a6d6",

        // dark: "#252525",
        dark: "#171717",
        // dark: "#1B1C1E",
        // dark: "#1F1F1F",
        // dark: "#222831",
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
        
        grey: "#303030",
        // grey: "#2B2B2B",
        // grey: "#787A91",
        // grey: "#444",
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
        mainCountryHouse: "url('assets/mainPage/mainCountryHouse.webp')",
        interior: "url('assets/otherPages/interiorHero.webp')",
        garden: "url('assets/otherPages/gardenHero.webp')",
        materials: "url('assets/otherPages/materialsHero.webp')",
        plumbing: "url('assets/otherPages/plumbingHero.webp')",
        country: "url('assets/otherPages/countryHero.webp')",
        education: "url('assets/otherPages/educationHero.webp')",
      },
    },
  },
  plugins: [],
};

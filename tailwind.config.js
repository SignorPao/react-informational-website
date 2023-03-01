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
        md: "700px",
        lg: "1024px",
        xl: "1100px",
        "2xl": "1560px",
      },
      colors: {
        primary: "#01295c",
        secondary: "#219BE4",
        accent: "#ffb703",
        dark: "#171717",
        light: "#FFF",
        lightGrey: "#F2F4F5",
        grey: "#303030",
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

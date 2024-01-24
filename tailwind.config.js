/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#D0D6F9",
        dark: "#0B0D17",
      },
      backgroundImage: {
        "home-desktop": "url('./assets/home-bg-desktop.png')",
        "destination-desktop": "url('./assets/destination-bg-desktop.png')",
        "crew-desktop": "url('./assets/crew-bg-desktop.png')",
        "technology-desktop": "url('./assets/technology-bg-desktop.png')",

        "home-tablet": "url('./assets/home-bg-tablet.png')",
        "destination-tablet": "url('./assets/destination-bg-tablet.png')",
        "crew-tablet": "url('./assets/crew-bg-tablet.png')",
        "technology-tablet": "url('./assets/technology-bg-tablet.png')",

        "home-mobile": "url('./assets/home-bg-mobile.png')",
        "destination-mobile": "url('./assets/destination-bg-mobile.png')",
        "crew-mobile": "url('./assets/crew-bg-mobile.png')",
        "technology-mobile": "url('./assets/technology-bg-mobile.png')",
      },
      fontFamily: {
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};

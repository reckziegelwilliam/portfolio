module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        darkgray: "#333333",
        lightgray: "#F5F5F5",
        primary: "#FD6084",
        secondary: "#00A3DA",
        tertiary: "#FF6347",
        quaternary: "#FF4500",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
      },
    },
    extend: {},
  },
  plugins: [],
};

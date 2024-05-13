module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      mob: '375px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      laptopl: '1440px',
    },
    extend: {
      colors: {
        darkgray: '#333333',
        lightgray: '#F5F5F5',
        primary: '#65005E',
        secondary: '#EFC000',
        tertiary: '#A22546',
        quarternary: '#FFE60B',
        quinary: '#DF8208',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      }
    }
  },
};

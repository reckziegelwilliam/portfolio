import "../styles/globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </ThemeProvider>
  );
};

export default App;

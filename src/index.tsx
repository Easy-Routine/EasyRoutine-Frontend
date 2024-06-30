import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import { GlobalStyle } from "./components/GlobalStyle";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ThemeProvider>
        <GlobalStyle />
        <App />
    </ThemeProvider>
);

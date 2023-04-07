import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>
);

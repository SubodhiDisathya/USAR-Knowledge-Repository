import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeProvider";
import "./index.css";
import "./theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);

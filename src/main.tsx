import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { EmailActionProvider } from "./context/EmailActionProvider";
import { ThemeProvider } from "./context/ThemeProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <EmailActionProvider>
        <App />
      </EmailActionProvider>
    </ThemeProvider>
  </StrictMode>,
);

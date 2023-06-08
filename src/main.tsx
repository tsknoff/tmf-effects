import React from "react";
import ReactDOM from "react-dom/client";
import { LayoutTheme } from "./UI/theme/LayoutTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={LayoutTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

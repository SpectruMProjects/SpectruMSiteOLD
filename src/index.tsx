import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { store } from "./store/store";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#74c7ec",
      main: "#89b4fa",
      dark: "#b4befe",
      contrastText: "#cdd6f4",
    },
    text: {
      primary: "#cdd6f4",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

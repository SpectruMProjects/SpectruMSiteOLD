import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store/store";
import App from "./App";

import "./index.css";
import { ThemeProvider } from "utils/context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

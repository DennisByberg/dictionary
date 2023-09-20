import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import FavoriteWordContextProvider from "./components/FavoriteWord/FavoriteWord";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <FavoriteWordContextProvider>
      <App />
    </FavoriteWordContextProvider>
  </React.StrictMode>
);

import { createContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";

const DarkModeContext = createContext<IDarkModeContext | undefined>(undefined);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <div className={isDarkMode ? "App" : "App light-mode "}>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
        <Header />
      </DarkModeContext.Provider>
    </div>
  );
}

export { App, DarkModeContext };

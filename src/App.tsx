import { createContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";

const DarkModeContext = createContext<TDarkModeContext | undefined>(undefined);
const ChangeDarkModeContext = createContext<TChangeDarkModeContext | undefined>(
  undefined
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  return (
    <div className={isDarkMode ? "App" : "App light-mode "}>
      <DarkModeContext.Provider value={isDarkMode}>
        <ChangeDarkModeContext.Provider value={setIsDarkMode}>
          <Header />
        </ChangeDarkModeContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export { App, DarkModeContext, ChangeDarkModeContext };

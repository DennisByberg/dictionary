import { createContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import WordList from "./components/WordList/WordList";

const DarkModeContext = createContext<TDarkModeContext | undefined>(undefined);
const ChangeDarkModeContext = createContext<TChangeDarkModeContext | undefined>(
  undefined
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [searchWord, setSearchWord] = useState<string>("");

  return (
    <div className={isDarkMode ? "App" : "App light-mode "}>
      <DarkModeContext.Provider value={isDarkMode}>
        <ChangeDarkModeContext.Provider value={setIsDarkMode}>
          <Header />
          <Searchbar setSearchWord={setSearchWord} />
          <WordList searchWord={searchWord} />
        </ChangeDarkModeContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export { App, DarkModeContext, ChangeDarkModeContext };

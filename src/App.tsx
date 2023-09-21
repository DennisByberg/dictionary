import { createContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import WordList from "./components/WordList/WordList";
import DisplayFavorites from "./components/DisplayFavorites/DisplayFavorites";
import ToggleFavorites from "./components/ToggleFavorites/ToggleFavorites";

const DarkModeContext = createContext<TDarkModeContext | undefined>(undefined);
const ChangeDarkModeContext = createContext<TChangeDarkModeContext | undefined>(
  undefined
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isFavoritesToggled, setIsFavoritesToggled] = useState<boolean>(false);
  const [wordObject, setWordObject] = useState<IDictionaryApiResponse[] | []>(
    []
  );

  return (
    <div className={isDarkMode ? "App" : "App light-mode "}>
      <DarkModeContext.Provider value={isDarkMode}>
        <ChangeDarkModeContext.Provider value={setIsDarkMode}>
          <Header />
          <ToggleFavorites
            isFavoritesToggled={isFavoritesToggled}
            setIsFavoritesToggled={setIsFavoritesToggled}
          />
          <Searchbar setWordObject={setWordObject} />
          {isFavoritesToggled ? (
            <DisplayFavorites />
          ) : (
            <WordList wordObject={wordObject} />
          )}
        </ChangeDarkModeContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export { App, DarkModeContext, ChangeDarkModeContext };

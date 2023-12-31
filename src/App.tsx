import { createContext, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";
import DisplaySearchList from "./components/DisplaySearchList/DisplaySearchList";
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
            setWordObject={setWordObject}
            isFavoritesToggled={isFavoritesToggled}
            setIsFavoritesToggled={setIsFavoritesToggled}
          />
          {isFavoritesToggled ? (
            <DisplayFavorites />
          ) : (
            <>
              <Searchbar setWordObject={setWordObject} />
              <DisplaySearchList wordObject={wordObject} />
            </>
          )}
        </ChangeDarkModeContext.Provider>
      </DarkModeContext.Provider>
    </div>
  );
}

export { App, DarkModeContext, ChangeDarkModeContext };

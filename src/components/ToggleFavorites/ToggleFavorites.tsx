import { useContext } from "react";
import "./ToggleFavorites.scss";
import { DarkModeContext } from "../../App";
import { FavoriteWord } from "../../context/FavoriteWordContextProvider";

function ToggleFavorites({
  isFavoritesToggled,
  setIsFavoritesToggled,
  setWordObject,
}: IToggleFavoritesProps) {
  const isDarkMode = useContext(DarkModeContext);

  function handleToggleFavorites() {
    setIsFavoritesToggled((prev) => !prev);
    setWordObject([]);
  }

  const { favoritedWord } = useContext(FavoriteWord);

  return (
    <div className="toggle-favorites">
      <div className="toggle-favorites__container">
        <button
          onClick={handleToggleFavorites}
          className={`toggle-favorites__container__toggleBTN${
            isDarkMode ? "" : " light-mode"
          }`}
        >
          {isFavoritesToggled ? "Hide" : "Show"} Favorites ({" "}
          {favoritedWord.length} )
        </button>
      </div>
    </div>
  );
}
export default ToggleFavorites;

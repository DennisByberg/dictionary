import { useContext } from "react";
import "./ToggleFavorites.scss";
import { DarkModeContext } from "../../App";

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

  return (
    <div className="toggle-favorites">
      <div className="toggle-favorites__container">
        <button
          onClick={handleToggleFavorites}
          className={`toggle-favorites__container__toggleBTN${
            isDarkMode ? "" : " light-mode"
          }`}
        >
          {isFavoritesToggled ? "Hide" : "Show"} Favorites
        </button>
      </div>
    </div>
  );
}
export default ToggleFavorites;

import "./ToggleFavorites.scss";

interface IToggleFavoritesProps {
  isFavoritesToggled: boolean;
  setIsFavoritesToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleFavorites({
  isFavoritesToggled,
  setIsFavoritesToggled,
}: IToggleFavoritesProps) {
  return (
    <div className="toggle-favorites">
      <div className="toggle-favorites__container">
        <button
          onClick={() => setIsFavoritesToggled((prev) => !prev)}
          className="toggle-favorites__container__toggleBTN"
        >
          {isFavoritesToggled ? "Hide" : "Show"} Favorites
        </button>
      </div>
    </div>
  );
}
export default ToggleFavorites;

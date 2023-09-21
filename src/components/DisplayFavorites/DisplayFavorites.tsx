import { useContext } from "react";
import "./DisplayFavorites.scss";
import { FavoriteWord } from "../../context/FavoriteWordContextProvider.tsx";

function DisplayFavorites() {
  const { favoritedWord } = useContext(FavoriteWord);

  return (
    <div className="display-favorites">
      <h1>Favorites</h1>
      <ul>
        {favoritedWord.length > 0 &&
          favoritedWord.map((favWord: any) => (
            <li key={favWord.id}>
              <h2> {favWord.favoritedWord[0].word} </h2>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DisplayFavorites;

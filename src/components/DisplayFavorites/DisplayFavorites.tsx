import { useContext } from "react";
import "./DisplayFavorites.scss";
import { FavoriteWord } from "../FavoriteWord/FavoriteWord";

function DisplayFavorites() {
  const { words } = useContext(FavoriteWord);
  console.log(words);

  return <div></div>;
}
export default DisplayFavorites;

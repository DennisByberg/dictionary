import "./Searchbar.scss";
import searchPNG from "../../assets/images/search.png";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../App";

function Searchbar({ setSearchWord }: ISearchbarProps) {
  const isDarkMode = useContext(DarkModeContext);
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <div className="searchbar">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        className={`searchbar__input${isDarkMode ? "" : " light-mode"}`}
        placeholder="search..."
        type="text"
      />
      <img
        onClick={() => setSearchWord(searchInput)}
        className={`searchbar__searchPNG${isDarkMode ? "" : " light-mode"}`}
        src={searchPNG}
      />
    </div>
  );
}
export default Searchbar;

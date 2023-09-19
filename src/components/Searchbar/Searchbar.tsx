import "./Searchbar.scss";
import searchPNG from "../../assets/images/search.png";
import { useContext } from "react";
import { DarkModeContext } from "../../App";

function Searchbar() {
  const isDarkMode = useContext(DarkModeContext);

  return (
    <div className="searchbar">
      <input
        className={`searchbar__input${isDarkMode ? "" : " light-mode"}`}
        placeholder="search..."
        type="text"
      />
      <img
        className={`searchbar__searchPNG${isDarkMode ? "" : " light-mode"}`}
        src={searchPNG}
      />
    </div>
  );
}
export default Searchbar;

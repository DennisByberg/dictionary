import "./Searchbar.scss";
import searchPNG from "../../assets/images/search.png";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../App";
import { fetchSearchedWord } from "../../utils/fetchSearchedWord";

function Searchbar({ setWordObject }: ISearchbarProps) {
  const isDarkMode = useContext(DarkModeContext);
  const [searchInput, setSearchInput] = useState<string>("");

  async function handleSearch() {
    const fetchedWord = await fetchSearchedWord(searchInput);
    setWordObject(fetchedWord);
    setSearchInput("");
  }

  return (
    <div className="searchbar">
      <input
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        className={`searchbar__input${isDarkMode ? "" : " light-mode"}`}
        placeholder="search..."
        type="text"
      />
      <img
        onClick={handleSearch}
        className={`searchbar__searchPNG${isDarkMode ? "" : " light-mode"}`}
        src={searchPNG}
        alt="searchPNG"
      />
    </div>
  );
}
export default Searchbar;

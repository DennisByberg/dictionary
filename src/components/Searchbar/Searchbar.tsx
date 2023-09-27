import "./Searchbar.scss";
import searchPNG from "../../assets/images/search.png";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../App";
import { fetchSearchedWord } from "../../utils/fetchSearchedWord";

function Searchbar({ setWordObject }: ISearchbarProps) {
  const isDarkMode = useContext(DarkModeContext);
  const [searchInput, setSearchInput] = useState<string>("");

  async function handleSearch() {
    const fetchedWord: any = await fetchSearchedWord(searchInput);
    setWordObject(fetchedWord);
    setSearchInput("");
  }

  return (
    <div className="searchbar">
      <div className="searchbar__container">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className={`searchbar__container__input${
            isDarkMode ? "" : " light-mode"
          }`}
          placeholder="search..."
          type="text"
        />
        <img
          onClick={handleSearch}
          className={`searchbar__container__searchPNG${
            isDarkMode ? "" : " light-mode"
          }`}
          src={searchPNG}
          alt="searchPNG"
        />
      </div>
    </div>
  );
}
export default Searchbar;

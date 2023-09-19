import "./Header.scss";
import dictionaryPNG from "../../assets/images/dictionary.png";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

function Header() {
  const dictionaryALT = "A purple logo of the site dictionary";
  const dictionaryName = "Dictionary";

  return (
    <header className="header">
      <img
        className="header__dictionary-png"
        src={dictionaryPNG}
        alt={dictionaryALT}
      />
      <h1 className="header__dictionary-name">{dictionaryName}</h1>
      <DarkModeToggle />
    </header>
  );
}
export default Header;

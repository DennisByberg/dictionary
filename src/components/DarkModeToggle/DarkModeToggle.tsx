import { ChangeDarkModeContext, DarkModeContext } from "../../App";
import "./DarkModeToggle.scss";
import { useContext } from "react";

function DarkModeToggle() {
  const isDarkMode = useContext(DarkModeContext);
  const setIsDarkMode = useContext(ChangeDarkModeContext);

  function toggleDarkMode() {
    setIsDarkMode && setIsDarkMode(!isDarkMode);
  }

  return (
    <section>
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </section>
  );
}

export default DarkModeToggle;

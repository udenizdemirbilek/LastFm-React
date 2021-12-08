import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SwitchButton(props) {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) theme.dispatch({ type: "LIGHTMODE" });
    else theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <button
      className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
      onClick={onClick}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}

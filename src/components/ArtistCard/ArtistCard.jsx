import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ArtistCard.css";

function ArtistCard({ artist }) {
  const { image, name, backgroundColor, color, listeners, playcount } = artist;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={`artist-card bg ${darkMode ? "bg-dark" : "bg-light"}`}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <Link to={`/artist/${name}`}>
        <img src={image[2]["#text"]} alt={name} className="artistImg cardCol" />
      </Link>
      <span className="cardCol">
        <h4
          className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}
        >
          Artist
        </h4>
        <h3
          className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}
        >
          {name}
        </h3>
      </span>
      <span className="cardCol">
        <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
          Listeners: {listeners}
        </p>
        <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
          Playcount: {playcount}
        </p>
      </span>
    </div>
  );
}

export default ArtistCard;

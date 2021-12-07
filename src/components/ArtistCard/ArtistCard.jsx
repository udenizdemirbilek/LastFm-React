import React from "react";
import "./ArtistCard.css";

function ArtistCard({ artist }) {
  const { image, name, backgroundColor, color, listeners, playcount } = artist;

  return (
    <div
      className="artist-card"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <img src={image[2]["#text"]} alt={name} className="artistImg cardCol" />
      <span className="cardCol">
        <h4>Artist</h4>
        <h3>{name}</h3>
      </span>
      <span className="cardCol">
        <p>Listeners: {listeners}</p>
        <p>Playcount: {playcount}</p>
      </span>
    </div>
  );
}

export default ArtistCard;

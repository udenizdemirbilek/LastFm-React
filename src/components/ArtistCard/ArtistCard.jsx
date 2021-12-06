import { lineBreak } from "acorn";
import React from "react";
import "./ArtistCard.css";

function ArtistCard({
  imgSrc,
  name,
  backgroundColor,
  color,
  listencount,
  playcount,
}) {
  return (
    <div
      className="artist-card"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <img src={imgSrc} alt={name} className="artistImg cardCol" />
      <span className="cardCol">
        <h4>Artist</h4>
        <h3>{name}</h3>
      </span>
      <span className="cardCol">
        <p>Listeners: {listencount}</p>
        <p>Playcount: {playcount}</p>
      </span>
    </div>
  );
}

export default ArtistCard;

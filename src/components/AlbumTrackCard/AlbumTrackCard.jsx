import React, { useContext } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./AlbumTrackCard.css";

function AlbumTrackCard({ props }) {
  const { name, playcount, artist, image, listeners, backgroundColor, color } =
    props;
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Row
      className="albumTrack-card"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <Col md={4} sm={12} className="image mx-1 my-2">
        <Image src={image[2]["#text"]} alt={name} className="artistImg" fluid />
      </Col>
      <Col md={3} sm={12} className="title mx-1 my-2">
        <span>
          <h4
            className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}
          >
            {artist.name}
          </h4>
          <h5
            className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}
          >
            {name}
          </h5>
        </span>
      </Col>
      <Col md={1} sm={12} />
      <Col lg={3} md={3} className="playInfo mx-1 my-2">
        <span>
          <p
            className={`para ${darkMode ? "para-dark" : "para-light"}`}
            style={{
              display:
                listeners === "" ||
                listeners === null ||
                listeners === undefined
                  ? "none"
                  : "block",
            }}
          >
            {listeners} listeners
          </p>
          <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
            {playcount} plays
          </p>
        </span>
      </Col>
    </Row>
  );
}

export default AlbumTrackCard;

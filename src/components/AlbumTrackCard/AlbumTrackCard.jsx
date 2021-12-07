import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./AlbumTrackCard.css";

function AlbumTrackCard({ props }) {
  console.log(props);

  const { name, playcount, artist, image, listeners, backgroundColor, color } =
    props;
  return (
    <Row
      className="albumTrack-card"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <Col md={2} sm={12} className="image mx-1 my-2">
        <Image src={image[2]["#text"]} alt={name} className="artistImg" fluid />
      </Col>
      <Col md={2} sm={12} className="title mx-1 my-2">
        <span>
          <h4>Artist</h4>
          <h3>{name}</h3>
        </span>
      </Col>
      <Col md={2} sm={12} />
      <Col lg={5} md={5} className="details mx-1 my-2">
        <span>
          <p
            style={{
              display:
                listeners === "" || listeners === null ? "none" : "block",
            }}
          >
            {listeners} listeners
          </p>
          <p>{playcount} plays</p>
        </span>
      </Col>
    </Row>
  );
}

export default AlbumTrackCard;

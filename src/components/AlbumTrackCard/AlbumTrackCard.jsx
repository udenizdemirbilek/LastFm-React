import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./AlbumTrackCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function AlbumTrackCard({
  imgSrc,
  title,
  name,
  listencount,
  playcount,
  backgroundColor,
  color,
}) {
  return (
    <Row
      className="albumTrack-card"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <Col md={2} sm={12} className="image mx-1 my-2">
        <Image src={imgSrc} alt={name} className="artistImg" fluid/>
      </Col>
      <Col md={2} sm={12} className="title mx-1 my-2">
        <span>
          <h4>Artist</h4>
          <h3>{name}</h3>
        </span>
      </Col>
      <Col md ={2} sm= {12}/>      
      <Col lg={5} md={5} className="details mx-1 my-2">
        <span>
          <p
            style={{
              display:
                listencount === "" || listencount === null ? "none" : "block",
            }}
          >
            {listencount} listeners
          </p>
          <p>{playcount} plays</p>
        </span>
      </Col>
    </Row>
  );
}

export default AlbumTrackCard;

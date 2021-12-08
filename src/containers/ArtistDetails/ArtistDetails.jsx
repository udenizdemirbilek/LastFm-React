import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Row, Col, Image } from "react-bootstrap";
import AlbumTrackCard from "../../components/AlbumTrackCard/AlbumTrackCard";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./ArtistDetails.css";
import placeholder from "../../images/placeholder.png";

function ArtistDetails() {
  const { artistname } = useParams();
  const baseURL = `https://ws.audioscrobbler.com/2.0/?method=artist.`;
  const APIkey = `&artist=${artistname}&api_key=649254f14726ba86b788459408efe41b&limit=5&format=json`;
  const [albums, setAlbums] = React.useState([]);
  const [tracks, setTracks] = React.useState([]);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    //Fetch top albums
    fetch(`${baseURL}gettopalbums${APIkey}`)
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.topalbums.album);
      })
      .catch((err) => {
        console.log(err);
      });

    //Fetch top tracks
    fetch(`${baseURL}gettoptracks${APIkey}`)
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.toptracks.track);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [artistname, baseURL, APIkey]);

  return (
    <div className={`details bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <div className="infoDiv">
        <Image src={placeholder} alt="artist" className="m-3 artistImg" />
        <h1
          className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}
        >
          {artistname}
        </h1>
        <SwitchButton />
      </div>
      <Row className="m-1 p-1">
        <Col>
          <h4
            className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}
          >
            Top Albums
          </h4>
          {albums.map((album, i) => (
            <AlbumTrackCard key={i} props={album} />
          ))}
        </Col>
        <Col>
          <h4
            className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}
          >
            Top Tracks
          </h4>
          {tracks.map((track, i) => (
            <AlbumTrackCard key={i} props={track} />
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default ArtistDetails;

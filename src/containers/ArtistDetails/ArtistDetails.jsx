// http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=cher&api_key=649254f14726ba86b788459408efe41b&format=json
// http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=649254f14726ba86b788459408efe41b&format=json

import React, { useEffect } from "react";
import { useParams } from "react-router";
import AlbumTrackCard from "../../components/AlbumTrackCard/AlbumTrackCard";

function ArtistDetails() {
  const { artistname } = useParams();
  const [albums, setAlbums] = React.useState([]);
  const [tracks, setTracks] = React.useState([]);

  useEffect(() => {
    //Fetch top albums
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistname}&api_key=649254f14726ba86b788459408efe41b&limit=5&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data.topalbums.album);
      })
      .catch((err) => {
        console.log(err);
      });

    //Fetch top tracks
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistname}&api_key=649254f14726ba86b788459408efe41b&limit=5&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.toptracks.track);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [artistname]);

  return (
    <div>
      {console.log(albums, tracks)}

      <h1>Artist Details</h1>
      {albums.map((album, i) => (
        <AlbumTrackCard key={i} props={album} />
      ))}
      {tracks.map((track, i) => (
        <AlbumTrackCard key={i} props={track} />
      ))}
    </div>
  );
}

export default ArtistDetails;

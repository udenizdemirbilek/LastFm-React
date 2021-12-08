import React, { Fragment, useContext } from "react";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useInfiniteQuery } from "react-query";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./HomePage.css";

function HomePage() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  async function fetchArtists(page = 1) {
    const response = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=649254f14726ba86b788459408efe41b&=" +
        page +
        "&limit=10&format=json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.artists.artist;
  }

  // Lastfm API call for top artists with react-query infinite scroll
  const {
    data,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    status,
    error,
  } = useInfiniteQuery("topArtists", fetchArtists, {
    getNextPageParam: (lastPage, allPages) => lastPage + 1,
  });

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
        Top Artists List
      </h1>
      <SwitchButton />
      <div className="artist-list">
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.map((artist, i) => (
              <ArtistCard key={i} artist={artist} />
            ))}
          </Fragment>
        ))}
      </div>
      <div>
        <button
          className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
      </div>

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
}

export default HomePage;

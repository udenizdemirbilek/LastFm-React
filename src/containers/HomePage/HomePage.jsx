import React, { createContext, Fragment } from "react";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useInfiniteQuery } from "react-query";
import { Container } from "react-bootstrap";
import "./HomePage.css";

function HomePage() {
  //   const theme = createContext("light");

  async function fetchArtists(page = 1) {
    const response = await fetch(
      "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=649254f14726ba86b788459408efe41b&=" +
        page +
        "&limit=20&format=json"
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
    <Container>
      <h1>Top Artists List</h1>
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
    </Container>
  );
}

export default HomePage;

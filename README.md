# Top Artists and Details with React by [@udenizdemirbilek](https://github.com/udenizdemirbilek)

## Home Page
Top artists are fetched from Last.fm API with useInfiniteQuery and are passed down to ArtistCards as props. Ten ArtistCards are displayed on HomePage container and more can be fetched by clicking the button at the bottom of the page. Artist image (Last.fm API chart.getTopArtists returns placeholders for most), name, listeners and playcount are displayed on ArtistCard component.
* If invalid custom URL is passed, redirects to not found page.
* Placeholder image has a link to the artist details page.
* Dark mode functionality is implemented with useContext hook and can be switched on or off on the HomePage container.

## Details Page
Artist name is passed as parameter (useParams) to Details container. Details container fetches the top five responses for topAlbums and topTracks for the artist from Last.fm API with useEffect and stores them as state with useState, then passes them to AlbumTrackCard to display on the page. 
* Dark mode functionality is implemented with useContext hook and can be switched on or off on the Details container.
* Responsive design is achieved with bootstrap components.

## AlbumTrackCard
Album and track details (image, artist, track or album name, listencount, playcount) are displayed on AlbumTrackCard component. If no listencount is available, then the tag is not displayed.
This component has been created in Storybook to be able to test the component.

## ArtistCard
Artist details (image, name, listeners, playcount) are displayed on ArtistCard component. This component has been created in Storybook to be able to test the component.

## Features:

* Application is deployed on Netlify. https://lastfm-react.netlify.app/
Github repo is linked to Netlify and the page is hosted on Netlify. Additionally, redirects are set up so that routes also work on Netlify.

* Application is built using ReactJS.
* Application is built using React-Router.
* Application is built using React-Bootstrap.
* No working tests can be implemented due to lack of time.


// API key 649254f14726ba86b788459408efe41b
// Secret dc0269bd09773a5982d7c8a4ae500efa

import React, {useEffect, createContext} from 'react';

function HomePage() {
    const theme = createContext("light")

    // Lastfm API call for top artists with react-query
    useEffect(() => {
        fetch('https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=649254f14726ba86b788459408efe41b&format=json')
        .then(response => response.json())
        .then(json => console.log(json))
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage;
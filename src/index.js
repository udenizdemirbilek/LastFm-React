import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "./App";
import HomePage from "./containers/HomePage/HomePage";
import ArtistDetails from "./containers/ArtistDetails/ArtistDetails";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
      <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/artistdetails" >
            <Route path=":artistname" element={<ArtistDetails />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "5rem" }}>
                <p>Oops! This page doesn't exist yet!</p>
                <Link to="/">Go to the homepage</Link>
              </main>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

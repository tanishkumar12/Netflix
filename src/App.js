import React from "react";
import "./App.css";
import Row from "./row.js";
import request from "./request";
import Navbar from "./Navbar";
import Banner from "./Banner";
function App() {
  document.title = "Netflix-Clone";
  return (
    //HeaderNav
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Trending" fetchUrl={request.Trending} isbig={true} />
      <Row title="Continue Watching for User" fetchUrl={request.TopRated} />
      <Row title="Comedy Movies" fetchUrl={request.ComedyMovies} isbig={true} />
      <Row
        title="Documentaries"
        fetchUrl={request.Documentaries}
        isbig={true}
      />
      <Row title="Horror Movies" fetchUrl={request.HorrorMovies} />
      <Row
        title="Romantic Movies"
        fetchUrl={request.RomanticMovies}
        isbig={true}
      />
      <Row title="Action Movies" fetchUrl={request.ActionMovies} />
    </div>
  );
}
export default App;

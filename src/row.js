import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isbig }) {
  const [movies, setMovies] = useState([]);
  const [url, seturl] = useState("");

  useEffect(() => {
    async function getapi() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    getapi();
  }, [fetchUrl]);

  const options = {
    height: "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const onclick = (movie) => {
    if (url) {
      seturl("");
    } else {
      movieTrailer(
        movie?.title ||
          movie?.original_title ||
          movie?.name ||
          movie?.original_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          seturl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporary Unavailable"));
    }
  };
  return (
    <div className="row">
      <h1 className="row-title">{title}</h1>
      <div className="tiles">
        {movies.map((movies) => (
          <img
            key={movies.id}
            onClick={() => onclick(movies)}
            className={`tile-img ${isbig && "tile_Large"}`}
            src={`${baseUrl}${
              isbig ? movies.poster_path : movies.backdrop_path
            }`}
            alt={movies.name}
          />
        ))}
      </div>
      {url && <YouTube videoId={url} opts={options} />}
    </div>
  );
}
export default Row;

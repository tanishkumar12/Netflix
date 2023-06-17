import api_key from "./env.js";

const request = {
  Trending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  NetFlixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  TopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  ComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  RomanticMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};

export default request;

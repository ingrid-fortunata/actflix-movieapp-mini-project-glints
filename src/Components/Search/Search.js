import React, { useState, useEffect } from "react";
import MovieCard from "../Search/movieCard-search";
import axios from "axios";
import "../Search/Search.css";
import "../MovieCard/movieCard-search.css";

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=3d00e3c2f54f8dd492e7154db5a5e5c6&query=`;

const Search = (props) => {
  const [movies, setMovies] = useState([]);

  const getMovie = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setMovies(result.data.results);
    };
    fetchData();
  };

  useEffect(() => {
    getMovie(SEARCH_API + props.input);
  }, [props.input]);

  return (
    <div className="search-page">
      <h1>Showing results for '{props.input}'</h1>
      <div className="movie-container1">
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
              setInput={props.setInput}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import MovieCard from "../../Components/Search/movieCard-search";
import "../WatchList/watchList.css";
import "../../Components/MovieCard/movieCard-search.css";
import { Link } from "react-router-dom";

const WatchList = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(props.watchList);
  }, [props.watchList]);
  // console.log(movies);

  return (
    <div className="movie-container1">
      {movies.length === 0 ? (
        <div style={{ "text-align": "center" }}>
          <h2
            style={{
              color: "#e5e5e5",
              "text-align": "center",
              margin: "2.5rem ",
              "margin-bottom": "1.5rem",
            }}
          >
            It looks like there's nothing in your watch list...
          </h2>
          <Link to="/">
            <button>Add Movies!</button>
          </Link>
        </div>
      ) : (
        <div className="movie-container1">
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
        </div>
      )}
    </div>
  );
};

export default WatchList;

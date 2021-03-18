import React from "react";
import { Link } from "react-router-dom";
import "../MovieCard/movieCard2.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({
  id,
  title,
  backdrop_path,
  overview,
  release_date,
  vote_average,
  setSelectedMovie,
  vote_count,
}) => {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to="/movie-details"
      onClick={() => {
        setSelectedMovie({
          id,
          title,
          backdrop_path,
          overview,
          release_date,
          vote_average,
          setSelectedMovie,
          vote_count,
        });
      }}
    >
      <div className="movie">
        <img
          src={
            backdrop_path
              ? IMG_API + backdrop_path
              : "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          }
          alt={title}
        />
        <div className="movie-info">
          {/* <h3>{title}</h3> */}
          <div className="movie-over">
            <h2>{title}</h2>
            {/* <p>{overview}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

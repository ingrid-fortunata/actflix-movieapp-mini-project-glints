import React from "react";
import ReactStars from "react-stars";
// import { Link } from "react-router-dom";
import "./Banner.css";
const IMG_API = "https://image.tmdb.org/t/p/original";

const Banner = (props) => {
  const url_link = IMG_API + props.selectedMovie.backdrop_path;

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url(" + url_link + ")",
      }}
    >
      <div className="content-background">
        <div className="banner-content">
          <h1>{props.selectedMovie.title}</h1>
          <div className="main-staring">
            <div>
              <ReactStars
                count={5}
                value={props.selectedMovie.vote_average / 2}
                size={24}
                color2={"#ffd700"}
                edit={false}
                className="staring"
              />
            </div>
            <div className="banner-reviews">
              {props.selectedMovie.vote_count} reviews
            </div>
          </div>

          <p>{props.selectedMovie.overview}</p>
        </div>

        <div className="banner-buttons">
          <button className="banner-button-1">Watch Trailer</button>
          <button onClick={props.addWatchList} className="banner-button-2">
            Add To Watch List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

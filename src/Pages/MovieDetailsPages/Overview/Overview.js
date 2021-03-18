import React from "react";
import "./Overview.css";

export default function Overview(props) {
  return (
    <div>
      <fieldset>
        <legend>Synopsis</legend>
        <p> {props.selectedMovie.overview}</p>
      </fieldset>
      <fieldset>
        <legend>Movie Info</legend>
        <label> Release Date : {props.selectedMovie.release_date}</label>
        <br />
        <label> Director : </label>
        <br />
        <label> Featured song : </label>
        <br />
        <label> Budget : </label>
        <br />
        <label> Release Date : {props.selectedMovie.release_date}</label>
        <br />
        <label> Director : </label>
        <br />
        <label> Featured song : </label>
        <br />
        <label> Budget : </label>
        <br />
      </fieldset>
    </div>
  );
}

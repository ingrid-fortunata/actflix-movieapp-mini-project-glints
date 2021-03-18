import React, { useState } from "react";
import "./CommentStyle.css";
import ReactStars from "react-stars";

export default function CommentForm({ addComment }) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // prevents page from reloading on submit
    let author = document.getElementById("author");
    let body = document.getElementById("body");
    addComment(author.value, body.value);
    setName("");
    setReview("");
  }

  function handleOnChangeName(e) {
    setName(e.target.value);
  }
  function handleOnChangeReview(e) {
    setReview(e.target.value);
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="comment-form-fields">
        <input
          placeholder="Name"
          required
          id="author"
          value={name}
          onChange={handleOnChangeName}
        ></input>
        <br />
        <ReactStars
          count={5}
          // value={props.selectedMovie.vote_average / 2}
          size={24}
          color2={"#ffd700"}
          edit={true}
          className="staring"
        />
        <br />
        <textarea
          placeholder="Add your comment"
          rows="4"
          required
          id="body"
          value={review}
          onChange={handleOnChangeReview}
        ></textarea>
      </div>
      <div className="comment-form-actions">
        <button type="submit">Post Review</button>
      </div>
    </form>
  );
}

import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import "./CommentStyle.css";
import axios from "axios";

export default function CommentBox(props) {
  const COMMENTS_API = `https://api.themoviedb.org/3/movie/${props.selectedMovie.id}/reviews?api_key=2920875800a5f85110561e53704f5468&language=en-US`;

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const getComments = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setComments(result.data.results);
    };
    fetchData();
  };

  useEffect(() => {
    getComments(COMMENTS_API);
  }, [COMMENTS_API]);

  const deleteComment = (index) => {
    console.log(
      Math.max.apply(
        Math,
        comments.map((element) => element.id)
      )
    );
    const newComments = comments.filter((comment) => index !== comment.id); //delete by comment id
    setComments(newComments);
  };

  const comments2 = comments.map((comment) => (
    <CommentCard deleteComment={deleteComment} key={comment.id} {...comment} />
  ));

  let commentNodes;
  let buttonText = "Show Reviews";

  if (showComments) {
    buttonText = "Hide Comments";
    commentNodes = <div className="comment-list">{comments2.reverse()}</div>;
  }

  const addComment = (author, content) => {
    const comment = {
      id:
        "RVW_" +
        Math.max.apply(
          Math,
          comments.map((element) => element.id)
        ),
      author,
      content,
    };
    setComments(comments.concat([comment])); // *new array references help React stay fast, so concat works better than push here.
  };

  const handleClick = () => {
    setShowComments(!showComments);
  };

  const getCommentsTitle = (commentCount) => {
    if (commentCount === 0) {
      return "No comments yet";
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  };

  return (
    <div className="comment-box">
      <h2>Add your review</h2>
      <CommentForm addComment={addComment} />
      <button id="comment-reveal" onClick={handleClick}>
        {buttonText}
      </button>
      <h1>All Reviews</h1>
      <h4 className="comment-count">{getCommentsTitle(comments2.length)}</h4>
      {commentNodes}
    </div>
  );
}

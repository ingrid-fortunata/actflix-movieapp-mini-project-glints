import React from "react";
import "./CommentStyle.css";

export default function CommentCard({ id, author, content, deleteComment }) {
  return (
    <div className="comment">
      <p className="comment-header">{author}</p>
      <p className="comment-body"> {content}</p>
      <div className="comment-footer-delete" onClick={() => deleteComment(id)}>
        Delete Review
      </div>
    </div>
  );
}

import React from "react";
import "./CharacterCard.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

export default function CharacterCard({
  character,
  original_name,
  profile_path,
}) {
  return (
    <div>
      <div className="profile-image">
        <img
          src={
            profile_path
              ? IMG_API + profile_path
              : "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          }
          alt=""
        />
      </div>
      <div className="profile-name">
        <h3>{character}</h3>
        <h3>
          <b style={{ color: "orange" }}>Cast:</b> {original_name}
        </h3>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "./Characters.css";

export default function Characters(props) {
  const CHARACTERS_API = `https://api.themoviedb.org/3/movie/${props.selectedMovie.id}/credits?api_key=2920875800a5f85110561e53704f5468&language=en-US`;

  const [characters, setCharacters] = useState([]);

  const getCharacters = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setCharacters(result.data.cast);
    };
    fetchData();
  };

  useEffect(() => {
    getCharacters(CHARACTERS_API);
  }, [CHARACTERS_API]);
  //console.log(characters);

  return (
    <div className="all-card">
      <h1>All Characters</h1>
      <div className="card-list">
        {characters.length > 0 &&
          characters.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
      </div>
    </div>
  );
}

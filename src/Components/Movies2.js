import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard/MovieCard";
import axios from "axios";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d00e3c2f54f8dd492e7154db5a5e5c6&page=1";

const Movies = (props) => {
  const [action, setAction] = useState([]);
  const [mystery, setMystery] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [romance, setRomance] = useState([]);
  const [crime, setCrime] = useState([]);
  const [documentary, setDocumentary] = useState([]);
  const [war, setWar] = useState([]);
  const [horror, setHorror] = useState([]);
  const [history, setHistory] = useState([]);
  const [western, setWestern] = useState([]);

  const getAction = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setAction(result.data.results);
    };
    fetchData();
  };

  const getAnimation = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setAnimation(result.data.results);
    };
    fetchData();
  };

  const getMystery = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setMystery(result.data.results);
    };
    fetchData();
  };

  const getRomance = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setRomance(result.data.results);
    };
    fetchData();
  };

  const getDocumentary = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setDocumentary(result.data.results);
    };
    fetchData();
  };

  const getCrime = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setCrime(result.data.results);
    };
    fetchData();
  };

  const getWar = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setWar(result.data.results);
    };
    fetchData();
  };

  const getHorror = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setHorror(result.data.results);
    };
    fetchData();
  };

  const getHistory = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setHistory(result.data.results);
    };
    fetchData();
  };

  const getWestern = (API) => {
    const fetchData = async () => {
      const result = await axios(API);
      setWestern(result.data.results);
    };
    fetchData();
  };

  useEffect(() => {
    getAction(`${FEATURED_API}&with_genres=28`);
    getRomance(`${FEATURED_API}&with_genres=10749`);
    getAnimation(`${FEATURED_API}&with_genres=16`);
    getMystery(`${FEATURED_API}&with_genres=9648`);
    getCrime(`${FEATURED_API}&with_genres=80`);
    getDocumentary(`${FEATURED_API}&with_genres=99`);
    getWar(`${FEATURED_API}&with_genres=10752`);
    getHorror(`${FEATURED_API}&with_genres=27`);
    getHistory(`${FEATURED_API}&with_genres=36`);
    getWestern(`${FEATURED_API}&with_genres=37`);
  }, []);

  return (
    <div>
      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Action
      </h1>
      <div className="movie-container">
        {action.length > 0 &&
          action.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Crime
      </h1>
      <div className="movie-container">
        {crime.length > 0 &&
          crime.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Documentary
      </h1>
      <div className="movie-container">
        {documentary.length > 0 &&
          documentary.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Mystery
      </h1>
      <div className="movie-container">
        {mystery.length > 0 &&
          mystery.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Romance
      </h1>
      <div className="movie-container">
        {romance.length > 0 &&
          romance.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Animation
      </h1>
      <div className="movie-container">
        {animation.length > 0 &&
          animation.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        War
      </h1>
      <div className="movie-container">
        {war.length > 0 &&
          war.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        History
      </h1>
      <div className="movie-container">
        {history.length > 0 &&
          history.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Horror
      </h1>
      <div className="movie-container">
        {horror.length > 0 &&
          horror.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>

      <h1
        className="browse"
        style={{
          color: "#808080",
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginLeft: "2.5rem",
        }}
      >
        Western
      </h1>
      <div className="movie-container">
        {western.length > 0 &&
          western.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              setSelectedMovie={props.setSelectedMovie}
            />
          ))}
      </div>
    </div>
  );
};

export default Movies;

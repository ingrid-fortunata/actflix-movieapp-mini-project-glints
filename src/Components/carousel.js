import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import "./carousel.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3d00e3c2f54f8dd492e7154db5a5e5c6&page=2";

const Carousel = () => {
  const [image, setImage] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = image.length;
  // console.log(length);

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const fetchImage = async () => {
      const result = await axios(FEATURED_API);
      setImage(result.data.results);
    };
    fetchImage();
  }, []);

  // console.log(image);
  return (
    <div className="slider">
      <FaAngleDoubleLeft className="arrow-left" onClick={prevImg} />
      <FaAngleDoubleRight className="arrow-right" onClick={nextImg} />
      {image.map((m, index) => (
        <div
          className={index === current ? "slide:active" : "slide"}
          key={index}
        >
          {index === current && (
            <img
              src={IMG_API + m.backdrop_path}
              alt=""
              className="image-slider"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;

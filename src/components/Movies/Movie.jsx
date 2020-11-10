import React from "react";
import { Link } from "react-router-dom";
import "./Movies.scss";

const Movie = ({ id, title, backdrop }) => {
  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <h1>{title}</h1>
        </div>
        <div className="movie_button">
          <Link className="btn" to={`details/${id}`}>
            Details<span className="arrow">❯</span>
          </Link>
        </div>
      </div>
      <div
        className="blur_back bright_back"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${backdrop}`,
        }}
      ></div>
    </div>
  );
};
export default Movie;

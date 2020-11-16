import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { MOVIE } from "./../../store/api";
import "./Details.scss";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieToShow: null,
    };
  }

  componentDidMount() {
    axios
      .get(MOVIE.GET_DETAILS(this.props.id))
      .then((response) => {
        this.setState({
          movieToShow: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          movieToShow: {
            title: `Movies not found: ${error.response.data.status_message}`,
          },
        });
      });
  }

  render() {
    if (!this.state.movieToShow) {
      return false;
    }

    const {
      title,
      overview,
      poster_path,
      vote_average,
      release_date,
    } = this.state.movieToShow;

    return (
      <div>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <h1>{title}</h1>
              <h4>{release_date}</h4>
              <span className="rating">Raiting: {vote_average}</span>
            </div>
            <div className="movie_desc">
              <p className="text">{overview}</p>
            </div>
            <div className="movie_button">
              <Link className="btn" to="/">
                Back<span className="arrow right">❯</span>
              </Link>
            </div>
          </div>
          <div
            className="blur_back bright_back"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path}`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Details;

import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./Details.scss";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: true,
      movieToShow: {},
    };
  }

  componentDidMount() {
    this.setState({ redirect: !!this.props.movies.length });
    this.setState({
      movieToShow: this.props.movies.filter(
        (movie) => movie.id === this.props.id
      )[0],
    });
  }

  render() {
    if (!this.state.redirect) {
      return <Redirect to="/" />;
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

const MapStateToProps = (state) => ({
  movies: state.movieReducer.movies.moviesArray,
});

export default connect(MapStateToProps, null)(Details);

import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getMovieById } from "./../store/actions/index";
import "./../components/Movies/Movies.scss";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: true,
      title: "",
      date: null,
      overview: "",
      poster_path: "",
      vote_average: null,
      release_date: "",
    };
  }

  componentWillMount() {
    this.setState({ redirect: !!this.props.movies.length });
    this.props.getMovie(this.props.id);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps !== this.props) {
      const {
        title,
        overview,
        poster_path,
        vote_average,
        release_date,
      } = nextProps.changedMovie;

      this.setState({
        title: title,
        date: new Date(release_date),
        overview: overview,
        poster_path: poster_path,
        vote_average: vote_average,
      });
    }
    return true;
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
    } = this.state;

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
  changedMovie: state.movieReducer.changedMovie,
});

const mapDispatchToProps = (dispatch) => ({
  getMovie: (id) => dispatch(getMovieById(id)),
});

export default connect(MapStateToProps, mapDispatchToProps)(Details);

import React from "react";
import Movie from "./components/Movie/Movie";
import { connect } from "react-redux";
import { requestMovies } from "./../../store/actions/index";

class Movies extends React.Component {
  componentDidMount() {
    this.props.requestMovies(1);
  }

  getMoviesList = () => {
    return this.props.movies.moviesArray.map((item) => {
      return (
        <Movie
          key={item.id}
          id={item.id}
          backdrop={item.backdrop_path}
          poster={item.poster_path}
          title={item.title}
          date={item.release_date}
          raiting={item.vote_average}
        />
      );
    });
  };

  render() {
    return <div>{this.getMoviesList()}</div>;
  }
}

const mapStateToProps = (state) => ({ movies: state.movieReducer.movies });

const MapDispatchToProps = (dispatch) => ({
  requestMovies: (page) => dispatch(requestMovies(page)),
});

export default connect(mapStateToProps, MapDispatchToProps)(Movies);

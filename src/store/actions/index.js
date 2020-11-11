import axios from "axios";
import { MOVIE } from "./../api";
import { SET_MOVIES, SET_ERROR } from "./../constants";

export const setMovies = (payload) => ({ type: SET_MOVIES, payload });
export const setError = (payload) => ({ type: SET_ERROR, payload });

export const requestMovies = (page) => {
  return (dispatch) => {
    axios
      .get(MOVIE.GET_POPULAR_MOVIES(page))
      .then((response) => {
        dispatch(
          setMovies({
            movies: response.data.results,
            page: response.data.page,
          })
        );
      })
      .catch((error) => {
        dispatch(setError(error.response.data.errors[0]));
      });
  };
};

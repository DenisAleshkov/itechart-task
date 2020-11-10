import { SET_MOVIES, SET_ERROR, GET_MOVIE_BY_ID } from "./../constants";

let initialState = {
  movies: {
    page: null,
    moviesArray: [],
  },
  changedMovie: null,
  error: null,
};

function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movies: {
          page: action.payload.page,
          moviesArray: [...action.payload.movies],
        },
      };
    }
    case SET_ERROR: {
      console.log("ERROR", action.payload);
      return {
        ...state,
        movies: {
          page: null,
          moviesArray: [],
        },
        id: null,
        erorr: action.payload,
      };
    }
    case GET_MOVIE_BY_ID: {
      return {
        ...state,
        changedMovie: state.movies.moviesArray.filter(
          (movie) => movie.id === action.payload
        )[0],
      };
    }
    default: {
      return state;
    }
  }
}

export default MovieReducer;

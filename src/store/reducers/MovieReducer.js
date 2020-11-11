import { SET_MOVIES, SET_ERROR } from "./../constants";

let initialState = {
  movies: {
    page: null,
    moviesArray: [],
  },
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
    default: {
      return state;
    }
  }
}

export default MovieReducer;

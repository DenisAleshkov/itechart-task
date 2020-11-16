import { GLOBALS, REQUEST_MOVIES, setMovies } from "./../actions/index";

const { BASE_URL, API_KEY, POPULAR_MOVIE, LANG } = GLOBALS;

const requestMiddleware = (store) => (next) => (action) => {
  if (action.type === REQUEST_MOVIES) {
    fetch(
      `${BASE_URL}/${POPULAR_MOVIE}?api_key=${API_KEY}&language=${LANG}&page=${action.payload}`
    )
      .then((res) => res.json())
      .then((movies) => {
        store.dispatch(
          setMovies({ movies: movies.results, page: movies.page })
        );
      })
      .catch((err) => {
        console.log("Error", err);
        store.dispatch(setMovies([], null));
      });
  }
  return next(action);
};

export default requestMiddleware;

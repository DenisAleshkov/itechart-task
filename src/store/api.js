import { GLOBALS } from "./constants";

const { BASE_URL, POPULAR_MOVIE, API_KEY, LANG } = GLOBALS;

export const MOVIE = {
  GET_POPULAR_MOVIES: (page) =>
    `${BASE_URL}/${POPULAR_MOVIE}?api_key=${API_KEY}&language=${LANG}&page=${page}`,
};

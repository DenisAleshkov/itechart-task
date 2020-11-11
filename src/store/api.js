import { GLOBALS } from "./constants";

const { BASE_URL, API_KEY, LANG } = GLOBALS;

export const MOVIE = {
  GET_POPULAR_MOVIES: (page) =>
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANG}&page=${page}`,
  GET_DETAILS: (id) =>
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${LANG}`,
};

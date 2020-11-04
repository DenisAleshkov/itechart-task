export const API_KEY = '720082cb7997030cf3bdec52b8169388'
export const SET_MOVIES = 'SET_MOVIES'
export const REQUEST_MOVIES= 'movies/popular' 

export const apiInstanse  = {
    API_KEY: '720082cb7997030cf3bdec52b8169388',
    BASE_URL: 'https://api.themoviedb.org/3',
    POPULAR_MOVIE: 'movie/popular',
    LANG: 'en-US'
} 

export const setMovies = (payload, page) => ({ type: SET_MOVIES, payload,  page })
export const requestMovies  = page => ({ type: REQUEST_MOVIES, page })

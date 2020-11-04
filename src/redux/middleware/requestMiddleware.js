import { 
    apiInstanse,
    setMovies,
    REQUEST_MOVIES
 } from './../actions/index'

const { 
    BASE_URL, 
    API_KEY, 
    POPULAR_MOVIE,
    LANG
 } = apiInstanse

const requestMiddleware = store => next => action => {
    if (action.type === REQUEST_MOVIES) {
        fetch(`${BASE_URL}/${POPULAR_MOVIE}?api_key=${API_KEY}&language=${LANG}&page=${action.payload}`)
            .then(res => res.json())
            .then(movies => {
                store.dispatch(setMovies(movies.results, movies.page))
            })
            .catch((err)=>{ 
                console.log('Error:', err)
                store.dispatch(setMovies([], null))
            })
    }
    return next(action)
}

export default requestMiddleware
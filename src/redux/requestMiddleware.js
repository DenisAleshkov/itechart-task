const requestMiddleware = store => next => action => {
    if (action.type === 'movies/popular') {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=720082cb7997030cf3bdec52b8169388&language=en-US&page=${action.payload}`)
            .then(res => res.json())
            .then(movies => {
                store.dispatch({ type: 'SET_MOVIES', payload: movies.results, page: movies.page})
            })
    }
    return next(action)
}

export default requestMiddleware
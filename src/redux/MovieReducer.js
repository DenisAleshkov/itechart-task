let initialState = {
   movies: {
       page: null,
       moviesArray: []
   }
}

function MovieReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_MOVIES': {
            return {
                ...state,
                movies:{
                    page: action.page,
                    moviesArray: [...action.payload]
                }
            }
        }
        default: {
            return state;
        }
    }
}
export default MovieReducer
import {
    SET_MOVIES
} from './../actions/index'

let initialState = {
   movies: {
       page: null,
       moviesArray: []
   }
}

function MovieReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MOVIES: {
            return {
                ...state,
                movies:{
                    page: action.page, // SEE THE COMMENT IN "ACTIONS.JS"
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

import { createStore, combineReducers, applyMiddleware  } from 'redux'
import MovieReducer from './MovieReducer'

let reducers = combineReducers({
    movieReducer: MovieReducer
})

let store = createStore(reducers, applyMiddleware())

export default store
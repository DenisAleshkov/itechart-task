import { createStore, combineReducers, applyMiddleware  } from 'redux'
import MovieReducer from './MovieReducer'
import requestMiddleware from './requestMiddleware'

let reducers = combineReducers({
    movieReducer: MovieReducer
})

let store = createStore(reducers, applyMiddleware(requestMiddleware))

export default store
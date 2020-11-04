import { createStore, combineReducers, applyMiddleware  } from 'redux'
import MovieReducer from './reducers/MovieReducer'
import requestMiddleware from './middleware/requestMiddleware'

let reducers = combineReducers({
    movieReducer: MovieReducer
})

let store = createStore(reducers, applyMiddleware(requestMiddleware))

export default store
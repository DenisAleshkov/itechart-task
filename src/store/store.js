import { createStore, combineReducers, applyMiddleware } from "redux";
import MovieReducer from "./reducers/MovieReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
  movieReducer: MovieReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

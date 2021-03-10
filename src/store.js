import { createStore, combineReducers } from "redux";
import { collections } from "./collections/reducers";

const reducers = {
  collections,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

import { createStore, combineReducers, applyMiddleware } from "redux";
import { collections, isLoading } from "./collections/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
  collections,
  isLoading,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

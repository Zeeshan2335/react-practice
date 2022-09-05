import { createStore, combineReducers } from "redux";
import { CountReducer } from "./Reducers/CounReducer";

export const ConfigStore = () => {
  const myStore = createStore(
    // in combineReducers we must have to write reudcers in {}
    combineReducers({ CountReducer }),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return myStore;
};

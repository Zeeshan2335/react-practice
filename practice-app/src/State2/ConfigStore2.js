import { createStore, combineReducers } from "redux";
import { CountRed } from "./Reducers2/countReducer2";

export const configStore2 = () => {
  const myStore2 = createStore(
    combineReducers({ CountRed }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return myStore2;
};

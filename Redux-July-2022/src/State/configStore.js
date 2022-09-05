import { createStore, combineReducers } from "redux";
import { countReducer } from "./Reducers/countReducer";

export const configStore = () => {
  const store = createStore(
    combineReducers({ countReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

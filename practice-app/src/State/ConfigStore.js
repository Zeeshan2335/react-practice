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

// import {
//     createStore,
//     combineReducers
//   } from "redux";
//   // import { productsReducer } from "../reducer/productsReducer";
//   // import { deptReducer } from "../reducer/deptReducer";

//   export const configStore = () => {
//     const myStore = createStore(
//       combineReducers({
//         //  productsReducer, deptReducer

//       }),
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
//     return myStore;
//   };

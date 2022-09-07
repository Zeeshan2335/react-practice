import React, { useReducer } from "react";
import { coursesReducer } from "./coursesReducer";
import ReactCop from "./ReactCop";

const UseReducer = () => {
  // const [state, dispatch] = useReducer(reducer, initialArg, init);
  // it is like useState and redux
  // useReducer this is used to manage the state at mid apps
  //step 1 : we have to initial the state with initial vlue it can be {}, [] etc.
  const initialState = { react: false, graphQL: false, angular: false };

  const [state, dispatch] = useReducer(coursesReducer, initialState);
  console.log("state__>", state);
  // here initialState go to in state of coursesReducer
  const handleReactPress = () => {
    dispatch({ type: "REACT" });
  };

  const handleGraphQLPress = () => {
    dispatch({ type: "GRAPHQL" });
  };

  const handleAngularPress = () => {
    dispatch({ type: "ANGULAR" });
  };
  return (
    <div>
      <div className="box">
        <h2>Use Reducer Example Component</h2>
        <p>
          Learning{" "}
          {state.react ? (
            <ReactCop />
          ) : state.graphQL ? (
            "this is graph QL..."
          ) : state.angular ? (
            "Angular"
          ) : (
            "Not Started"
          )}
        </p>
        <div>
          <button
            type="button"
            onClick={handleReactPress}
            className="button is-grey"
          >
            React
          </button>
          <button
            type="button"
            onClick={handleGraphQLPress}
            className="button is-dark"
          >
            GraphQL
          </button>
          <button
            type="button"
            onClick={handleAngularPress}
            className="button is-grey"
          >
            Angular
          </button>
          <h1>{state.graphQL}</h1>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;

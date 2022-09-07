import { Button } from "@mui/material";
import React, { useReducer } from "react";

const TryUseReducerHook = () => {
  const initialState = { couter: 20 };
  const couterReducer = (inState, action) => {
    //here inState receives initialState of use Reducer
    // and action receives dispatch of use Reducer
    if (action.type === "ADD") {
      return { ...inState, couter: action.data + 1 };
    }
    if (action.type === "LESS") {
      return { ...inState, couter: action.data - 1 };
    }
    return inState;
  };

  const [state, dispatch] = useReducer(couterReducer, initialState); //initialState={ couter: 20 };
  //state it is like useSelector of redux

  const handlePlus = () => {
    state.couter < 30 && dispatch({ type: "ADD", data: state.couter });
  };
  const handleMinus = () => {
    state.couter > 10 && dispatch({ type: "LESS", data: state.couter });
  };
  return (
    <div>
      <h1>I am Trying useReducer </h1>
      <Button variant="contained" onClick={handlePlus}>
        +
      </Button>
      <h3>{state.couter} </h3>
      <Button variant="contained" onClick={handleMinus}>
        -
      </Button>
    </div>
  );
};

export default TryUseReducerHook;

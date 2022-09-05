import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const selector = useSelector((Data) => Data.countReducer.count);
  console.log("selector==>", selector);

  const handleAdd = () => {
    dispatch({ type: "SET_ADD", data: selector + 1 });
  };

  const handleLess = () => {
    dispatch({ type: "SET_ADD", data: selector - 1 });
  };
  return (
    <div>
      <h1> this is counter</h1>

      <Button variant="contained" onClick={handleAdd}>
        +
      </Button>
      <h1>{selector}</h1>
      <Button variant="contained" onClick={handleLess}>
        -
      </Button>
    </div>
  );
};

export default Counter;

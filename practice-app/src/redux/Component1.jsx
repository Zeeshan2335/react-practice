import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Component1 = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.CountReducer.count);
  //   console.log(selector);

  const handleAdd = (status) => {
    console.log(status);
    if (status === "P") {
      dispatch({ type: "SET_COUNT", data: selector + 1 });
    }
    if (status === "M") {
      dispatch({ type: "SET_COUNT", data: selector - 1 });
    }
  };

  return (
    <div style={{ border: " solid 2px" }}>
      <h1> comp 1</h1>

      <Button variant="contained" onClick={() => handleAdd("P")}>
        +{" "}
      </Button>
      <Button variant="contained" onClick={() => handleAdd("M")}>
        {" "}
        -{" "}
      </Button>
    </div>
  );
};

export default Component1;

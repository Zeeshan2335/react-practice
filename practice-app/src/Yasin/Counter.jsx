import React, { useState } from "react";
import { Button } from "@mui/material";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const handleInc = () => {
    setIsActive(false);
    count < 10 && setCount(count + 1);
  };
  const handleDec = () => {
    count > 0 && setCount(count - 1);
    count == 0 && setIsActive(true);
  };
  return (
    <div>
      <Button variant="contained" onClick={handleInc}>
        {" "}
        Increment
      </Button>
      <h1>Count: {count}</h1>
      <Button variant="contained" onClick={handleDec} disabled={isActive}>
        {" "}
        Decrement
      </Button>
    </div>
  );
};

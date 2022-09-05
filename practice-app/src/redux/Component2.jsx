import React from "react";
import { useSelector } from "react-redux";

const Component2 = () => {
  const selector = useSelector((kuchBhi) => kuchBhi.CountReducer.count);
  console.log(selector);
  return (
    <div style={{ border: " solid 2px" }}>
      <h1> comp 2</h1>
      <h1>{selector} </h1>
    </div>
  );
};

export default Component2;

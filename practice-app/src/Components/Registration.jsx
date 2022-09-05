import { Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

const Registration = () => {
  // const [txt, setTxt] = useState("");
  // const selector = useSelector((state) => state.CountReducer.count);
  // console.log("selector==>", selector);
  // const dispatch = useDispatch();
  // const handleDispatch = (data) => {
  //   dispatch({ type: "SET_COUNT", data: data });
  // };

  return (
    <>
      <h1>counter </h1>
      {/* <h1>{selector} </h1>
      <Typography variant="h2" ata-aos="fade-up" data-aos="fade-left">
        Registration
      </Typography>
      <h1>send input data to redux store</h1>
      <TextField variant="standard" onChange={(e) => setTxt(e.target.value)} />
      <Button variant="contained" onClick={() => handleDispatch(txt)}>
        add to redux
      </Button> */}
    </>
  );
};

export default Registration;

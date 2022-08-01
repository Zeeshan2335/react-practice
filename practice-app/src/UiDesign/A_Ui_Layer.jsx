import { Grid } from "@mui/material";
import React from "react";
import Intro from "./Intro";

const A_Ui_Layer = () => {
  return (
    <>
      {/* <h1>A UI Layer</h1> */}
      <Grid container sx={{ bgcolor: "red" }}>
        <Grid item xs={4} sx={{ bgcolor: "blue" }}>
          {/* <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1> */}
        </Grid>
        <Grid item xs={8} sx={{ bgcolor: "black " }}>
          <Intro />
          <Grid
            item
            xs={6}
            sx={{ bgcolor: "white" }}
            className="img"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <img src="logo512.png" alt="" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default A_Ui_Layer;

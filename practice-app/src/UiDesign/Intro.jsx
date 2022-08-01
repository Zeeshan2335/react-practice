import { Grid, TextField, Typography, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import React from "react";

const Intro = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        className="intro_container"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <SearchIcon className="sicon" />
              <TextField variant="standard" className="input" />
            </Grid>
            <Grid item xs={2}>
              <PersonOutlineIcon className="picon" />
            </Grid>
            <Grid item xs={2}>
              decorage
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <hr />
          <Typography variant="h3" className="txt_grid">
            Hi,There I am <br /> Syed Zeeshan
          </Typography>
        </Grid>
        <Grid item xs={10} className="about_grid">
          <span>About</span>
          <Typography variant="h6" className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos
            error fugiat magni quis. Excepturi hic a nulla! Laboriosam ut qui
          </Typography>
        </Grid>
        <Grid item xs={4} className="btn_grid">
          <Button variant="outlined">Read More</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Intro;

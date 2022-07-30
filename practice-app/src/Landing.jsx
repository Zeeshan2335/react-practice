import { Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalOfFencing from "./Components/Geometry/CalOfFencing";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import SideBar from "./Components/SideBar";
import User from "./Components/User";

const Landing = () => {
  return (
    <>
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<User />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/CalOfFencing" element={<CalOfFencing />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  );
};

export default Landing;

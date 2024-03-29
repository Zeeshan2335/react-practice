import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CalOfFencing from "./Components/Geometry/CalOfFencing";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import SideBar from "./Components/SideBar";
import MobileList from "./Components/todos/mobileList";
import Child from "./Components/UseNavigateComp/Child";
import MainComp from "./Components/UseNavigateComp/MainComp";
import User from "./Components/User";
import A_Ui_Layer from "./UiDesign/A_Ui_Layer";

const Landing = () => {
  return (
    // background:;
    <>
      <BrowserRouter>
        <Grid container spacing={3}>
          <Grid item xs={2.5}>
            <Card sx={{ bgcolor: "maroon" }}>
              <CardContent className="slider">
                <SideBar />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={9}>
            <Card>
              <CardContent>
                <Routes>
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/" element={<CalOfFencing />} />
                  <Route path="/mobile" element={<MobileList />} />
                  <Route path="/auilayer" element={<A_Ui_Layer />} />
                  <Route path="/api" element={<MainComp />} />
                  <Route path="/child" element={<Child />} />
                </Routes>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  );
};

export default Landing;

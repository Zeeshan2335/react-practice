import { Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <>
      <h1 data-aos="fade-right">this is Login Components</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <h1>login here</h1>
              <TextField variant="standard" label="User ID" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </>
  );
};

export default Login;

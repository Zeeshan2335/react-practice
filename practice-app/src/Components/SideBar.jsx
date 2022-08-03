import { Button, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const SideBar = () => {
  return (
    <>
      {/* <h1>side bar</h1> */}
      <Grid
        container
        spacing={3}
        sx={{ bgcolor: "maroon" }}
        data-aos="flip-left"
      >
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Link style={{ textDecoration: "none" }} to="/user">
                <Button fullWidth className="btn">
                  User
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Link style={{ textDecoration: "none" }} to="/">
                <Button fullWidth className="btn">
                  Fenching Calcuation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Button fullWidth className="btn">
                  Login
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Link style={{ textDecoration: "none" }} to="/registration">
                <Button fullWidth className="btn">
                  Registration
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Link style={{ textDecoration: "none" }} to="/mobile">
                <Button fullWidth className="btn">
                  mobile
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Link style={{ textDecoration: "none" }} to="/auilayer">
                <Button fullWidth className="btn">
                  Ui layer 1
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Link style={{ textDecoration: "none" }} to="/api">
                <Button fullWidth className="btn">
                  E Shop
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SideBar;

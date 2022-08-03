import { Button, Card, CardContent, Grid, Rating } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Child = () => {
  const dataReceived = useLocation();
  const data = dataReceived.state;
  const navigation = useNavigate();

  const handleRoute = (txt) => {
    console.log(txt);

    // here the state is used to send the data to route component
    // here we send the txt prop to child component
    navigation("/", { state: txt });
  };
  return (
    <>
      <Grid container spacing={2}>
        <Card>
          <CardContent>
            <h1> child comp </h1>
            <Grid container>
              <Grid item xs={5}>
                <img src={data.image} alt="" width="400px" />
              </Grid>
              <Grid item xs={5}>
                <h1>{data.title} </h1>
                <h3>{data.category} </h3>
                <h2>${data.price} </h2>
                <p>{data.description} </p>
                <Button
                  variant="contained"
                  onClick={() => handleRoute("hi this is syed zeeshan")}
                >
                  back to Home
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Child;

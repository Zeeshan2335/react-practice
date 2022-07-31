import { Card, CardContent, Grid, Button } from "@mui/material";
import React from "react";

const MobileItem = ({ item, index, handleDelete }) => {
  return (
    <>
      <Grid
        key={index}
        item
        xs={3}
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="200"
      >
        <Card sx={{ bgcolor: "maroon", color: "white" }}>
          <CardContent>
            <h1>{item} </h1>
            <Button
              variant="contained"
              sx={{ bgcolor: "black", color: "white" }}
              onClick={() => handleDelete(index)}
            >
              Delete{" "}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default MobileItem;

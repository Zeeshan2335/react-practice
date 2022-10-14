import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const HomeComp = () => {
  const [api, setApi] = useState([]);
  const [apiCopy, setApiCopy] = useState([]);
  const [srch, setSrch] = useState("");
  console.log("srch==>", srch);
  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setApi(result.data);
    setApiCopy(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    const fltData = apiCopy.filter((item) => String(item.price).includes(srch));
    console.log("fltData", fltData);
    setApi(fltData);
  }, [srch]);

  return (
    <div>
      <h1>this is HomeCop</h1>
      <h3>Product search by Price</h3>
      <TextField onChange={(e) => setSrch(e.target.value)} />
      <Grid container>
        {api.map((item) => (
          <>
            {/* <h1>{item.price} </h1> */}
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <img src={item.image} alt="" width="200px" />
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    ${item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default HomeComp;

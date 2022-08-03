import { Button, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MainComp = () => {
  const [product, setProduct] = useState([]);
  const navigation = useNavigate();
  const received = useLocation();

  const handleRoute1 = (item) => {
    console.log(item);
    navigation("/child", { state: item });
  };

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setProduct([...result.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <h1> Main component </h1>
      <h4>{received.state} </h4>
      <Button variant="contained" onClick={handleRoute1}>
        click to child
      </Button> */}
      <Grid container spacing={2} sx={{ bgcolor: "maroon" }}>
        {product.map((elem) => (
          <>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <img
                    src={elem.image}
                    alt=""
                    width="200px"
                    height="250px"
                    data-aos="fade-up"
                  />
                  <h3>
                    {elem.title.substr(0, 25)}
                    {25 < elem.title.length ? "..." : ""}
                  </h3>
                  <Button
                    variant="contained"
                    onClick={() => handleRoute1(elem)}
                  >
                    More Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default MainComp;

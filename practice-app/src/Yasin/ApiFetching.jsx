import React, { useEffect, useState } from "react";
import { Card, Grid, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

export const ApiFetching = () => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    const apidata = await axios.get("https://restcountries.com/v3.1/all");
    console.log(apidata.data);
    setData(apidata.data);
    
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <Grid container>
        {data.map((item) => {
          return (
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <h1>{item.name.common}</h1>
                  <Link to="/details">
                 
                    <img src={item.flags.png} alt="" height={"200px"} />
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

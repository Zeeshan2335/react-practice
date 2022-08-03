import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TaskApi = () => {
  const [api, setApi] = useState([]);

  const getApi = async () => {
    const result = await axios.get(
      "https://api.bricketc.com/bricketc-backend-php/get_all_courses.php"
    );
    console.log(result.data.body);
    setApi(result.data.body);
    console.log("api", api);
  };

  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      <h1>Task Api</h1>
      <Grid container spacing={2}>
        {api.map((item) => (
          <>
            <Grid item xs={3}>
              <h4>{item.name}</h4>
              <img src={item.imageUrl} alt="" />
              <p>{item.info} </p>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default TaskApi;

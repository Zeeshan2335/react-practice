import { Grid, Typography, Box } from "@mui/material";
import React from "react";

const User = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ width: "100%", maxWidth: 1000 }}>
            <Typography variant="h1"> PICKUPBIZ SOFTWARE </Typography>
          </Box>
        </Grid>
        {/* <Grid item xs={6}>
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Typography variant="h1"> Software </Typography>
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
};

export default User;

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const CalOfFencing = () => {
  const [Length, setLength] = useState(0);
  const [Braith, setBraith] = useState(0);
  const [layers, setLayers] = useState(0);
  const [cost, setCost] = useState(0);
  const [num, setNum] = useState("");

  const handleCalculation = () => {
    const Farea =
      Number(Length) + Number(Braith) + Number(Braith) + Number(Length);

    const wireReq = Farea * layers * cost;
    setNum(wireReq);
  };

  const handleReset = () => {
    setLength("");
    setBraith("");
    setCost("");
    setLayers("");
    setNum("");
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">Calculation of Fenching wire</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            className="inputs"
            type="number"
            value={Length}
            n
            onFocus={() => setLength("")}
            variant="outlined"
            label="Lenght"
            onChange={(e) => setLength(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className="inputs"
            type="number"
            value={Braith}
            variant="outlined"
            label="Braith"
            onFocus={() => setBraith("")}
            onChange={(e) => setBraith(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className="inputs"
            type="number"
            value={layers}
            variant="outlined"
            label="Layers"
            onFocus={() => setLayers("")}
            onChange={(e) => setLayers(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            className="inputs"
            type="number"
            value={cost}
            variant="outlined"
            label="Cost of Wire"
            onFocus={() => setCost("")}
            onChange={(e) => setCost(e.target.value)}
          />
        </Grid>

        <Grid item xs={3}>
          <Button
            disabled={10 > Length || 20 > Braith || 1 > cost || 1 > layers}
            variant="contained"
            color="success"
            onClick={handleCalculation}
          >
            Calculate
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="error" onClick={handleReset}>
            Reset
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h3">Rs. {num} </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default CalOfFencing;

import { Boy } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProdSetInGodown = () => {
  const [bay, setBay] = useState("");
  const [num, setNum] = useState();
  const [show, setShow] = useState("");
  const [showNo, setShowNo] = useState("");
  // const [status, setStatus] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [msg, setMsg] = useState(false);
  const [msgN, setMsgN] = useState(false);
  console.log("msg==>", msg);
  const [inptToggle, setInptToggle] = useState(true);
  console.log("show==>", show);
  console.log("inptToggle==>", inptToggle);
  //   console.log(bay);
  //   console.log(num);

  const handleSumbit = () => {};

  const allConditions = () => {
    if (bay.length > 1) {
      setMsg(true);
      setShow("write Only one Alphabate ");
      if (!/^[a-zA-Z]*$/g.test(bay)) {
        if (bay.length > 1 && bay.length < 1 && bay !== "") {
          setMsg(true);
          setShow("done");
        }
        setShow("Number not allow");
        setMsg(true);
      }
    } else {
      setMsg(false);
    }
    if (num < 0) {
      if (num > 25) {
        setMsgN(true);
        setShowNo("Max limit is 25");
      }
      setMsgN(true);
      setShowNo("Minum limit is 1 ");
    } else {
      setMsgN(false);
    }
  };

  useEffect(() => {
    const inputNum = num >= 1 && num <= 25 ? true : false;
    const re = !/^[a-zA-Z]*$/g.test(bay);

    // const a = bay.length < 1 ? true : false;
    setToggle(bay.length !== 1 || !inputNum || re);

    allConditions();
  }, [bay, num, show]);

  return (
    <>
      <h1>Product set in Godown</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            color={msg == true ? "error" : ""}
            label="Park Bay"
            value={bay}
            variant="outlined"
            onChange={(e) => setBay(e.target.value.toUpperCase())}
          />
        </Grid>
        <Grid item xs={4}>
          {/* this should No */}
          <TextField
            // disabled={inptToggle}
            color={msgN == true ? "error" : ""}
            value={num}
            fullWidth
            type="number"
            label="Park No"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          {/* this should No */}
          <Button disabled={toggle} variant="outlined" onClick={handleSumbit}>
            Sumbit
          </Button>
        </Grid>

        <Grid item={4}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {msg === true ? <Alert severity="error">{show}</Alert> : ""}

            {/* <Alert severity="success">{showNo}</Alert> */}
          </Stack>
        </Grid>
        <Grid item={4}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {msgN === true ? <Alert severity="error">{showNo}</Alert> : ""}

            {/* <Alert severity="success">{showNo}</Alert> */}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ProdSetInGodown;

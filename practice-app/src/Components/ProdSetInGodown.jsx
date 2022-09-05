import { Boy } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProdSetInGodown = () => {
  const [bay, setBay] = useState("");
  const [num, setNum] = useState();
  const [show, setShow] = useState("");
  const [showNo, setShowNo] = useState("");
  const [toggle, setToggle] = useState(false);
  const [msg, setMsg] = useState(false);
  const [msgN, setMsgN] = useState(false);
  // console.log("toggle==>", toggle);
  console.log("msgN==>", msgN);
  const [inptToggle, setInptToggle] = useState(true);
  // console.log("show==>", show);
  // console.log("inptToggle==>", inptToggle);
  // console.log(bay);
  // console.log(num);

  const handleSumbit = async () => {
    // const result = axios.post("",)

    // const url = "http://localhost:4040/api/addbenef";
    const payload = {
      parkingBay: bay,
      parkingNo: num,
    };
    console.log("payload==>", payload);
    // const result = await axios.post(url, payload);
    // setTxtSucces(result.data);
    // console.log(result)
  };

  const allConditions = () => {
    if (bay.length > 1) {
      setMsg(true);
      setShow("Enter Single Letter Eg. A Or B  ");
      if (!/^[a-zA-Z]*$/g.test(bay)) {
        setShow("Enter Valid Letter");
        setMsg(true);
      }
    } else {
      setMsg(false);
    }
    if (num < 0) {
      setMsgN(true);
      setShowNo("Minum limit is 1 ");
    } else {
      setMsgN(false);
    }
    if (num > 25) {
      setMsgN(true);
      setShowNo("Max limit is 25");
    }
    if (bay.length > 1 && bay.length < 1 && bay !== "") {
      setMsg(true);
      setShow("done");
    }
  };

  useEffect(() => {
    const inputNum = num >= 1 && num <= 25 ? true : false;
    const re = !/^[a-zA-Z]*$/g.test(bay);
    setToggle(bay.length !== 1 || !inputNum || re);
    allConditions();
  }, [bay, num, show]);

  return (
    <>
      <h1>Product set in Godown</h1>
      {/* <Grid con></Grid> */}

      <Grid container spacing={2}>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <TextField
            fullWidth
            color={msg == true ? "error" : ""}
            label="Park Bay"
            value={bay}
            variant="outlined"
            onChange={(e) => setBay(e.target.value.toUpperCase())}
          />
        </Grid>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          {/* this should No */}
          <TextField
            color={msgN == true ? "error" : ""}
            value={num}
            fullWidth
            type="number"
            label="Park No"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>

        <Grid item xl={4} lg={12} md={12} sm={12} xs={12}>
          {/* this should No */}
          <Button
            fullWidth
            disabled={toggle}
            variant="contained"
            onClick={handleSumbit}
          >
            Sumbit
          </Button>
        </Grid>

        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {msg === true ? <Alert severity="error">{show}</Alert> : ""}
          </Stack>
        </Grid>
        <Grid item xl={4} lg={6} md={6} sm={12} xs={12}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {msgN == true ? <Alert severity="error">{showNo}</Alert> : ""}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ProdSetInGodown;

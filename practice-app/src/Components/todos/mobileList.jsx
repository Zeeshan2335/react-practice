import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import MobileItem from "./MobileItem";

const MobileList = () => {
  const [txt, setTxt] = useState("");
  const [todo, setTodo] = useState([]);
  const [flt, setFlt] = useState([]);
  console.log("txt==>", txt);
  console.log(todo);

  const handleAdd = () => {
    setTodo([...todo, txt]);
    setFlt([...todo, txt]);
    setTxt("");
  };
  const handleDelete = (i) => {
    const filtered = todo.filter((item, index) => index !== i);
    console.log(filtered);
    setTodo(filtered);
  };

  return (
    <>
      <Grid container spacing={3} data-aos="fade-up" data-aos-duration="1000">
        <Grid item xs={12}>
          <h1>Mobile List </h1>
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            variant="standard"
            label="Enter Mobiles"
            onChange={(e) => setTxt(e.target.value.toUpperCase())}
            value={txt}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            // kar input kali nhi hai to hi add function call kar
            onClick={() => txt !== "" && handleAdd()}
          >
            ADD
          </Button>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={4}>
        {todo.map((item, index) => (
          <>
            <MobileItem item={item} index={index} handleDelete={handleDelete} />
          </>
        ))}
      </Grid>
    </>
  );
};

export default MobileList;

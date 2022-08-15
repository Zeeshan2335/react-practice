import { InsertEmoticon } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export const TodoList2 = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [list, SetList] = useState([]);
  const [listCopy, SetListCopy] = useState([]);

  const handleAdd = () => {
    SetList([...list, text]);
    SetListCopy([...listCopy, text]);
  };

  const handleDelete = (ind) => {
    const result = list.filter((elem, i) => i != ind);
    SetList(result);
  };

  useEffect(() => {
    const result = listCopy.filter((elem) =>
      elem.toUpperCase().includes(search.toUpperCase())
    );
    // const result = listCopy.filter((elem) => elem.toUpperCase() === search.toUpperCase());
    SetList(result);
  }, [search]);
  
  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />

      <TextField variant="outlined" onChange={(e) => setText(e.target.value)} />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
      {list.map((item, ind) => {
        return (
          <div>
            <h1>{item}</h1>
            <Button variant="contained" onClick={() => handleDelete(ind)}>
              Delete
            </Button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

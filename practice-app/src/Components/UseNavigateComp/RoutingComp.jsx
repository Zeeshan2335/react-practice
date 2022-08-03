import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Child from "./Child";
import MainComp from "./MainComp";

const RoutingComp = () => {
  return (
    <div>
      {/* <h1>Routing componet</h1> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComp />} />
          <Route path="/child" element={<Child />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingComp;

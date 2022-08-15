import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing";
import { TodoList2 } from "./Yasin/TodoList2";
import { Card, Grid } from "@mui/material";
import { Counter } from "./Yasin/Counter";
import { ApiFetching } from "./Yasin/ApiFetching";
// import User from './Components/User';
// import MobileList from './Components/todos/mobileList';
// import TaskApi from './Components/TaskApi/TaskApi';
// import Login from './Components/Login';
// import RoutingComp from './Components/UseNavigateComp/RoutingComp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryDetails } from "./Yasin/CountryDetails";

function App() {
  return (
    <div className="App">
      <Landing />
      {/* <MobileList/> */}
      {/* <User/> */}
      {/* <TaskApi/> */}
      {/* <Login/> */}
      {/* <RoutingComp/> */}
      {/* <Grid container mt={4}>
        <Grid item xs={4}>
          <Card>
            <TodoList2 />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Counter></Counter>
          </Card>
        </Grid>
      </Grid> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiFetching />} />
          <Route path="/details" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter> */}
      {/* 
      <Grid container mt={6}>
        <Grid item xs={12}>
          <ApiFetching />
        </Grid>
      </Grid> */}
    </div>
  );
}

export default App;

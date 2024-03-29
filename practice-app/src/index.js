import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { ConfigStore } from "./State/ConfigStore";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import HomeComp from "./Component2/HomeComp";
// ..
AOS.init();
const localStore = ConfigStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={localStore}>
      <App />

      {/* <HomeComp /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

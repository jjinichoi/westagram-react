import React from "react";
import ReactDOM from "react-dom/client";
// import Choijini from './Choijini';
// import Main from './pages/Main/Main';
import Login from "./pages/Login/Login";
import "./styles/common.css";
import "./styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

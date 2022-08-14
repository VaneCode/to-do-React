import React from "react";
import ReactDOM from "react-dom";
//component file
import ToDoContainer from "./components/ToDoContainer";
//stylesheet
import "./App.css";
ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById("root")
);

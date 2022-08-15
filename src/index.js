import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from "./functionBased/components/ToDoContainer"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);

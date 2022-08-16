import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ToDoContainer from './functionBased/components/ToDoContainer';

// stylesheet
import './functionBased/App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoContainer />
    </BrowserRouter>
  </React.StrictMode>,
);

/* ReactDOM.render(
  <React.StrictMode>
    <ToDoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
); */

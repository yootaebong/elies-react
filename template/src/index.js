import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
  //  use strict 와 같은 역할
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

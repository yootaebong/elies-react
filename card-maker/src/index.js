import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';

const authService = new AuthService();

ReactDOM.render(
  //  use strict 와 같은 역할
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';

import ReactDOM from 'react-dom';
import App from './app.jsx';

ReactDOM.render(
  //  use strict 와 같은 역할
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

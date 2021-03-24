import React from 'react';
import ReactDOM from 'react-dom';
import Index from './component/page/index';

ReactDOM.render(
  //  use strict 와 같은 역할
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root'),
);

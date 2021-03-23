import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
  // 개발 모드에서는 로그가 2번씩 찍힌다.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

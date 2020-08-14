import React from 'react';
import ReactDOM from 'react-dom';
import Mount from './Mount';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Mount />
  </React.StrictMode>,
  document.getElementById('mount'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}

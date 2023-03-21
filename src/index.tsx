import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Shop from './components/Shop'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Shop />
  </BrowserRouter>
);

reportWebVitals();

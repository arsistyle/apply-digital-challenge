import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { Provider } from 'react-redux';

import { HitsApp } from './HitsApp';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <HitsApp />
    </BrowserRouter>
  </Provider>
);

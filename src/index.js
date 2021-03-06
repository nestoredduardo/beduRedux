/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './routes/App';
import generateStore from './redux/store';

import './assets/styles/Icons.css';

const store = generateStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

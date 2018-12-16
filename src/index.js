import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import dataPassApp from './reducers'
import { Provider } from "react-redux";
import { createStore } from 'redux'

const store = createStore(dataPassApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

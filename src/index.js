import React from 'react';
import { createStore} from 'redux';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './App';
import {todoApp} from "./reducers/todoApp";

export const store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<App/>, document.getElementById('root'));


import React from 'react';
import { createStore} from 'redux';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './App';
import {todoApp} from "./reducers/todoApp";

const store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const render = () => {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
};

store.subscribe(render);
render();

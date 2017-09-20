import React from 'react';
import { createStore} from 'redux';
import ReactDOM from 'react-dom';
import './scss/index.css';
import App from './App';
import {todoApp} from "./reducers/todoApp";

const store = createStore(todoApp);
ReactDOM.render(<App />, document.getElementById('root'));

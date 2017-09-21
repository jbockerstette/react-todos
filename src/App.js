import React from 'react';
import './scss/App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

let App = () => {
  return (
    <div>
      <AddTodo/>
      <TodoList/>
      <TodoFilter/>
    </div>
  );
};

export default App;

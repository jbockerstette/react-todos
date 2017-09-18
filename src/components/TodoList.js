import React from 'react'
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


let TodoList = (props) => {
  return (
    <ul>
      {props.items.map(todo => <TodoItem  key={todo.id} todo={todo} handleClick={props.handleClickTodo}/>)}
    </ul>
  );
};

export default TodoList;

TodoList.PropTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isComplete: PropTypes.bool
  })),
  handleClickTodo: PropTypes.func
};

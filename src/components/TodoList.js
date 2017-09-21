import React from 'react'
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


let TodoList = (props) => {
  const {items, handleClickTodo, ...otherProps} = props;
  return (
    <ul>
      {items.map(todo => <TodoItem  onClick={() => handleClickTodo(todo)} key={todo.id} todo={todo} {...otherProps}/>)}
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
  handleClickTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
};

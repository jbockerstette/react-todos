import React from 'react'
import PropTypes from 'prop-types';


//line through style
const line_through = {
  textDecoration: "line-through"
};
//normal
const normal = {
  textDecoration: ""
};

let TodoItem = (props) => {
  const {todo, handleClickTodo, handleRemoveTodo} = props;
  return (
    <li>
      <span style={todo.isComplete ? line_through : normal} onClick={() => handleClickTodo(todo)}>
        {todo.text}
      </span><span>  </span>
      <button onClick={() => handleRemoveTodo(todo)}>Remove</button>
    </li>
  );
};

export default TodoItem;

TodoItem.PropTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    isComplete: PropTypes.bool
  }).isRequired,
  handleClickTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
};

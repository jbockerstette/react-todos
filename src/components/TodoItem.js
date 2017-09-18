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
  const {todo, handleClick} = props;
  return (
    <li style={todo.isComplete ? line_through : normal} onClick={() => handleClick(todo)}>
    {todo.text}
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
  handleClick: PropTypes.func.isRequired
};

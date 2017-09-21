import React from 'react'
import PropTypes from 'prop-types';
import MyButton from "./MyButton";


//line through style
const line_through = {
  textDecoration: "line-through"
};
//normal
const normal = {
  textDecoration: ""
};

let TodoItem = ({todo, onClick, handleRemoveTodo}) => {
  return (
    <li>
      <span style={todo.isComplete ? line_through : normal} onClick={onClick}>
        {todo.text}
      </span><span>  </span>
      <MyButton title={"Remove"} onClick={() => handleRemoveTodo(todo)}/>
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
  handleRemoveTodo: PropTypes.func.isRequired
};

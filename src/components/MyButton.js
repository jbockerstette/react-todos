import React from 'react'
import PropTypes from 'prop-types';


let MyButton = (props) => {
  const {title, onClick} = props;
  return (
    <button onClick={onClick}>{title}</button>
  );
};

export default MyButton;

MyButton.PropTypes = {
  title: PropTypes.string.isRequired,
};

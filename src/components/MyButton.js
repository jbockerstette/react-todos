import React from 'react'
import PropTypes from 'prop-types';


let MyButton = ({title, onClick}) => {
  return (
    <button onClick={onClick}>{title}</button>
  );
};

export default MyButton;

MyButton.PropTypes = {
  title: PropTypes.string.isRequired,
};

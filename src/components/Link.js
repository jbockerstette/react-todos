import React from 'react'
import PropTypes from 'prop-types';


let Link = ({
  isActive,
  onClick,
  children
}) => {
  return (
    <span onClick={onClick}>
      <span  style={isActive ? {textDecoration:"none"}: {textDecoration:"underline"}}>
        {children}
      </span>
      <span> </span>
    </span>
  );
};

Link.PropTypes = {
  isActive: PropTypes.bool
};


export default Link;



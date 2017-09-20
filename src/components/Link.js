import React from 'react'
import PropTypes from 'prop-types';


let Link = (props) => {
  return (
    <span onClick={props.onClick}>
      <span  style={props.isActive ? {textDecoration:"none"}: {textDecoration:"underline"}}>
        {props.children}
      </span>
      <span> </span>
    </span>
  );
};

Link.PropTypes = {
  isActive: PropTypes.bool
};


export default Link;



import React from 'react';

const Button = (props) => (
  <button onClick={props.func} className="btn"> {props.name} </button>
);

export default Button;
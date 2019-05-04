import React from 'react';

import '../../styles/_style.sass'; // Css-module styles

/**
 *Reusable react functional component that takes in onClick and text props
 */
const Button = props => (
  <button onClick={props.click} className="btn btn-white ">
    {props.text}
  </button>
);

export default Button;

import React from 'react';

import '../../styles/_style.sass'; // Css-module styles

/**
 *R eusable react functional component that takes in onClick and text props
 */
const Button = props => (
  <button onClick={props.click} class="btn btn-white ">
    {props.text}
  </button>
);

export default Button;

import React from 'react';

import '../../styles/_style.sass'; // Css-module styles

const Button = props => (
  <button onClick={props.click} class="btn btn-white ">
    See Details
  </button>
);

export default Button;

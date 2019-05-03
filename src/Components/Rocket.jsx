import React from 'react';

import '../../styles/_style.sass'; // Css-module styles

const Rocket = props => {
  const { name, description, images } = props;
  return (
    <div id="rocket">
      <h2> {name} </h2>
      <p> {description} </p>
      <img srcSet={images} />
    </div>
  );
};

export default Rocket;

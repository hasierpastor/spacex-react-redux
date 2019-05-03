import React from 'react';

import '../../styles/_style.sass'; // Css-module styles

const Rocket = props => {
  const { name, description, images } = props;
  let imageContent = images.map(image => {
    return <img src={image} alt="" />;
  });

  return (
    <div id="rocket">
      <h2> {name} </h2>
      <p> {description} </p>
      <div>{imageContent}</div>
    </div>
  );
};

export default Rocket;

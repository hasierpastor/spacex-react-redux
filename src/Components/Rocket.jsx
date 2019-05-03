import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/_style.sass'; // Css-module styles

const Rocket = props => {
  const { name, description, images, height, engine, mass, country } = props;

  let imageContent = images.map(image => (
    <img src={image} alt="" className="rocket-image" />
  ));

  return (
    <div id="rocket">
      <h2>
        {' '}
        {name} <FontAwesomeIcon icon="rocket" />
      </h2>
      <p> {description} </p>
      <p>Height: {height} ft</p>
      <p>Mass: {mass} lb</p>
      <p>Country: {country}</p>
      <div>{imageContent}</div>
    </div>
  );
};

export default Rocket;

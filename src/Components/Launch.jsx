import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { Link } from '../../node_modules/react-router-dom';

const Launch = props => {
  const { mission_name, rocket, getRocketData } = props;

  const getData = () => getRocketData(rocket.rocket_id);

  return (
    <div>
      <h2>{mission_name}</h2>
      <p>{rocket.rocket_name} </p>
      <Button click={getData} text="See Rocket Details!" />
    </div>
  );
};

export default Launch;

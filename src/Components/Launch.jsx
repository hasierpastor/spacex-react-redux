import React from 'react';
import Button from './Button';
import { Link } from '../../node_modules/react-router-dom';

const Launch = props => {
  const { mission_name, rocket, getRocketData } = props;

  const getData = () => getRocketData(rocket.rocket_id);

  return (
    <div>
      <Link onClick={getData} to=" ">
        {' '}
        {mission_name}{' '}
      </Link>
      <p> {rocket.rocket_name} </p>
    </div>
  );
};

export default Launch;

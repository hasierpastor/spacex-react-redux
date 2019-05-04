import React from 'react';
import Button from './Button';

/***
 * Launch component displays launch data and button
 * onClick push user to /rockets/id page where rocket info will be displayed
 */
const Launch = props => {
  const { mission_name, rocket, getRocketData } = props;

  const getData = () => getRocketData(rocket.rocket_id);

  return (
    <div>
      <h2>{mission_name}</h2>
      <p>Rocket name: {rocket.rocket_name} </p>
      <Button click={getData} text="See Rocket Details!" />
    </div>
  );
};

export default Launch;

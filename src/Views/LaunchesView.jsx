import React, { useEffect, useState } from 'react';
import ConnectedView from '../Containers/MasterLayout';
import Launch from '../Components/Launch';
import Loading from '../Components/Loading';
import RocketService from '../Services/RocketService';

const uuidv4 = require('uuid/v1');

/**
 * Launches View component is in charge of getting launches from redux store and displaying list of launches
 */
const LaunchesView = props => {
  const [isLoading, setLoading] = useState(true);

  //useEffect gets launches from redux and sets isLoading to false one complete => this will update state to render list
  useEffect(() => {
    props.getLaunches();
    setLoading(false);
  });

  //function that takes in rocket id and makes call to Space X api to get data => then push user to rocket page to see data
  const getRocketData = id => {
    RocketService.get(id)
      .then(r => JSON.stringify(r))
      .then(rocketData =>
        props.history.push({ pathname: `/rocket/${id}`, state: { rocketData } })
      );
  };

  const { errored, launches } = props;

  //if state isLoading display loading component
  if (isLoading) {
    return <Loading />;
  }

  //if redux state error property is true then display error message
  if (errored) {
    return (
      <p>
        Sorry! There was an error loading the launches. Please try again later
      </p>
    );
  }

  //map through launches array (from redux state) and create a list of Launch components
  const content = launches.map(launch => {
    return <Launch {...launch} getRocketData={getRocketData} key={uuidv4()} />;
  });

  return (
    <div>
      <h2> SpaceX Launches </h2>
      {content}
    </div>
  );
};

export default ConnectedView(LaunchesView, 'launches');

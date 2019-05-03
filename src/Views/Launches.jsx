import React, { useEffect, useState } from 'react';
import ConnectedView from '../Containers/MasterLayout';
import Launch from '../Components/Launch';
import Loading from '../Components/Loading';
import RocketService from '../Services/RocketService';

const LaunchesView = props => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    props.getLaunches();
    setLoading(false);
  });

  const getRocketData = id => {
    RocketService.get(id)
      .then(r => JSON.stringify(r))
      .then(rocketData =>
        props.history.push({ pathname: `/rocket/${id}`, state: { rocketData } })
      );
  };

  const { errored, launches } = props;

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (errored) {
    content = (
      <p>
        Sorry! There was an error loading the launches. Please try again later
      </p>
    );
  }

  content = launches.map(launch => {
    return <Launch {...launch} getRocketData={getRocketData} />;
  });

  return (
    <div>
      <h2> SpaceX Launches </h2>
      {content}
    </div>
  );
};

export default ConnectedView(LaunchesView, 'launches');

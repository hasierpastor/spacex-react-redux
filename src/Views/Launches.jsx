import React, { useEffect, useState } from 'react';
import ConnectedView from '../Containers/MasterLayout';
import Launch from '../Components/Launch';
import Loading from '../Components/Loading';
import RocketService from '../Services/RocketService';

const LaunchesView = props => {
  const [isLoading, setLoading] = useState(true);
  console.log(isLoading);

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

  if (isLoading) {
    return <Loading />;
  }

  if (errored) {
    return <p>Sorry! There was an error loading the items</p>;
  }

  const content = launches.map(launch => {
    return <Launch {...launch} getRocketData={getRocketData} />;
  });

  return (
    <div>
      <h2> SpaceX launches </h2>
      {content}
    </div>
  );
};

export default ConnectedView(LaunchesView, 'launches');

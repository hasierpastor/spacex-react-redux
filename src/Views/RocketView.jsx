import React from 'react';
import Layout from './Layout';
import Navigation from '../Components/Navigation';
import Rocket from '../Components/Rocket';

import '../../styles/_style.sass'; // Css-module styles

/**
 * RocketView component is in charge of returning Rocket component
 * Gets data to pass down from props.location (passed through history)
 * Wrapped in layout component
 */
const RocketView = props => {
  const menu = Navigation({ path: '/launches', title: 'Launches' });

  let dataObject = JSON.parse(props.location.state.rocketData);
  const {
    rocket_name,
    description,
    flickr_images,
    engines,
    height,
    mass,
    country
  } = dataObject.data;

  return (
    <Layout menu={menu} pageName="rockets">
      <Rocket
        name={rocket_name}
        description={description}
        images={flickr_images}
        mass={mass.lb}
        height={height.feet}
        country={country}
      />
    </Layout>
  );
};

export default RocketView;

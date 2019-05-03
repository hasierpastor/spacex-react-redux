import React from 'react';
import Layout from './Layout';
import Navigation from '../Components/Navigation';
import Rocket from '../Components/Rocket';

import '../../styles/_style.sass'; // Css-module styles

const RocketPage = props => {
  const menu = Navigation({ path: '/launches', title: 'Launches' });

  let dataObject = JSON.parse(props.location.state.rocketData);
  const { rocket_name, description, flickr_images } = dataObject.data;

  return (
    <Layout menu={menu} pageName="rockets">
      <Rocket
        name={rocket_name}
        description={description}
        images={flickr_images}
      />
    </Layout>
  );
};

export default RocketPage;

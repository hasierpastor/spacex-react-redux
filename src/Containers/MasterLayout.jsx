import React from '../../node_modules/react';
import { connect } from '../../node_modules/react-redux';
import Navigation from '../Components/Navigation';
import { getLaunches } from '../Actions/actionCreators';
import Layout from '../Views/Layout';

const menu = Navigation({ path: '/launches', title: 'Launches' });

function MasterLayoutHOC(WrappedComponent, pageName) {
  const MasterLayoutImpl = props => {
    const layoutProps = {
      menu,
      pageName
    };

    return (
      <Layout {...layoutProps}>
        <WrappedComponent {...props} />
      </Layout>
    );
  };

  const mapStateToProps = state => ({
    launches: state.launchCollection.launches,
    errored: state.launchCollection.errored
  });

  return connect(
    mapStateToProps,
    { getLaunches }
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;

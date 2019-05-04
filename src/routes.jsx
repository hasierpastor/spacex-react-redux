import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Loading from './Components/Loading';

//Lazily load Launches and RocketView component
const LaunchesView = lazy(() => import('./Views/LaunchesView'));
const RocketView = lazy(() => import('./Views/RocketView'));

/**
 * Routes component - if LaunchesView, RocketsView have not been loaded display Loading component using React Suspense
 * If pathname not found redirect to homepage
 */
const Routes = () => (
  <Router>
    <div>
      <Suspense fallback={<Loading />}>
        <Route exact path="/" component={LaunchesView} />
        <Route path="/launches" component={LaunchesView} />
        <Route exact path="/rocket/:id" component={RocketView} />
        <Redirect to="/" />
      </Suspense>
    </div>
  </Router>
);

export default Routes;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loading from './Components/Loading';

const Launches = lazy(() => import('./Views/LaunchesView'));
const RocketPage = lazy(() => import('./Views/RocketView'));

const Routes = () => (
  <Router>
    <div>
      <Suspense fallback={<Loading />}>
        <Route exact path="/" component={Launches} />
        <Route path="/launches" component={Launches} />
        <Route exact path="/rocket/:id" component={RocketPage} />
      </Suspense>
    </div>
  </Router>
);

export default Routes;

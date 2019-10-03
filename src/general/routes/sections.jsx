import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Icon } from 'rsuite';
import PrivateRoute from './private-route';

const Home = React.lazy(() => import('@home/index'));
const Dashboard = React.lazy(() => import('@dashboard/index'));
const Workspace = React.lazy(() => import('@workspace/index'));
const Channels = React.lazy(() => import('@channels/index'));
const Terminals = React.lazy(() => import('@terminals/index'));

const Loading = () => (
  <div className="flex-row center full">
    <Icon icon="spinner" size="2x" spin style={{ color: '#999' }} />
  </div>
);

const Sections = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route path="/" exact component={Home} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/workspace" exact component={Workspace} />
      <PrivateRoute path="/channels" exact component={Channels} />
      <PrivateRoute path="/terminals" exact component={Terminals} />
      {/* <Route path="*" component={Home} /> */}
    </Switch>
  </Suspense>
);

export default Sections;

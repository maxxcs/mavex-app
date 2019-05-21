import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './private-route';

import Home from '../../home/index';
import Dashboard from '../../dashboard/index';
import Workspace from '../../workspace/index';
import Channels from '../../channels/index';
import Terminals from '../../terminals/index';

const Sections = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <PrivateRoute path="/dashboard" exact component={Dashboard} />
    <PrivateRoute path="/workspace" exact component={Workspace} />
    <PrivateRoute path="/channels" exact component={Channels} />
    <PrivateRoute path="/terminals" exact component={Terminals} />
    {/* <Route path="*" component={Home} /> */}
  </Switch>
);

export default Sections;

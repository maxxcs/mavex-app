import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './private-route';

import Home from '../../home/index';
import Dashboard from '../../dashboard/index';
import Workspace from '../../workspace/index';
import Channels from '../../channels/index';
import Terminals from '../../terminals/index';

const Sections = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <PrivateRoute path="/dashboard" exact={true} component={Dashboard} />
      <PrivateRoute path="/workspace" exact={true} component={Workspace} />
      <PrivateRoute path="/channels" exact={true} component={Channels} />
      <PrivateRoute path="/terminals" exact={true} component={Terminals} />
      {/* <Route path="*" component={Home} /> */}
    </Switch>
  );
};

export default Sections;

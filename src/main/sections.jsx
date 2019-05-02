import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../dashboard/index';
import Workspace from '../workspace/index';
import Channels from '../channels/index';
import Terminals from '../terminals/index';

const Sections = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Dashboard} />
      <Route path="/dashboard" exact={true} component={Dashboard} />
      <Route path="/workspace" exact={true} component={Workspace} />
      <Route path="/channels" exact={true} component={Channels} />
      <Route path="/terminals" exact={true} component={Terminals} />
      <Route path="*" component={Dashboard} />
    </Switch>
  );
};

export default Sections;

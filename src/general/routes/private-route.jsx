import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '@config/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const renderComponent = props => {
    if (isAuthenticated())
      return (<Component {...props} />);
    else
      return (<Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  };

  return (
    <Route {...rest} render={renderComponent} />
  );
};

export default PrivateRoute;

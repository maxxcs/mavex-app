/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(useSelector((state) => state.general.user.isAuthenticated));
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      ))}
    />
  );
};

PrivateRoute.defaultProps = {
  location: {},
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
};

export default PrivateRoute;

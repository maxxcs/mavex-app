import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../config/auth';

import Login from './login';
import Register from './register';

const Home = ({ history }) => {
  if (isAuthenticated()) {
    history.push('/dashboard');
    return null;
  }
  const [display, setDisplay] = useState('LOGIN');
  const displayContent = () => {
    switch (display) {
      case 'LOGIN':
        return <Login changeDisplay={setDisplay} />;
      case 'REGISTER':
        return <Register changeDisplay={setDisplay} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex-row full center">{displayContent()}</div>
    </>
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.object,
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

export default withRouter(Home);

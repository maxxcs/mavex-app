import React from 'react';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../config/auth';

import Login from './login';
import Register from './register';

const Home = ({ history }) => {
  if (isAuthenticated()) {
    history.push('/dashboard');
    return null;
  } 

  return (
    <>
      <div style={{  display: 'flex', flexDirection: 'row', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Login />
      </div>
    </>
  );  
};

export default withRouter(Home);

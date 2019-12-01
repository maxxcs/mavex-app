import React, { useState } from 'react';

import Login from './components/login';
import Register from './components/register';

const Home = () => {

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

export default Home;

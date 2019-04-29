import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../config/store';
import '../config/client';
import './main.less';

import Grid from './grid';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
          <Grid />
        </BrowserRouter>
      </>
    </Provider>
  );
};

export default App;

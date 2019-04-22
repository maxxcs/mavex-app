import React from 'react';
import { Provider } from 'react-redux';

import store from '../config/store';
import client from '../config/client';

import 'modules/rsuite/dist/styles/rsuite.min.css';
import './main.css';

import Editor from '../workspace/editor';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Editor />
      </>
    </Provider>
  );
};

export default App;

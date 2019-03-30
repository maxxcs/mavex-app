import React from 'react';
import { Provider } from 'react-redux';

import store from '../config/store';
import '../config/realtime';
import './main.css';

import Editor from '../workspace/Editor';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Editor />
            </div>
        </Provider>
    );
};

export default App;

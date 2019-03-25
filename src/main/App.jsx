import React from 'react';
import { Provider } from 'react-redux';

import store from '../store/store';
import '../realtime/primus';
import './main.css';

import MainEditor from '../editor/MainEditor';

const App = props => {
    return (
        <Provider store={store}>
            <>
                <MainEditor />
            </>
        </Provider>
    );
};

export default App;

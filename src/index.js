import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import store from './store';
import App from './containers/App';

import registerServiceWorker from './registerServiceWorker';

const supportsHistory = 'pushState' in window.history
ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter forceRefresh={!supportsHistory}>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();

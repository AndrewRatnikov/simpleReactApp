import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import BreedStore from './store';

ReactDOM.render(
    <Provider store={BreedStore}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

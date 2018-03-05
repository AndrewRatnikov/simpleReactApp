import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { breedsSaga } from '../controllers';

import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), devTools)
);

sagaMiddleware.run( breedsSaga );

export default store;
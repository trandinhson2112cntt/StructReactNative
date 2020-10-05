import {createStore, applyMiddleware} from 'redux';
import {rootReducers} from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {rootSaga} from './rootSagas';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
export {store};

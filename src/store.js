import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import modules, { rootSaga } from './modules';
const logger = createLogger();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(modules, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
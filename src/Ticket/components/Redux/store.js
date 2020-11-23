import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './ReduxSaga/ticketSaga';
import rootReducers from './Reducers/rootReducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducers,
  applyMiddleware(...middleware),
);

sagaMiddleware.run(rootSaga);

export default store;

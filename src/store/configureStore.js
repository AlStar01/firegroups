import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import sagaMonitor from '../utils/sagaMonitor';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  /*eslint-disable */
  const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /*eslint-enable */


  return {
    ...createStore(
      rootReducer,
      composeSetup(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run
  };
}

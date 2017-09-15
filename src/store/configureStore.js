import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import sagaMonitor from '../utils/sagaMonitor';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  };
}

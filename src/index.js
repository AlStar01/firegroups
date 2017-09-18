import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'whatwg-fetch';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';
import configureStore from './store/configureStore';
import rootSaga from './sagas';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

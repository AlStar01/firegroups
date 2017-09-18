import { combineReducers } from 'redux';

import groups from './groups';
import auth from './auth';

const rootReducer = combineReducers({
  groups,
  auth
});

export default rootReducer;

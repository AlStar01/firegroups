import { combineReducers } from 'redux';

import { REQUEST_GROUPS, RECEIVE_GROUPS } from '../actions';

function groups(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_GROUPS:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_GROUPS:
      return {
        ...state,
        isFetching: false,
        items: action.groups
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  groups
});

export default rootReducer;

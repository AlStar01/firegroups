import { combineReducers } from 'redux';

import { REQUEST_GROUPS, RECEIVE_GROUPS } from '../actions';

import initialState from './initialState';

function groups(state = initialState, action) {
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

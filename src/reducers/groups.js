import { types } from '../actions/groups';

const initialState = {
  isFetching: false,
  items: []
};

function groups(state = initialState, action) {
  switch (action.type) {
    case types.GROUPS.REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case types.GROUPS.SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.groups
      };

    case types.SYNC.SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.groups || []
      };

    case types.SYNC.FAILURE:
      return {
        ...state,
        isFetching: false,
        items: []
      };

    case types.SYNC.START:
      return {
        ...state,
        isFetching: false,
        items: []
      };

    case types.SYNC.STOP:
      return {
        ...state,
        isFetching: false,
        items: []
      };

    default:
      return state;
  }
}

export default groups;

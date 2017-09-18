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

    default:
      return state;
  }
}

export default groups;

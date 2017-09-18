import { types } from '../actions/auth';

const initialState = {
  isFetching: false,
  isAuthenticated: false,
  user: undefined
};

function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      };

    case types.LOGIN.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }

    case types.LOGOUT.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true
      }

    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: undefined
      }

    default:
      return state;
  }
}

export default auth;

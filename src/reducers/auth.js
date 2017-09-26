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
      };

    case types.LOGIN.FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false
      };

    case types.LOGOUT.REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true
      };

    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        user: null
      };

    case types.LOGOUT.FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false
      };

    case types.SYNC.SUCCESS:
      return {
        ...state,
        isAuthenticated: action.user != null,
        user: action.user
      };

      case types.SYNC.ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };

    default:
      return state;
  }
}

export default auth;

export const types = {
  LOGIN: {
    REQUEST: 'REQUEST_LOGIN',
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE'
  },
  LOGOUT: {
    REQUEST: 'REQUEST_LOGOUT',
    SUCCESS: 'LOGOUT_SUCCESS',
    FAILURE: 'LOGOUT_FAILURE'
  }
};

export function requestLogin() {
  return {
    type: types.LOGIN.REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: types.LOGIN.SUCCESS,
    user
  };
}

export function loginFailure(error) {
  return {
    type: types.LOGIN.FAILURE,
    error
  };
}

export function requestLogout() {
  return {
    type: types.LOGOUT.REQUEST
  };
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT.SUCCESS
  };
}

export function logoutFailure(error) {
  return {
    type: types.LOGOUT.FAILURE,
    error
  };
}

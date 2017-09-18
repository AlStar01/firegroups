export const REQUEST_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

export const types = {
  GROUPS: {
    REQUEST: 'REQUEST_GROUPS',
    SUCCESS: 'REQUEST_GROUPS_SUCCESS',
    FAILURE: 'REQUEST_GROUPS_FAILURE'
  }
};

export function requestGroups() {
  return {
      type: types.GROUPS.REQUEST
  };
}

export function requestGroupsSuccess(groups) {
  return {
      type: types.GROUPS.SUCCESS,
      groups
  };
}

export function requestGroupsFailure(error) {
  return {
    type: types.GROUPS.FAILURE,
    error
  };
}

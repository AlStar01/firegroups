export const REQUEST_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

export const types = {
  GROUPS: {
    REQUEST: 'REQUEST_GROUPS',
    SUCCESS: 'REQUEST_GROUPS_SUCCESS',
    FAILURE: 'REQUEST_GROUPS_FAILURE'
  },
  SYNC: {
    SUCCESS: 'SYNC_GROUPS_SUCCESS',
    FAILURE: 'SYNC_GROUPS_FAILURE',
    START: 'SYNC_GROUPS_START',
    STOP: 'SYNC_GROUPS_STOP'
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

export function syncGroupsSuccess(groups) {
  return {
    type: types.SYNC.SUCCESS,
    groups
  }
}

export function syncGroupsFailure(error) {
  return {
    type: types.SYNC.FAILURE,
    error
  };
}

export function syncGroupsStart() {
  return {
    type: types.SYNC.START
  }
}

export function syncGroupsStop() {
  return {
    type: types.SYNC.STOP
  }
}

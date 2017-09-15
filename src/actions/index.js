export const REQUEST_GROUPS = 'REQUEST_GROUPS';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';

export function requestGroups() {
  return {
      type: REQUEST_GROUPS
  }
}

export function receiveGroups(groups) {
  return {
      type: RECEIVE_GROUPS,
      groups: groups
  }
}

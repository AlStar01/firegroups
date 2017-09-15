import { put, call, fork, takeEvery, all } from 'redux-saga/effects';

import * as actions from '../actions';
import { api } from '../services';

function* getAllGroups() {
  const groups = yield call(api.getGroups);
  yield put(actions.receiveGroups(groups));
}

export function* watchGetGroups() {
  yield takeEvery(actions.REQUEST_GROUPS, getAllGroups);
}

export function* startup() {
  yield put(actions.requestGroups());
}

export default function* root() {
  yield all([
    fork(startup),
    fork(getAllGroups),
    fork(watchGetGroups)
  ]);
}

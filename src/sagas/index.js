import { put, call, fork, takeEvery, all } from 'redux-saga/effects';

import * as actions from '../actions/groups';
import { api } from '../services';

import auth from './auth';

function* getAllGroups() {
  const groups = yield call(api.getGroups);
  yield put(actions.requestGroupsSuccess(groups));
}

function* watchGetGroups() {
  yield takeEvery(actions.types.GROUPS.REQUEST, getAllGroups);
}

function* startup() {
  yield put(actions.requestGroups());
}

export default function* root() {
  yield all([
    fork(startup),
    fork(getAllGroups),
    fork(watchGetGroups),
    auth()
  ]);
}

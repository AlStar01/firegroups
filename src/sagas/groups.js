import { call, cancelled, put, take, takeEvery, takeLatest, fork, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import firebase from '../firebase';

import * as groupActions from '../actions/groups';
import * as authActions from '../actions/auth';

import { createGroup } from '../services/groups.service';

function groupsChannel() {
  const ref = firebase.database().ref('group-metadata/');

  const channel = eventChannel(emit => {
    const callback = ref.on('child_added', (data) => {
      emit({
        snapshot: data,
        value: data.val()
      });
    });

    return () => ref.off('child_added', callback);
  });

  return channel;
}

function* create(action) {
  try {
    yield call(createGroup, action.group);
    yield put(groupActions.createGroupSuccess());
  }
  catch (error) {
    yield put(groupActions.createGroupFailure(error));
  }
}

function* watchCreateGroup() {
  yield takeEvery(groupActions.types.GROUPS.CREATE.REQUEST, create);
}

function* syncGroups() {
  const channel = yield call(groupsChannel);

  try {
    while (true) {
      const { value } = yield takeEvery(groupsChannel);
      yield put(groupActions.syncGroupsSuccess(value));
    }
  }
  catch (error) {
    yield put(groupActions.syncGroupsFailure(error));
  }
  finally {
    if(yield cancelled()) {
      channel.close();
    }
  }
}

function* sync() {
  const syncStartActions = [
    groupActions.types.SYNC.START,
    authActions.types.LOGIN.SUCCESS
  ];

  const syncStopActions = [
    authActions.types.SYNC.FAILURE,
    authActions.types.LOGIN.FAILURE,
    authActions.types.LOGOUT.SUCCESS,
    groupActions.types.SYNC.FAILURE,
    groupActions.types.SYNC.STOP
  ];

  while (yield take([...syncStartActions])) {
    const syncTask = yield fork(syncGroups);

    yield take([...syncStopActions]);

    yield cancel(syncTask);
  }
}

export default function* groupsRootSaga() {
  yield fork(sync);
  yield fork(watchCreateGroup);
}

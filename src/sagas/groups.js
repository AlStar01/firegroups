import { call, cancelled, put, take, fork, cancel } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga';

import firebase from '../firebase';

import * as actions from '../actions/groups';

function groupsChannel() {
  const ref = firebase.database().ref('groups/');

  const channel = eventChannel(emit => {
    const callback = ref.on('child_added', (data) => {
      emit({
        snapshot: data,
        value: data.val()
      })
    });

    return () => ref.off('child_added', callback);
  });

  return channel;
}

function* syncGroups() {
  const channel = yield call(groupsChannel);

  try {
    while (true) {
      const { value } = yield take(groupsChannel);
      yield put(actions.syncGroupsSuccess(value));
    }
  }
  finally {
    if(yield cancelled()) {
      channel.close();
    }
  }
}

export default function* groupsRootSaga() {
  while (yield take(actions.types.SYNC.START)) {
    const syncTask = yield fork(syncGroups);

    yield take(actions.types.SYNC.STOP);

    yield cancel(syncTask);
  }
}

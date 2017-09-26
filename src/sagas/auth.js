import { put, call, takeEvery, fork, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import firebase from '../firebase';

import * as actions from '../actions/auth';

const provider = new firebase.auth.GoogleAuthProvider();

function login(provider) {
  return firebase.auth().signInWithPopup(provider);
}

function logout() {
  return firebase.auth().signOut();
}

function authChannel() {
  const auth = firebase.auth();

  const channel = eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(
      user => emit({ user }),
      error => emit({ error })
    );

    return unsubscribe;
  })

  return channel;
}

function* loginSaga() {
  try {
    const data = yield call(login, provider);
    yield put(actions.loginSuccess(data.user));
  }
  catch (error) {
    yield put(actions.loginFailure(error));
  }

}

function* logoutSaga() {
  try {
    const data = yield call(logout);
    yield put(actions.logoutSuccess(data));
  }
  catch (error) {
    yield put(actions.logoutFailure(error));
  }
}

function* syncUserSaga() {
  const channel = yield call(authChannel);

  while(true) {
    const { user, error } = yield take(channel);

    if (user) {
      yield put(actions.syncUserSuccess(user));
    } else if (error) {
      yield put(actions.syncUserFailure(error));
    } else {
      yield put(actions.syncUserSuccess(null));
    };
  }
}

export default function* authRootSaga() {
  yield fork(syncUserSaga);

  yield [
    takeEvery(actions.types.LOGIN.REQUEST, loginSaga),
    takeEvery(actions.types.LOGOUT.REQUEST, logoutSaga)
  ];
}

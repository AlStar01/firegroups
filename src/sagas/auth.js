import { eventChannel } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';

import firebase from '../firebase';

import * as actions from '../actions/auth';

const provider = new firebase.auth.GoogleAuthProvider();

function login(provider) {
  return firebase.auth().signInWithPopup(provider);
}

function* loginSaga() {
  const data = yield call(login, provider);
  yield put(actions.loginSuccess(data.user));
}

export default function* loginRootSaga() {
  yield [
    takeEvery(actions.types.LOGIN.REQUEST, loginSaga)
  ];
}

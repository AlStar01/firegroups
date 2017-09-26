import { all } from 'redux-saga/effects';

import auth from './auth';
import groups from './groups';

export default function* root() {
  yield all([
    auth(),
    groups()
  ]);
}

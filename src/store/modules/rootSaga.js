import {all} from 'redux-saga/effects';

import contys from './contys/sagas';

export default function* rootSaga() {
  return yield all([contys]);
}

import { all } from 'redux-saga/effects';
import userReducer, { watchUsers } from './user';

function* rootSaga() {
  yield all([watchUsers()]);
}

export { rootSaga, userReducer };

import { all } from 'redux-saga/effects';
import counterReducer, { watchCounters } from './counterSlice';

function* rootSaga() {
  yield all([watchCounters()]);
}

export { rootSaga, counterReducer };

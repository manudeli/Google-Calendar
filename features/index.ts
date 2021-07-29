import { all } from 'redux-saga/effects';
import userReducer, { watchUsers } from './user';
import calendarReducer, { watchCalendars } from './calendar';

function* rootSaga() {
  yield all([watchUsers(), watchCalendars()]);
}

export { rootSaga, userReducer, calendarReducer };

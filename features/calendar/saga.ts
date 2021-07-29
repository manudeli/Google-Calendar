import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CalendarProps } from '../../models/calendars';
import { db } from '../../utils/firebase';
import { getMyCalendars, successMyCalendars } from './slice';

export function* watchCalendars() {
  yield takeLatest(getMyCalendars.type, getMyCalendarsSaga);
}

// redux-saga
function* getMyCalendarsSaga(action) {
  const { currentUserId } = action.payload;

  try {
    const { docs } = yield call(() => {
      // 내가 엑세스 권한이 있고 동의한 캘린더만 받아오기
      return db
        .collection('calendars')
        .where(`access.${currentUserId}.isAccepted`, '==', true)
        .get();
    });
    const newMyCalendars = [] as CalendarProps[];

    console.log(docs);

    docs.forEach((doc) => {
      const newMyCalendar = { id: doc.id, ...doc.data() };
      newMyCalendars.push(newMyCalendar);
    });
    yield put(successMyCalendars(newMyCalendars));
  } catch (error) {
    console.log(error);
  }
}

import router from 'next/router';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CalendarProps } from '../../models/calendars';
import { db } from '../../utils/firebase';
import {
  createCalendar,
  failureCreateCalendar,
  getMyCalendars,
  successCreateCalendar,
  successMyCalendars,
} from './slice';

export function* watchCalendars() {
  yield takeLatest(getMyCalendars.type, getMyCalendarsSaga);
  yield takeLatest(createCalendar.type, createCalendarSaga);
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

function* createCalendarSaga(action) {
  const { title, description, currentUserId } = action.payload;
  const newAccessOfCalender = {};
  newAccessOfCalender[currentUserId] = { isAccepted: true, permissionType: 3 };
  const newCalendar = {
    title,
    description,
    color: 1,
    owner: currentUserId,
    access: newAccessOfCalender,
  };

  try {
    const ref = yield call(() => db.collection('calendars').add(newCalendar));
    const newUpdate = {};
    newUpdate[`calendars.${ref.id}`] = {
      isDisplay: true,
    };
    yield call(() =>
      db.collection('users').doc(currentUserId).update(newUpdate)
    );
    yield put(successCreateCalendar());
    yield setTimeout(() => {
      router.replace('/calendar');
    }, 4000);
  } catch (error) {
    yield put(failureCreateCalendar());
  }
}

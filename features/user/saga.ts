import { ProfileProps } from './../../models/users';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { db } from '../../utils/firebase';
import {
  getAllUserProfiles,
  successAllUserProfiles,
  setIsDisplayCalendar,
  failureIsDisplayCalendar,
  getUserProfile,
  successGetUserProfile,
} from './slice';

export function* watchUsers() {
  yield takeLatest(getAllUserProfiles.type, getAllUserProfilesSaga);
  yield takeLatest(getUserProfile.type, getUserProfileSaga);
  yield takeLatest(setIsDisplayCalendar.type, setIsDisplayCalendarSaga);
}

// redux-saga
function* getAllUserProfilesSaga() {
  try {
    const { docs } = yield call(() =>
      db.collection('users').orderBy('order', 'asc').get()
    );
    const newAllUserProfiles = [] as ProfileProps[];
    docs.forEach((doc) => {
      const newUserProfile = { id: doc.id, ...doc.data() };
      delete newUserProfile.order;
      newAllUserProfiles.push(newUserProfile);
    });
    yield put(successAllUserProfiles(newAllUserProfiles));
  } catch (error) {
    console.log(error);
  }
}

function* getUserProfileSaga(action) {
  const { currentUserId } = action.payload;
  console.log(currentUserId);

  try {
    let updatedProfile = {};
    yield call(() =>
      db
        .doc(`users/${currentUserId}`)
        .get()
        .then((doc) => {
          updatedProfile = { id: doc.id, ...doc.data() };
        })
    );
    console.log(updatedProfile);

    yield put(successGetUserProfile(updatedProfile));
  } catch (error) {
    console.log(error);
  }
}

function* setIsDisplayCalendarSaga(action) {
  const { currentUserId, calendarId, newIsDisplay } = action.payload;
  const updateData = {} as ProfileProps;
  updateData[`calendars.${calendarId}`] = { isDisplay: newIsDisplay };

  try {
    yield call(() =>
      db.collection('users').doc(`${currentUserId}`).update(updateData)
    );
  } catch (error) {
    yield put(failureIsDisplayCalendar({ calendarId, newIsDisplay }));
  }
}

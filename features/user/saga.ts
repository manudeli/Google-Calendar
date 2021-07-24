import { IUserProfile } from './../../models/users';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { db } from '../../utils/firebase';
import { getAllUserProfiles, login, successAllUserProfiles } from './slice';

export function* watchUsers() {
  yield takeLatest(getAllUserProfiles.type, getAllUserProfilesSaga);
  yield takeLatest(login.type, loginSaga);
}

// redux-saga
function* getAllUserProfilesSaga() {
  try {
    const { docs } = yield call(() =>
      db.collection('users').orderBy('order', 'asc').get()
    );
    const newAllUserProfiles = [] as IUserProfile[];
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

function* loginSaga() {
  yield put(login());
}

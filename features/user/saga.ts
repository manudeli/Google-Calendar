import { IUserProfile } from './../../models/users';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { db } from '../../utils/firebase';
import {
  getAllUserProfiles,
  login,
  setAllUserProfiles,
  setLoading,
} from './slice';

export function* watchUsers() {
  yield takeLatest(getAllUserProfiles.type, getAllUserProfilesSaga);
  yield takeLatest(login.type, loginSaga);
}

// redux-saga
export function* getAllUserProfilesSaga() {
  yield put(setLoading(true));
  const newAllUserProfiles = [] as IUserProfile[];
  try {
    const { docs } = yield call(() => db.collection('users').get());
    docs.forEach((doc) =>
      newAllUserProfiles.push({ id: doc.id, ...doc.data() } as IUserProfile)
    );
  } catch (error) {
    console.log(error);
  }
  yield put(setAllUserProfiles(newAllUserProfiles));
  yield put(setLoading(false));
}
function* loginSaga() {
  yield put(login());
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

export function* watchCounters() {
  yield takeLatest(increment.type, incrementSaga); // 모든 INCREMENT_ASYNC 액션을 처리
  yield takeEvery(decrement.type, decrementSaga); // 가장 마지막으로 디스패치된 DECREMENT_ASYNC 액션만을 처리
}

// helper
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// redux-saga
function* incrementSaga() {
  console.log('incremented');
  yield delay(100); // 1초를 기다립니다.
  yield put(incrementCancel());
  console.log('incrementedCanceled');
}
function* decrementSaga() {
  console.log('decremented');
  yield delay(1000); // 1초를 기다립니다.
}

// redux-toolkit
export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementCancel: (state) => {
      state.value -= 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementCancel } = counterSlice.actions;

export default counterSlice.reducer;

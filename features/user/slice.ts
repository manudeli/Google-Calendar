import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../models/redux';
import { CalendarId, UserId } from '../../models/types';
import { ProfileProps } from './../../models/users';

// redux-toolkit
const initialState: IUserState = {
  isLoading: false,
  profiles: [],
  profile: {
    id: '',
    email: '',
    username: '',
    imageUrl: '',
    calendars: {},
    order: 0,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUserProfiles: (state) => {
      state.isLoading = true;
      state.profiles = [];
    },
    successAllUserProfiles: (
      state,
      { payload }: PayloadAction<ProfileProps[]>
    ) => {
      state.isLoading = false;
      state.profiles = payload;
    },
    logout: (state) => {
      state.profile = initialState.profile;
    },
    login: (state, { payload }) => {
      state.profile = payload;
    },
    getUserProfile: (
      state,
      { payload }: PayloadAction<{ currentUserId: string }>
    ) => {
      console.log('hi');

      state.isLoading = true;
    },
    successGetUserProfile: (state, { payload }) => {
      state.isLoading = false;

      console.log(payload);

      state.profile = payload;
    },

    setIsDisplayCalendar: (
      state,
      {
        payload,
      }: PayloadAction<{
        calendarId: CalendarId;
        currentUserId: UserId;
        newIsDisplay: boolean;
      }>
    ) => {
      state.profile.calendars[payload.calendarId].isDisplay =
        !state.profile.calendars[payload.calendarId].isDisplay;
    },
    successIsDisplayCalendar: (state, { payload }) => {},
    failureIsDisplayCalendar: (
      state,
      {
        payload,
      }: PayloadAction<{ calendarId: CalendarId; newIsDisplay: boolean }>
    ) => {
      // 실패시 이미 바꿨던 isDisplay 원상태로 복귀
      state.profile.calendars[payload.calendarId].isDisplay =
        !payload.newIsDisplay;
    },
  },
});

export const {
  getAllUserProfiles,
  successAllUserProfiles,
  logout,
  login,
  getUserProfile,
  successGetUserProfile,

  setIsDisplayCalendar,
  successIsDisplayCalendar,
  failureIsDisplayCalendar,
} = userSlice.actions;

export default userSlice.reducer;

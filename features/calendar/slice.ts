import { ICalendarState } from '../../models/redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarProps } from '../../models/calendars';
import { UserId, ViewType } from '../../models/types';

const initialState: ICalendarState = {
  isLoading: false,
  isOpenLeftNav: true,
  currentPeriod: { start: 0, end: 0 },
  calendars: [],
  viewType: ViewType.month,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    clearCalendar: (state) => {
      state.isOpenLeftNav = initialState.isOpenLeftNav;
      state.isLoading = initialState.isLoading;
      state.currentPeriod = initialState.currentPeriod;
      state.calendars = initialState.calendars;
      state.viewType = initialState.viewType;
    },
    setIsOpenLeftNav: (state) => {
      state.isOpenLeftNav = !state.isOpenLeftNav;
    },

    getMyCalendars: (
      state,
      { payload }: PayloadAction<{ currentUserId: UserId }>
    ) => {
      state.isLoading = true;
      state.calendars = [];
    },
    successMyCalendars: (
      state,
      { payload }: PayloadAction<CalendarProps[]>
    ) => {
      state.isLoading = false;
      state.calendars = payload;
    },

    createCalendar: (
      state,
      {
        payload,
      }: PayloadAction<{
        title: string;
        description: string;
        currentUserId: string;
      }>
    ) => {
      state.isLoading = true;
    },
    successCreateCalendar: (state) => {
      state.isLoading = false;
    },
    failureCreateCalendar: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  clearCalendar,
  setIsOpenLeftNav,
  getMyCalendars,
  successMyCalendars,

  createCalendar,
  successCreateCalendar,
  failureCreateCalendar,
} = calendarSlice.actions;

export default calendarSlice.reducer;

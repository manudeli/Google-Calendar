import { ICalendarState } from '../../models/redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarProps } from '../../models/calendars';
import { UserId, ViewType } from '../../models/types';

const initialState: ICalendarState = {
  currentPeriod: { start: 0, end: 0 },
  calendars: [],
  viewType: ViewType.month,
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    getMyCalendars: (
      state,
      { payload }: PayloadAction<{ currentUserId: UserId }>
    ) => {
      state.calendars = [];
    },
    successMyCalendars: (
      state,
      { payload }: PayloadAction<CalendarProps[]>
    ) => {
      state.calendars = payload;
    },
  },
});

export const { getMyCalendars, successMyCalendars } = calendarSlice.actions;

export default calendarSlice.reducer;

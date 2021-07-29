import router from 'next/router';
import React, { useEffect } from 'react';
import { Calendar } from '../../components/Calendar';
import { clearCalendar, getMyCalendars } from '../../features/calendar/slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface Props {}

const CalendarPage = (props: Props) => {
  const currentUserId = useAppSelector((state) => state.user.profile.id);

  if (!currentUserId) router.replace('/');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCalendar());
    dispatch(getMyCalendars({ currentUserId }));
  }, []);

  return (
    <div>
      <Calendar />
    </div>
  );
};

export default CalendarPage;

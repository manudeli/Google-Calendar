import { css } from '@emotion/react';
import React, { useState } from 'react';
import { setIsDisplayCalendar } from '../../features/user/slice';
import { CalendarProps } from '../../models/calendars';
import { CalendarId } from '../../models/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import theme from '../../styles/theme';
import CheckBox from '../UI/CheckBox';

interface Props {
  calendar: CalendarProps;
  isDisplay: boolean;
}

const MyCalendarListItem = ({ calendar, isDisplay }: Props) => {
  const currentUserId = useAppSelector((state) => state.user.profile.id);
  const dispatch = useAppDispatch();

  const clickListItemHandle = (calendarId: CalendarId) => {
    dispatch(
      setIsDisplayCalendar({
        currentUserId,
        calendarId,
        newIsDisplay: !isDisplay,
      })
    );
  };

  return (
    <li
      css={css`
        display: flex;
        gap: 4px;
        align-items: center;
        cursor: pointer;
        padding: 6px 17px;
        &:hover {
          background: ${theme.color.grey[200]};
        }
        border-radius: ${theme.radiusSize.small};
      `}
      onClick={() => clickListItemHandle(calendar.id)}
    >
      <CheckBox checked={isDisplay} />
      <div>{calendar.title}</div>
    </li>
  );
};

export default MyCalendarListItem;

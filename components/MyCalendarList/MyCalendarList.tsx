import { css } from '@emotion/react';
import React from 'react';
import { CalendarProps } from '../../models/calendars';
import { useAppSelector } from '../../store/hooks';
import theme from '../../styles/theme';
import Loader from '../UI/Loading/Loader';
import MyCalendarListItem from './MyCalendarListItem';

interface Props {
  title: string;
  calendars: CalendarProps[];
}

const MyCalendarList = ({ title, calendars }: Props) => {
  const currentUserCalendars = useAppSelector(
    (state) => state.user.profile.calendars
  );

  return (
    <div>
      <div
        css={css`
          display: flex;
          text-align: left;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div>{title}</div>
        <span className="material-icons">expand_more</span>
      </div>

      <ul css={css``}>
        {calendars.length === 0 && (
          <>
            <Loader />
          </>
        )}
        {calendars.map((calendar) => (
          <MyCalendarListItem
            key={calendar.id}
            calendar={calendar}
            isDisplay={currentUserCalendars[calendar.id].isDisplay}
          />
        ))}
      </ul>
    </div>
  );
};

export default MyCalendarList;

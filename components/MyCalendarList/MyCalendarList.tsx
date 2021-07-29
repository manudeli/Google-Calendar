import { css } from '@emotion/react';
import router from 'next/router';
import React, { useState } from 'react';
import { CalendarProps } from '../../models/calendars';
import { useAppSelector } from '../../store/hooks';
import theme from '../../styles/theme';
import IconButton from '../UI/IconButton';
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      css={css`
        min-width: 240px;
      `}
    >
      <div
        css={css`
          padding: 0 16px;
          display: flex;
          text-align: left;
          align-items: center;
          justify-content: space-between;
          border-radius: ${theme.radiusSize.small};
          height: 32px;
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background: ${theme.color.grey[100]};
          }
          &:active {
            background: ${theme.color.grey[400]};
          }
        `}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>{title}</div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <IconButton
            tooltip="Add other calendars"
            icon="add"
            onClick={() => router.replace(`/calendar/settings/createcalendar`)}
          />
          {isOpen ? (
            <span className="material-icons">expand_less</span>
          ) : (
            <span className="material-icons">expand_more</span>
          )}
        </div>
      </div>
      {isOpen && (
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
      )}
    </div>
  );
};

export default MyCalendarList;

import { css } from '@emotion/react';
import React, { useState } from 'react';
import { setIsDisplayCalendar } from '../../features/user/slice';
import { CalendarProps } from '../../models/calendars';
import { CalendarId } from '../../models/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import theme from '../../styles/theme';
import CheckBox from '../UI/CheckBox';
import IconButton from '../UI/IconButton';

interface Props {
  calendar: CalendarProps;
  isDisplay: boolean;
}

const MyCalendarListItem = ({ calendar, isDisplay }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

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
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        padding: 0 17px;
        &:hover {
          background: ${theme.color.grey[200]};
        }
        border-radius: ${theme.radiusSize.small};
      `}
      onClick={() => clickListItemHandle(calendar.id)}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        css={css`
          padding: 6px 0;
          display: flex;
          align-items: center;
        `}
      >
        <CheckBox checked={isDisplay} />
        <div>{calendar.title}</div>
      </div>
      {isHovered && (
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <IconButton
            size={23}
            icon="close"
            tooltip={`Unsubscribe from ${calendar.title}`}
          />
          <IconButton
            size={23}
            icon="more_vert"
            tooltip={`Options for ${calendar.title}`}
          />
        </div>
      )}
    </li>
  );
};

export default MyCalendarListItem;

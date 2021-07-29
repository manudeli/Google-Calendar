import Image from 'next/image';

import { useAppSelector } from '../../store/hooks';
import { css } from '@emotion/react';
import Button from '../UI/Button';
import MyCalendarList from '../MyCalendarList/MyCalendarList';
import theme from '../../styles/theme';

function LeftNavigation() {
  const myCalendars = useAppSelector((state) => state.calendar.calendars);

  return (
    <div
      css={css`
        background: white;
        padding-right: 16px;
        border-right: 1px solid ${theme.color.grey[200]};
      `}
    >
      <div
        css={css`
          padding: 16px 8px;
        `}
      >
        <Button variant="rounded" shadow>
          <Image width={32} height={32} src="/assets/create.png" /> Create
        </Button>
      </div>

      <MyCalendarList title={'My calendars'} calendars={myCalendars} />
    </div>
  );
}

export default LeftNavigation;

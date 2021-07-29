import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { css } from '@emotion/react';
import Button from '../UI/Button';
import MyCalendarList from '../MyCalendarList/MyCalendarList';

function LeftNavigation() {
  const myCalendars = useAppSelector((state) => state.calendar.calendars);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div
      css={css`
        background: white;
        padding-right: 16px;
      `}
    >
      <div
        css={css`
          padding: 16px 8px;
        `}
      >
        <Button
          variant="rounded"
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          <Image width={32} height={32} src="/assets/create.png" /> Create
        </Button>
      </div>

      <MyCalendarList title={'My calendars'} calendars={myCalendars} />
    </div>
  );
}

export default LeftNavigation;

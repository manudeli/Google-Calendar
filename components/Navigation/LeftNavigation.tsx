import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { css } from '@emotion/react';

function LeftNavigation() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div
      css={css`
        background: white;
      `}
    >
      <button
        onClick={() => {
          setIsOpenModal(true);
        }}
        className="flex items-center justify-center gap-3 h-12 p-4 text-sm font-normal font-medium bg-white rounded-full shadow-md"
      >
        <Image width={32} height={32} src="/assets/create.png" /> Create
      </button>
    </div>
  );
}

export default LeftNavigation;

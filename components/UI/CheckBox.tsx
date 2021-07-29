import { css } from '@emotion/react';
import React, { useState } from 'react';
import theme from '../../styles/theme';

interface Props {
  checked?: boolean;
  color?: string;
  onClick?: () => {} | void;
}

const CheckBox = ({ checked, color = 'grey', onClick = () => {} }: Props) => {
  const clickCheckBoxHandle = () => {
    onClick();
  };

  return (
    <div
      onClick={clickCheckBoxHandle}
      css={css`
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        background: white;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: inset 0 0 0
          ${checked ? `32px ${color}` : `0 ${theme.color.grey[300]}`};
        border: 2px solid ${color};
        transition: all 0.2s ease-in-out;
        margin-right: 6px;

        &:hover {
          border-color: ${theme.color.grey[300]};
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${checked ? 100 : 0}px;
          height: ${checked ? 100 : 0}px;
          border-radius: 6px;
          background: ${color};
          transition: all 0.2s ease-in-out;
        `}
      >
        {checked && (
          <span
            css={css`
              font-size: 1rem;
              color: white;
              font-weight: 900;
            `}
            className="material-icons"
          >
            done
          </span>
        )}
      </div>
    </div>
  );
};

export default CheckBox;

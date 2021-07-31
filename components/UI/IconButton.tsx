import { css } from '@emotion/react';
import { MouseEvent } from 'react';
import theme from '../../styles/theme';

import Tooltip from './Tooltip';

interface IconButtonProps {
  icon: any;
  tooltip?;
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';
  onClick?;
  color?: 'white' | 'black' | 'yellow';
  isChecked?;
  size?;
}

function IconButton({
  icon,
  tooltip,
  tooltipPlacement = 'bottom',
  onClick,
  color = 'black',
  size = 40,
}: IconButtonProps) {
  const clickButtonStopPropagation = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <Tooltip
      text={tooltip}
      placement={tooltipPlacement}
      textColor="white"
      bg="#000000a4"
    >
      <button
        css={css`
          background: 0;
          border: 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          transition: all 0.2s;
          cursor: pointer;
          margin: 2px;
          &:hover {
            background: ${theme.color.grey[200]};
          }
        `}
        onClick={(e) => {
          if (onClick) onClick();
          clickButtonStopPropagation(e);
        }}
      >
        <span
          css={css`
            color: ${theme.color.grey[800]};
          `}
          className={`material-icons`}
        >
          {icon}
        </span>
      </button>
    </Tooltip>
  );
}

export default IconButton;

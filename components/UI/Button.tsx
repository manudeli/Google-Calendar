import { css } from '@emotion/react';
import theme from '../../styles/theme';

interface ButtonProps {
  color?: 'primary' | 'secondary';
  onClick?;
  materialIcon?;
  children;
  variant?: 'default' | 'outlined' | 'rounded';
  fill?;
  shadow?;
}

function Button({
  color,
  onClick,
  materialIcon,
  children,
  variant,
  fill,
  shadow,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      css={css`
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.4rem 0.8rem;
        gap: 0.8rem;
        border-radius: ${variant === 'rounded'
          ? '999px'
          : theme.radiusSize.small};
        transition: all 0.2s;
        opacity: 1;
        width: ${fill ? '100%' : ''};
        border: ${variant === 'outlined'
          ? `1px solid ${theme.color.grey[200]}`
          : ''};
        background: ${color === 'primary' && variant !== 'outlined'
          ? `${theme.color.blue[600]}`
          : 'none'};
        box-shadow: ${shadow ? `0 3px 6px -1px ${theme.color.grey[500]}` : ''};

        &:hover {
          opacity: 0.8;
        }
      `}
      className={`
    

     ${
       variant === 'outlined'
         ? 'border'
         : `${color === 'primary' ? 'bg-blue-600' : ''} text-white`
     }
    `}
    >
      {materialIcon && (
        <span
          css={css`
            margin-right: 0.2rem;
          `}
          className="material-icons"
        >
          {materialIcon}
        </span>
      )}
      {children}
    </button>
  );
}

export default Button;

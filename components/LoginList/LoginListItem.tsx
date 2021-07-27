import { css } from '@emotion/react';
import theme from '../../styles/theme';
import { ProfileImage } from '../UI/ProfileImage';

function LoginListItem({ item, onClick }) {
  return (
    <li
      css={css`
        background: #fff;
        cursor: pointer;
        border-radius: ${theme.radiusSize.small};
        transition: all 0.2s;
        overflow: hidden;
        &:hover {
          background: #94828211;
        }
      `}
      onClick={onClick}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          padding: 10px;
        `}
      >
        <ProfileImage imageSrc={item.imageUrl} />
        <div
          css={css`
            margin-left: 8px;
            text-align: left;
          `}
        >
          <h6
            css={css`
              font-weight: 700;
              font-size: 1rem;
            `}
          >
            {item.username}
          </h6>
          <p
            css={css`
              font-size: 0.9rem;
              color: gray;
            `}
          >
            {item.email}
          </p>
        </div>
      </div>
      <div
        css={css`
          border-bottom: 1px solid ${theme.color.grey[200]};
        `}
      ></div>
    </li>
  );
}

export default LoginListItem;

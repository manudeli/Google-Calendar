import { css } from '@emotion/react';

interface Props {
  imageSrc: string;
  size?: number;
}

export const ProfileImage = ({ imageSrc, size = 50 }: Props) => {
  return (
    <div
      css={css`
        display: inline-flex;
        border-radius: 50%;
        overflow: hidden;
      `}
    >
      <img
        css={css`
          width: ${size}px;
          height: ${size}px;
          object-fit: cover;
        `}
        src={imageSrc}
      />
    </div>
  );
};

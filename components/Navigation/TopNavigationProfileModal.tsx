import router from 'next/router';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import LoginList from '../LoginList/LoginList';
import ProfileImage from '../UI/ProfileImage';
import Button from '../UI/Button';
import { css } from '@emotion/react';
import theme from '../../styles/theme';
import { logout } from '../../features/user/slice';

interface Props {
  closeHandle;
}

export const TopNavigationProfileModal = ({ closeHandle }: Props) => {
  const currentUserProfile = useAppSelector((state) => state.user.profile);
  const dispatch = useAppDispatch();

  const clickSignOutHandle = () => {
    closeHandle();
    dispatch(logout());
    router.replace('/');
  };

  return (
    <div
      css={css`
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        right: 8px;
        background: white;
        padding: 8px 4px;
        border-radius: ${theme.radiusSize.small};
        border: 1px solid ${theme.color.grey[200]};
        box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.08);
        z-index: 10;
      `}
    >
      <ProfileImage imageSrc={currentUserProfile.imageUrl} size={80} />
      <br />
      <div>{currentUserProfile.username}</div>
      <div>{currentUserProfile.email}</div>
      <br />
      <LoginList hideLoggedInUser={true} />
      <br />
      <Button
        onClick={clickSignOutHandle}
        variant="outlined"
        color="primary"
        fill
      >
        Sign out
      </Button>
      <div>Privacy Policy · Terms of Service</div>
    </div>
  );
};

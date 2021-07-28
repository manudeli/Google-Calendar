import router from 'next/router';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import LoginListItem from './LoginListItem';
import { useEffect } from 'react';

import { getAllUserProfiles, login } from '../../features/user/slice';
import { css } from '@emotion/react';

interface LoginListProps {
  hideLoggedInUser?: boolean;
}

function LoginList({ hideLoggedInUser = false }: LoginListProps) {
  const userProfiles = useAppSelector((state) => state.user.profiles);
  const loggedInUserProfile = useAppSelector((state) => state.user.profile);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUserProfiles());
  }, []);

  const clickUserProfile = (userProfile) => {
    dispatch(login(userProfile));
    router.replace('/calendar');
  };

  return (
    <ul
      css={css`
        min-width: 280px;
      `}
    >
      {userProfiles
        .filter((userProfile) => {
          if (hideLoggedInUser)
            return userProfile.id !== loggedInUserProfile.id;
          return true;
        })
        .map((userProfile) => (
          <LoginListItem
            key={userProfile.id}
            item={userProfile}
            onClick={() => clickUserProfile(userProfile)}
          />
        ))}
    </ul>
  );
}

export default LoginList;

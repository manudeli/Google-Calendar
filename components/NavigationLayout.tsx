import LeftNavigation from './Navigation/LeftNavigation';
import TopNavigation from './Navigation/TopNavigation';
import { useAppSelector } from '../store/hooks';
import { css } from '@emotion/react';
import theme from '../styles/theme';
import router from 'next/router';

function NavigationLayout({ children }) {
  const isloggedIn = useAppSelector((state) => state.user.profile.id);
  const isCalendarPage = router.pathname === '/calendar';
  console.log(isloggedIn);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
      `}
    >
      {isloggedIn && <TopNavigation />}
      <div
        css={css`
          display: flex;
          flex: 1;
        `}
      >
        {isloggedIn && isCalendarPage && <LeftNavigation />}
        <div
          css={css`
            flex: 1;
          `}
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default NavigationLayout;

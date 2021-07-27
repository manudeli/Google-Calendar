import LeftNavigation from './Navigation/LeftNavigation';
import TopNavigation from './Navigation/TopNavigation';
import { useAppSelector } from '../store/hooks';
import { css } from '@emotion/react';
import theme from '../styles/theme';

function NavigationLayout({ children }) {
  const isloggedIn = useAppSelector((state) => state.user.profile.id);
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
        className="flex flex-1"
      >
        {isloggedIn && <LeftNavigation />}
        <div
          css={css`
            flex: 1;
          `}
        >
          <div className={`${isloggedIn ? 'mail-list' : ''}  overflow-y-auto`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationLayout;

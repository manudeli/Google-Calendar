import { css } from '@emotion/react';
import Head from 'next/head';
import router from 'next/router';
import GoogleLogo from '../components/GoogleLogo';
import LoginList from '../components/LoginList/LoginList';
import LoadingOverlay from '../components/UI/Loading/LoadingOverlay';
import { useAppSelector } from '../store/hooks';
import theme from '../styles/theme';

export default function LoginPage() {
  const uid = useAppSelector((state) => state.user.profile.id);

  if (uid) {
    router.replace('/calendar');
    return <LoadingOverlay />;
  }

  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Head>
        <title>Google Calendar {`${''}`}</title>
        <meta
          name="description"
          content="Google Calendar Cloning by Jonghyeon"
        />
      </Head>
      <div
        css={css`
          border: 1px solid ${theme.color.grey[200]};
          padding: 20px;
          background: white;
          border-radius: ${theme.radiusSize.large};
          width: 100vw;
          max-width: 300px;
        `}
      >
        <GoogleLogo />
        <div
          css={css`
            font-size: 1.4rem;
          `}
        >
          로그인
        </div>
        <div
          css={css`
            font-size: 0.8rem;
            color: ${theme.color.grey[600]};
            margin: 16px 0;
          `}
        >
          로그인하신 사용자를 선택하세요
        </div>
        <LoginList />
      </div>
    </div>
  );
}

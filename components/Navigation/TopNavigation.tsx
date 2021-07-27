import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import LoginList from '../LoginList/LoginList';
import ProfileImage from '../UI/ProfileImage';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';
import { TopNavigationProfileModal } from './TopNavigationProfileModal';
import { css } from '@emotion/react';
import theme from '../../styles/theme';

function TopNavigation() {
  const userProfile = useAppSelector((state) => state.user.profile);

  const [openProfile, setOpenProfile] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const checkOutsideClick = (e) => {
      if (profileRef && profileRef.current) {
        const outsideClick = !profileRef.current.contains(e.target);
        if (outsideClick) {
          setOpenProfile(false);
        }
      }
    };
    document.addEventListener('click', checkOutsideClick);
    return () => {
      document.removeEventListener('click', checkOutsideClick);
    };
  }, []);

  return (
    <nav
      css={css`
        display: flex;
        align-items: center;
        background: white;
        border-bottom: 1px solid ${theme.color.grey[200]};
        padding: 6px;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <IconButton icon="menu" tooltip="Main menu" />

        <Link href="/calendar">
          <a
            css={css`
              margin-left: 6px;
              display: flex;
              align-items: center;
              gap: 12px;
              font-size: 1.3rem;
              letter-spacing: -0.3px;
              color: ${theme.color.grey[700]};
              cursor: pointer;
            `}
          >
            <Image
              height={30}
              width={30}
              src="/assets/logo_google_calendar.png"
            />
            Calenadar
          </a>
        </Link>
      </div>
      <div
        css={css`
          flex: 1;
        `}
      ></div>
      <IconButton icon="help_outline" tooltip="Support" />
      <IconButton icon="settings" tooltip="Settings" />
      <IconButton icon="apps" tooltip="Google apps" />
      <div ref={profileRef}>
        <IconButton
          onClick={() => setOpenProfile((prev) => !prev)}
          icon={<ProfileImage imageSrc={userProfile.imageUrl} size={32} />}
          tooltip={
            <div className="text-left">
              <strong>Google Account</strong>
              <p className="opacity-80">
                {userProfile.username}
                <br />
                {userProfile.email}
              </p>
            </div>
          }
        />
        {openProfile && (
          <TopNavigationProfileModal
            closeHandle={() => {
              setOpenProfile(false);
            }}
          />
        )}
      </div>
    </nav>
  );
}

export default TopNavigation;

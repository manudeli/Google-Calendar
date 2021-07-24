import React from 'react';
import { useAppSelector } from '../store/hooks';

interface Props {
  children?;
}

export const Layout = ({ children }: Props) => {
  const isLoggedIn = useAppSelector((state) => state.user.profile.id);

  return (
    <div>
      <header>
        <nav>Header</nav>
      </header>
      <div>{children}</div>
    </div>
  );
};

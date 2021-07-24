import React from 'react';
import { useAppSelector } from '../store/hooks';
import styled from '@emotion/styled';

interface Props {
  children?;
}

export const Layout = ({ children }: Props) => {
  const isLoggedIn = useAppSelector((state) => state.user.profile.id);

  return (
    <div>
      <header>
        <TopNavigation>Header</TopNavigation>
      </header>

      <div>{children}</div>
    </div>
  );
};

const TopNavigation = styled.nav`
  padding: 16px;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => props.theme.color.blue[100]};
`;

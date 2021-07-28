import React from 'react';
import styled from '@emotion/styled';
import Loader from './Loader';

interface LoadingProps {
  isLoading?: boolean;
}

function LoadingOverlay({ isLoading = true }: LoadingProps) {
  return (
    <LoadingContainer isLoading={isLoading}>
      <Loader />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div<LoadingProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.isLoading ? 'flex' : 'none')};
`;

export default LoadingOverlay;

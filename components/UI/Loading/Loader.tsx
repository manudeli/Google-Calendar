import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface Props {}

const Loader = ({}: Props) => {
  return <StyledLoader />;
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoader = styled.div`
  border: ${({ theme }) => '5px solid ' + theme.color.bluegrey[600]};
  border-top: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spin} 1.5s linear infinite;
`;

export default Loader;

import { Global, css } from '@emotion/react';
import theme from './theme';

const style = css`
  html {
    text-align: center;
    background: #fafafa;
    font-size: ${theme.rootSize.small};
    ${theme.mediaQuery.laptop} {
      font-size: ${theme.rootSize.large};
    }
  }
  * {
    color: #1a1a1a;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

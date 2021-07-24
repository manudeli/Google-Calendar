import { AppProps } from 'next/app';
// redux
import { store, persistor } from '../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// emotion
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
// components
import { Layout } from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

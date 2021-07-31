import { AppProps } from 'next/app';
// redux
import { store, persistor } from '../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// emotion
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';
import NavigationLayout from '../components/NavigationLayout';
import Head from 'next/head';
// components

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Google Calendar {`${''}`}</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="/assets/logo_google_calendar.png" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <NavigationLayout>
              <Component {...pageProps} />
            </NavigationLayout>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

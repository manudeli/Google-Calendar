import Head from 'next/head';
import LoginList from '../components/LoginList/LoginList';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Google Calendar</title>
      </Head>
      <LoginList />
    </div>
  );
}

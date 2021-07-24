import Head from 'next/head';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getAllUserProfiles } from '../features/user/slice';

export default function Home() {
  const userProfiles = useAppSelector((state) => state.user.profiles);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUserProfiles());
  }, []);

  return (
    <div>
      <Head>
        <title>Google Calendar</title>
      </Head>

      <span>{JSON.stringify(userProfiles)}</span>
    </div>
  );
}

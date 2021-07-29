import { css } from '@emotion/react';
import router from 'next/router';
import React, { FormEvent, useState } from 'react';
import Button from '../../../components/UI/Button';
import Loader from '../../../components/UI/Loading/Loader';
import TextArea from '../../../components/UI/TextArea';
import TextInput from '../../../components/UI/TextInput';
import { createCalendar } from '../../../features/calendar/slice';
import { getUserProfile } from '../../../features/user/slice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

interface Props {}

const CreateCalendarPage = ({}: Props) => {
  const dispatch = useAppDispatch();
  const ownerEmail = useAppSelector((state) => state.user.profile.email);
  const isLoading = useAppSelector((state) => state.calendar.isLoading);
  const currentUserId = useAppSelector((state) => state.user.profile.id);

  const [form, setForm] = useState({
    title: '',
    description: '',
    currentUserId: `${currentUserId}`,
  });

  const changeForm = (e) => {
    const newForm = { ...form };
    newForm[e.target.id] = e.target.value;
    setForm(newForm);
  };

  const clickSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (form.title.length === 0) {
      return alert('Title is needed');
    }
    e.preventDefault();
    dispatch(createCalendar(form));
    setTimeout(() => {
      dispatch(getUserProfile({ currentUserId }));
    }, 2000);
  };

  return (
    <div
      css={css`
        text-align: left;
        display: flex;
      `}
    >
      <div
        css={css`
          width: 100px;
        `}
      ></div>
      <div>
        Create new Calendar
        <form onSubmit={(e) => clickSubmit(e)}>
          <TextInput
            id="title"
            value={form.title}
            onChange={(e) => changeForm(e)}
            placeholder="Name"
          />
          <br />
          <TextArea
            id="description"
            value={form.description}
            onChange={(e) => changeForm(e)}
            placeholder="Description"
          />
          <br />
          Owner
          <br />
          {ownerEmail}
          <Button variant="default" color="primary">
            Create calendar
          </Button>
        </form>
        {isLoading && <Loader />}
      </div>
    </div>
  );
};

export default CreateCalendarPage;

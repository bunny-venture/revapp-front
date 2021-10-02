import React from 'react';
import { Button } from 'antd';
import { Title } from '../../components/Elements/Typography/Title';
import { useDispatch } from 'react-redux';
import { useLoginSlice } from '../LoginPage/slice';

export function AnnouncementPage() {
  const dispatch = useDispatch();
  const { actions } = useLoginSlice();

  const onButtonClick = evt => {
    dispatch(actions.doLogout());
  };
  return (
    <>
      <Title xl2 bold color="#4B5563">
        Announcement
      </Title>
      <Button onClick={onButtonClick}>Log out</Button>
    </>
  );
}

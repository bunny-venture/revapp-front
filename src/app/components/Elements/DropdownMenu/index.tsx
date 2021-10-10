import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useLoginSlice } from '../../../pages/LoginPage/slice';

export function UserDropdownMenu() {
  const dispatch = useDispatch();
  const { actions } = useLoginSlice();

  const onButtonClick = evt => {
    dispatch(actions.doLogout());
  };

  return (
    <StyledDropdownMenu>
      <DropdownMenuLink onClick={onButtonClick}>Logout</DropdownMenuLink>
    </StyledDropdownMenu>
  );
}

export function AdminDropdownMenu() {
  return <></>;
}

const StyledDropdownMenu = styled.div`
  padding: 1rem;
  width: 10rem;
  position: absolute;
  top: 4rem;
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const DropdownMenuLink = styled.a`
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #4338ca;
  }
`;

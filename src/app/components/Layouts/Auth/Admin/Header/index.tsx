import React from 'react';
import styled from 'styled-components';

import { DropdownIcon } from '../../../../Elements/Icons';
import { AvatarMenImage } from '../../../../Elements/Images';
import { Text } from '../../../../Elements/Typography/Text';

export function Header() {
  return (
    <StyledHeader>
      <DropdownMenuButton>
        <AvatarMenImage />
        <Text bold>Admin</Text>
        <DropdownIcon />
      </DropdownMenuButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  z-index: 1;
`;

const DropdownMenuButton = styled.div`
  padding: 0.3rem 0.625rem;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  & > * + * {
    margin-left: 0.5rem;
  }
`;

import React from 'react';
import styled from 'styled-components';

import AvatarImage from '../../../../assets/images/MEN.png';

export function Avatar() {
  return <StyledAvatar src={AvatarImage} alt="Avatar" />;
}

const StyledAvatar = styled.img`
  border-radius: 9999px;
  border: 1px solid gray;
  height: 2.4rem;
  width: 2.4rem;
`;

import React from 'react';
import styled from 'styled-components';

import { Text } from '../Typography/Text';
import { Wrapper } from '../../Elements/Wrapper';

export function Choices({ groupName, indexName, letter, statement, click }) {
  return (
    <ChoicesContainer>
      <input type="radio" name={groupName} id={indexName} onClick={click} />
      <Wrapper flex>
        <LetterChoice bold>{letter}</LetterChoice>
        <Label htmlFor={indexName}>{statement}</Label>
      </Wrapper>
    </ChoicesContainer>
  );
}

const ChoicesContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;

  & > * + * {
    margin-left: 1rem;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(67, 56, 202, 1);
  }
`;

const LetterChoice = styled(Text)`
  margin-right: 0.375rem;
`;

const Label = styled.label`
  width: 90%;
  font-weight: 500;
  cursor: pointer;
`;

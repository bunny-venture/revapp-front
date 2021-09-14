import React from 'react';
import styled from 'styled-components';

import { Text } from '../../Typography/Text';

export default function Question({ body }) {
  return (
    <QuestionContainer>
      <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
        Question:
      </Text>
      <Text bold>{body}</Text>
    </QuestionContainer>
  );
}

const QuestionContainer = styled.div``;

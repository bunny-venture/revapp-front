import React from 'react';
import styled from 'styled-components';

import { Text } from '../../Typography/Text';

export default function SituationQuestion({ body }) {
  return (
    <SituationQuestionContainer>
      <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
        Situation:
      </Text>
      <Text medium>{body}</Text>
    </SituationQuestionContainer>
  );
}

const SituationQuestionContainer = styled.div``;

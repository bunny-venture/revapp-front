import React from 'react';
import styled from 'styled-components';
import { Text } from '../Typography/Text';
import { Wrapper } from '../Wrapper';

export function ReviewHeaderInfo({
  subject,
  topic,
  subtopic,
  diffLvl,
  CogLvl,
}) {
  return (
    <ReviewHeaderInfoContainer>
      <Wrapper spaceY="0.125rem">
        <Wrapper flex spaceX="1rem">
          <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
            Subject:
          </Text>
          <Text bold style={{ marginBottom: '0' }}>
            {subject}
          </Text>
        </Wrapper>
        <Wrapper flex spaceX="1rem">
          <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
            Topic:
          </Text>
          <Text bold style={{ marginBottom: '0' }}>
            {topic}
          </Text>
        </Wrapper>
        <Wrapper flex spaceX="1rem">
          <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
            Subtopic:
          </Text>
          <Text bold style={{ marginBottom: '0' }}>
            {subtopic}
          </Text>
        </Wrapper>
      </Wrapper>
      <Wrapper spaceY="0.125rem">
        <Wrapper flex spaceX="1rem">
          <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
            Level of Difficulty:
          </Text>
          <Text bold style={{ marginBottom: '0' }}>
            {diffLvl}
          </Text>
        </Wrapper>
        <Wrapper flex spaceX="1rem">
          <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
            Cognitive Level:
          </Text>
          <Text bold style={{ marginBottom: '0' }}>
            {CogLvl}
          </Text>
        </Wrapper>
      </Wrapper>
    </ReviewHeaderInfoContainer>
  );
}

const ReviewHeaderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

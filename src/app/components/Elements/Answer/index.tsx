import React from 'react';
import styled from 'styled-components';
import { Text } from '../Typography/Text';
import { Wrapper } from '../../Elements/Wrapper';

interface Props {
  correctAnswer?: string;
  correctAnswerStatement?: string;
  examineeAnswer?: string;
  examineeAnswerStatement?: string;
}

export function Answer({
  correctAnswer,
  correctAnswerStatement,
  examineeAnswer,
  examineeAnswerStatement,
}) {
  return (
    <AnswerContainer>
      {correctAnswer === examineeAnswer ? (
        <Wrapper spaceY="0.5rem">
          <Text bold style={{ marginBottom: '0' }} color="#057642">
            Correct Answer
          </Text>
          <CorrectAnswer>
            <input type="radio" />
            <Wrapper flex>
              <LetterChoice bold>{examineeAnswer}.</LetterChoice>
              <Label>{examineeAnswerStatement}</Label>
            </Wrapper>
          </CorrectAnswer>
        </Wrapper>
      ) : (
        <Wrapper spaceY="1rem">
          <Wrapper spaceY="0.5rem">
            <Text bold style={{ marginBottom: '0' }} color="#CC1016">
              Incorrect Answer
            </Text>
            <IncorrectAnswer>
              <input type="radio" />
              <Wrapper flex>
                <LetterChoice bold>{examineeAnswer}.</LetterChoice>
                <Label>{examineeAnswerStatement}</Label>
              </Wrapper>
            </IncorrectAnswer>
          </Wrapper>
          <Wrapper spaceY="0.5rem">
            <Text bold style={{ marginBottom: '0' }} color="#057642">
              Correct Answer
            </Text>
            <CorrectAnswer>
              <input type="radio" />
              <Wrapper flex>
                <LetterChoice bold>{correctAnswer}.</LetterChoice>
                <Label>{correctAnswerStatement}</Label>
              </Wrapper>
            </CorrectAnswer>
          </Wrapper>
        </Wrapper>
      )}
    </AnswerContainer>
  );
}

export function RevealAnswer({ correctAnswer, correctAnswerStatement }) {
  return (
    <>
      <CorrectAnswer>
        <input type="radio" />
        <Wrapper flex>
          <LetterChoice bold>{correctAnswer}.</LetterChoice>
          <Label>{correctAnswerStatement}</Label>
        </Wrapper>
      </CorrectAnswer>
    </>
  );
}

const AnswerContainer = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const CorrectAnswer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #d1fae5;
  box-shadow: 0 0 0 2px rgba(5, 118, 66, 1);

  & > * + * {
    margin-left: 1rem;
  }
`;

const IncorrectAnswer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #fee2e2;
  box-shadow: 0 0 0 2px rgba(204, 16, 22, 1);

  & > * + * {
    margin-left: 1rem;
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

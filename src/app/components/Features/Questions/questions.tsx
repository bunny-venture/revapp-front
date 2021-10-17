import React from 'react';
import { Wrapper } from '../../Elements/Wrapper';
import { Text } from '../../Elements/Typography/Text';
import SituationQuestion from '../../Elements/Questions/Situation';
import Question from '../../Elements/Questions/Question';
import { Choices } from '../../Elements/Choices';
import { RevealAnswer } from '../../Elements/Answer';
import styled from 'styled-components';
import { StyledCard } from '../../Elements/Card';

const Questions = ({ questions, onClick }) => {
  return (
    <>
      {questions.map((question, index) => (
        <Wrapper flex justifyContent="center" height="auto" key={index}>
          <Card style={{ margin: '1rem 0 4rem' }}>
            <CardHeader>
              <Text bold lg style={{ marginBottom: '0' }} color="#fff">
                Recap Set B - Question Set 1
              </Text>
            </CardHeader>
            <CardBody>
              <Wrapper flex flexDirection="column" spaceY="2rem">
                <>
                  <div>
                    <SituationQuestion body={question.question.situation} />
                    <Question body={question.question.question} />
                    <ChoicesGroup>
                      <Choices
                        groupName={'choices'}
                        indexName={'A'}
                        letter={'A.'}
                        statement={question.question.choiceA}
                        click={onClick}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'B'}
                        letter={'B.'}
                        statement={question.question.choiceB}
                        click={onClick}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'C'}
                        letter={'C.'}
                        statement={question.question.choiceC}
                        click={onClick}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'D'}
                        letter={'D.'}
                        statement={question.question.choiceD}
                        click={onClick}
                      />
                    </ChoicesGroup>
                  </div>
                  <Wrapper spaceY="1rem">
                    <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
                      Answer:
                    </Text>
                    <RevealAnswer
                      correctAnswer={question.question.answer}
                      correctAnswerStatement={question.question.explanation}
                    />
                  </Wrapper>
                </>
              </Wrapper>
            </CardBody>
          </Card>
        </Wrapper>
      ))}
    </>
  );
};

export default Questions;

const Card = styled(StyledCard)`
  @media (min-width: 500px) {
    width: 40rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.675rem;
    border: 1px solid #f3f4f6;
    background-color: #fff;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.625rem 1rem;
  border-radius: 0.675rem 0.675rem 0 0;
  border-bottom: 1px solid #e2e8f0;
  background-color: #4338ca;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const ChoicesGroup = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

// const Button = styled.button`
//   cursor: pointer;
//   height: 2.5rem;
//   width: 8rem;
//   background-color: #4338ca;
//   border: 1px solid #f3f4f6;
//   border-radius: 0.5rem;
//   color: #fff;
//   font-family: 'Quicksand';
//   font-size: 0.875rem;
//   font-weight: 600;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//     0 2px 4px -1px rgba(0, 0, 0, 0.06);
//
//   &:hover {
//     background-color: #4f46e5;
//   }
//
//   &:active {
//     background-color: #4338ca;
//   }
// `;
//
// const SecondaryButton = styled.button`
//   cursor: pointer;
//   height: 2.5rem;
//   width: 8rem;
//   background-color: #f3f4f6;
//   border: 1px solid #f3f4f6;
//   border-radius: 0.5rem;
//   color: #4b5563;
//   font-family: 'Quicksand';
//   font-size: 0.875rem;
//   font-weight: 600;
//
//   &:hover {
//     background-color: #e5e7eb;
//   }
//
//   &:active {
//     background-color: #f3f4f6;
//   }
// `;

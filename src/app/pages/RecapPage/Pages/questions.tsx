import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { StyledCard } from '../../../components/Elements/Card';
import { Wrapper } from '../../../components/Elements/Wrapper';
import { Text } from '../../../components/Elements/Typography/Text';
import SituationQuestion from '../../../components/Elements/Questions/Situation';
import Question from '../../../components/Elements/Questions/Question';
import { Choices } from '../../../components/Elements/Choices';
import { RevealAnswer } from '../../../components/Elements/Answer';

import { useRecapSlice } from '../slice';
import { selectQuestion } from '../slice/selectors';

export function RecapQuestionPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { actions } = useRecapSlice();

  useEffect(() => {
    // @ts-ignore
    dispatch(actions.getQuestion(params.questionId));
    // @ts-ignore
  }, [dispatch, actions, params.questionId]);

  const questionList = useSelector(selectQuestion);

  return (
    <RecapQuestionPageLayout>
      {questionList.map((question, index) => (
        <Wrapper flex justifyContent="center" height="auto" key={index}>
          <Card style={{ margin: '2rem 0 4rem' }}>
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
                        click={() => console.log('Letter A')}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'B'}
                        letter={'B.'}
                        statement={question.question.choiceB}
                        click={() => console.log('Letter B')}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'C'}
                        letter={'C.'}
                        statement={question.question.choiceC}
                        click={() => console.log('Letter C')}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'D'}
                        letter={'D.'}
                        statement={question.question.choiceD}
                        click={() => console.log('Letter D')}
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
                <Wrapper flex justifyContent="flex-end">
                  <Wrapper spaceX="1rem">
                    <SecondaryButton>Previous</SecondaryButton>
                    <Button>Next</Button>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </CardBody>
          </Card>
        </Wrapper>
      ))}
    </RecapQuestionPageLayout>
  );
}

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

const RecapQuestionPageLayout = styled.div`
  height: 100%;
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

const Button = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: 8rem;
  background-color: #4338ca;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  color: #fff;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: #4f46e5;
  }

  &:active {
    background-color: #4338ca;
  }
`;

const ChoicesGroup = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const SecondaryButton = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: 8rem;
  background-color: #f3f4f6;
  border: 1px solid #f3f4f6;
  border-radius: 0.5rem;
  color: #4b5563;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;

  &:hover {
    background-color: #e5e7eb;
  }

  &:active {
    background-color: #f3f4f6;
  }
`;

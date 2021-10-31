import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledCard } from '../../../components/Elements/Card';
import { Wrapper } from '../../../components/Elements/Wrapper';
import { Text } from '../../../components/Elements/Typography/Text';
import SituationQuestion from '../../../components/Elements/Questions/Situation';
import Question from '../../../components/Elements/Questions/Question';
import { Choices } from '../../../components/Elements/Choices';
import { Answer } from '../../../components/Elements/Answer';
import { ReviewHeaderInfo } from '../../../components/Elements/ReviewHeaderInfo';

import { useQuestionnaireSlice } from '../slice';

export function ReviewQuestionPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { actions } = useQuestionnaireSlice();

  const [revealAnswer, setRevealAnswer] = useState(false);

  useEffect(() => {
    // @ts-ignore
    dispatch(actions.getReviewQuestion(params.reviewId));
  }, []);

  return (
    <ReviewQuestionPageLayout>
      <Wrapper flex justifyContent="center" height="auto">
        <Card style={{ margin: '2rem 0 4rem' }}>
          <CardHeader>
            <Wrapper
              flex
              flexDirection="column"
              alignItems="center"
              spaceY="0.125rem"
            >
              <Text bold lg style={{ marginBottom: '0' }} color="#fff">
                Review
              </Text>
              <Text bold xs style={{ marginBottom: '0' }} color="#fff">
                Set 1/5
              </Text>
            </Wrapper>
          </CardHeader>
          <CardBody>
            <Wrapper flex flexDirection="column" spaceY="2rem">
              <ReviewHeaderInfo
                subject="Test"
                topic="Test"
                subtopic="Test"
                diffLvl="Test"
                CogLvl="Test"
              />
              <div>
                <SituationQuestion
                  body={
                    'A mother in labor told the nurse that she was expecting that her baby has no chance to survive and expects that the baby will be born dead. The mother accepts the fate of the baby and informs the nurse that when the baby is born and requires resuscitation, the mother refuses any treatment to her baby and expresses hostility toward the nurse while the pediatric team is taking care of the baby.'
                  }
                />
                <Question body={'The nurse is legally obligated to:'} />
                {revealAnswer === false ? (
                  <ChoicesGroup>
                    <Choices
                      groupName={'choices'}
                      indexName={'A'}
                      letter={'A'}
                      statement={
                        'Notify the pediatric team that the mother has refused resuscitation and any treatment for the baby and take the baby to the mother.'
                      }
                      click={() => console.log('Letter A')}
                    />
                    <Choices
                      groupName={'choices'}
                      indexName={'B'}
                      letter={'B'}
                      statement={
                        'Get a court order making the baby a ward of the court.'
                      }
                      click={() => console.log('Letter B')}
                    />
                    <Choices
                      groupName={'choices'}
                      indexName={'C'}
                      letter={'C'}
                      statement={
                        'Record the statement of the mother, notify the pediatric team, and observe carefully for signs of impaired bonding and neglect as a reasonable suspicion of child abuse.'
                      }
                      click={() => console.log('Letter C')}
                    />
                    <Choices
                      groupName={'choices'}
                      indexName={'D'}
                      letter={'D'}
                      statement={
                        'Do nothing except record the mother’s statement in the medical record.'
                      }
                      click={() => console.log('Letter D')}
                    />
                  </ChoicesGroup>
                ) : (
                  <Wrapper spaceY="2rem">
                    <Answer
                      correctAnswer={'A'}
                      correctAnswerStatement={
                        'Notify the pediatric team that the mother has refused resuscitation and any treatment for the baby and take the baby to the mother.'
                      }
                      examineeAnswer={'B'}
                      examineeAnswerStatement={
                        'Get a court order making the baby a ward of the court.'
                      }
                    />

                    <Wrapper spaceY="0.5rem">
                      <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
                        Explanation:
                      </Text>
                      <Text medium style={{ marginBottom: '0' }}>
                        {
                          'Notify the pediatric team that the mother has refused resuscitation and any treatment for the baby and take the baby to the mother.'
                        }
                      </Text>
                    </Wrapper>
                  </Wrapper>
                )}
              </div>

              <Wrapper flex justifyContent="flex-end">
                {revealAnswer === false ? (
                  <Button onClick={() => setRevealAnswer(!revealAnswer)}>
                    Submit
                  </Button>
                ) : (
                  <Wrapper spaceX="1rem">
                    <SecondaryButton>Previous</SecondaryButton>
                    <Button>Next</Button>
                  </Wrapper>
                )}
              </Wrapper>
            </Wrapper>
          </CardBody>
        </Card>
      </Wrapper>
    </ReviewQuestionPageLayout>
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

const ReviewQuestionPageLayout = styled.div`
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

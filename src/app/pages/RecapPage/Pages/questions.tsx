import React, { useEffect, useState } from 'react';
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

interface type {
  questionId: string;
}
export function RecapQuestionPage() {
  const { questionId } = useParams<type>();
  const dispatch = useDispatch();
  const { actions } = useRecapSlice();
  const recapQuestions = useSelector(selectQuestion);

  useEffect(() => {
    dispatch(actions.getQuestion(questionId));
  }, [dispatch, actions, questionId]);

  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [question, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isExamineeAnswer, setIsExamineeAnswer] = useState('');
  const [isExamineeAnswerStatement, setIsExamineeStatement] = useState('');

  //get current page
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFistQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = recapQuestions.slice(
    indexOfFistQuestion,
    indexOfLastQuestion,
  );

  // const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(() => {
    // @ts-ignore
    return setQuestions(recapQuestions);
  }, [recapQuestions]);

  const handlePrevious = () => {
    const prevQues = currentPage - 1;
    prevQues >= 0 && setCurrentPage(prevQues);
  };
  const handleNext = () => {
    const nextQues = currentPage + 1;
    nextQues <= recapQuestions.length && setCurrentPage(nextQues);
    setIsAnswerVisible(!isAnswerVisible);
    setRevealAnswer(false);
    setIsDisabled(true);
  };

  return (
    <RecapQuestionPageLayout>
      {currentQuestion.map((recapQuestion, index) => (
        <Wrapper flex justifyContent="center" height="auto" key={index}>
          <Card style={{ margin: '1rem 0 4rem' }}>
            <CardHeader>
              <Text bold lg style={{ marginBottom: '0' }} color="#fff">
                Recap Set A - Question Set 1
              </Text>
            </CardHeader>
            <CardBody>
              <Wrapper flex flexDirection="column" spaceY="2rem">
                <SituationQuestion body={recapQuestion.question.situation} />
                <Question body={recapQuestion.question.question} />
                {isAnswerVisible ? (
                  <>
                    <ChoicesGroup>
                      <Choices
                        groupName={'choices'}
                        indexName={'A'}
                        letter={'A'}
                        statement={recapQuestion.question.choiceA}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('A');
                          setIsExamineeStatement(
                            recapQuestion.question.choiceA,
                          );
                        }}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'B'}
                        letter={'B'}
                        statement={recapQuestion.question.choiceB}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('B');
                          setIsExamineeStatement(
                            recapQuestion.question.choiceB,
                          );
                        }}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'C'}
                        letter={'C'}
                        statement={recapQuestion.question.choiceC}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('C');
                          setIsExamineeStatement(
                            recapQuestion.question.choiceC,
                          );
                        }}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'D'}
                        letter={'D'}
                        statement={recapQuestion.question.choiceD}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('D');
                          setIsExamineeStatement(
                            recapQuestion.question.choiceD,
                          );
                        }}
                      />
                    </ChoicesGroup>
                    <Wrapper spaceY="1rem">
                      <Text bold color="#2A41CB" style={{ marginBottom: '0' }}>
                        Answer:
                      </Text>
                      <RevealAnswer
                        correctAnswer={recapQuestion.question.answer}
                        correctAnswerStatement={recapQuestion.question.answer}
                      />
                    </Wrapper>
                  </>
                ) : (
                  <ChoicesGroup>
                    <Choices
                      groupName={'choices'}
                      indexName={'A'}
                      letter={'A'}
                      statement={recapQuestion.question.choiceA}
                      click={() => {
                        setIsDisabled(false);
                        setIsExamineeAnswer('A');
                        setIsExamineeStatement(recapQuestion.question.choiceA);
                      }}
                    />
                    <Choices
                      groupName={'choices'}
                      indexName={'B'}
                      letter={'B'}
                      statement={recapQuestion.question.choiceB}
                      click={() => {
                        setIsDisabled(false);
                        setIsExamineeAnswer('B');
                        setIsExamineeStatement(recapQuestion.question.choiceB);
                      }}
                    />
                    <Choices
                      groupName={'choices'}
                      indexName={'C'}
                      letter={'C'}
                      statement={recapQuestion.question.choiceC}
                      click={() => {
                        setIsDisabled(false);
                        setIsExamineeAnswer('C');
                        setIsExamineeStatement(recapQuestion.question.choiceC);
                      }}
                    />
                    <Choices
                      groupName={'choices'}
                      indexName={'D'}
                      letter={'D'}
                      statement={recapQuestion.question.choiceD}
                      click={() => {
                        setIsDisabled(false);
                        setIsExamineeAnswer('D');
                        setIsExamineeStatement(recapQuestion.question.choiceD);
                      }}
                    />
                  </ChoicesGroup>
                )}
                <Wrapper flex justifyContent="flex-end">
                  {!revealAnswer ? (
                    <Button
                      disabled={isDisabled}
                      onClick={() => {
                        setRevealAnswer(!revealAnswer);
                        setIsAnswerVisible(true);
                      }}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Wrapper spaceX="1rem">
                      <SecondaryButton onClick={handlePrevious}>
                        Previous
                      </SecondaryButton>
                      <Button onClick={handleNext}>Next</Button>
                    </Wrapper>
                  )}
                </Wrapper>
              </Wrapper>
            </CardBody>
          </Card>
        </Wrapper>
      ))}
    </RecapQuestionPageLayout>
  );
}

const RecapQuestionPageLayout = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
`;

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

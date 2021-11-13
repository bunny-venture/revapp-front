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
import { Answer } from '../../../components/Elements/Answer';
import { ReviewHeaderInfo } from '../../../components/Elements/ReviewHeaderInfo';

import { useQuestionnaireSlice } from '../slice';
import { selectReviewQuestions } from '../slice/selectors';

export function ReviewQuestionPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { actions } = useQuestionnaireSlice();

  const [revealAnswer, setRevealAnswer] = useState(false);

  useEffect(() => {
    // @ts-ignore
    dispatch(actions.getReviewQuestion(params.reviewId));
  }, []);

  const reviewQuestions = useSelector(selectReviewQuestions);

  const [question, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isExamineeAnswer, setIsExamineeAnswer] = useState('');
  const [isExamineeAnswerStatement, setIsExamineeStatement] = useState('');

  //get current page
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFistQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = reviewQuestions.slice(
    indexOfFistQuestion,
    indexOfLastQuestion,
  );

  useEffect(() => {
    // @ts-ignore
    return setQuestions(reviewQuestions);
  }, [reviewQuestions]);

  const handlePrevious = () => {
    const prevQues = currentPage - 1;
    prevQues >= 0 && setCurrentPage(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentPage + 1;
    nextQues <= reviewQuestions.length && setCurrentPage(nextQues);
    setRevealAnswer(false);
    setIsDisabled(true);
  };

  return (
    <ReviewQuestionPageLayout>
      {currentQuestion.map((reviewQuestion, index) => (
        <Wrapper flex justifyContent="center" height="auto" key={index}>
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
                {/*<Text bold xs style={{ marginBottom: '0' }} color="#fff">
                  Set 1/5
                </Text>*/}
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
                  <SituationQuestion body={reviewQuestion.question.situation} />
                  <Question body={reviewQuestion.question.question} />
                  {!revealAnswer ? (
                    <ChoicesGroup>
                      <Choices
                        groupName={'choices'}
                        indexName={'A'}
                        letter={'A'}
                        statement={reviewQuestion.question.choiceA}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('A');
                          setIsExamineeStatement(
                            reviewQuestion.question.choiceA,
                          );
                        }}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'B'}
                        letter={'B'}
                        statement={reviewQuestion.question.choiceB}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('B');
                          setIsExamineeStatement(
                            reviewQuestion.question.choiceB,
                          );
                        }}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'C'}
                        letter={'C'}
                        statement={reviewQuestion.question.choiceC}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('C');
                          setIsExamineeStatement(
                            reviewQuestion.question.choiceC,
                          );
                        }}
                      />
                      <Choices
                        groupName={'choices'}
                        indexName={'D'}
                        letter={'D'}
                        statement={reviewQuestion.question.choiceD}
                        click={() => {
                          setIsDisabled(false);
                          setIsExamineeAnswer('D');
                          setIsExamineeStatement(
                            reviewQuestion.question.choiceD,
                          );
                        }}
                      />
                    </ChoicesGroup>
                  ) : (
                    <Wrapper spaceY="2rem">
                      <Answer
                        correctAnswer={reviewQuestion.question.answer}
                        correctAnswerStatement={reviewQuestion.question.answer}
                        examineeAnswer={isExamineeAnswer}
                        examineeAnswerStatement={isExamineeAnswerStatement}
                      />

                      <Wrapper spaceY="0.5rem">
                        <Text
                          bold
                          color="#2A41CB"
                          style={{ marginBottom: '0' }}
                        >
                          Explanation:
                        </Text>
                        <Text medium style={{ marginBottom: '0' }}>
                          {reviewQuestion.question.explanation}
                        </Text>
                      </Wrapper>
                    </Wrapper>
                  )}
                </div>

                <Wrapper flex justifyContent="flex-end">
                  {!revealAnswer ? (
                    <Button
                      disabled={isDisabled}
                      onClick={() => setRevealAnswer(!revealAnswer)}
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

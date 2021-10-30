import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../../components/Elements/Card';
import { Wrapper } from '../../../components/Elements/Wrapper';
import { Text } from '../../../components/Elements/Typography/Text';
import { Title } from '../../../components/Elements/Typography/Title';
import { useDispatch, useSelector } from 'react-redux';
import { useQuestionnaireSlice } from '../slice';
import { selectLoading, selectReviewQuestionaire } from '../slice/selectors';
import ReviewQuestionnaireTable from '../../../components/Features/Questionnaire/reviewQuestionnaireTable';

export function Review() {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const { actions } = useQuestionnaireSlice();
  const isLoading = useSelector(selectLoading);
  const reviewQuestionaire = useSelector(selectReviewQuestionaire);

  const handleClick = () => {
    dispatch(actions.getReviewQuestionnaire());
    setIsVisible(true);
  };

  return (
    <>
      <ReviewPageLayout>
        <Title xl2 bold color="#4B5563">
          Review
        </Title>
        <Wrapper flex justifyContent="center" height="auto">
          <Card style={{ margin: '0 0 4rem' }}>
            <CardHeader>
              <Text bold lg style={{ marginBottom: '0' }} color="#fff">
                Generate Review Questionaire
              </Text>
            </CardHeader>
            <CardBody>
              <Wrapper spaceY="2rem">
                <Wrapper spaceY="0.625rem">
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Number of Questions: </Text>
                    <Text bold>{10} </Text>
                  </Wrapper>
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Type: </Text>
                    <Text bold>{'Review'} </Text>
                  </Wrapper>
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Question type: </Text>
                    <Select>
                      <option value="" hidden>
                        Select Question Type
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </Select>
                  </Wrapper>
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Subject: </Text>
                    <Select>
                      <option value="" hidden>
                        Select Subject
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </Select>
                  </Wrapper>
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Topic: </Text>
                    <Select>
                      <option value="" hidden>
                        Select Topic
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </Select>
                  </Wrapper>
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Sub-topic: </Text>
                    <Select>
                      <option value="" hidden>
                        Select Sub-topic
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </Select>
                  </Wrapper>
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Difficulty: </Text>
                    <Select>
                      <option value="" hidden>
                        Select Difficulty
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </Select>
                  </Wrapper>
                  <Wrapper flex justifyContent="space-between">
                    <Text bold>Level of Cognitive: </Text>
                    <Select>
                      <option value="" hidden>
                        Select Level of Cognitive
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </Select>
                  </Wrapper>
                </Wrapper>
                <Wrapper flex justifyContent="space-between">
                  <Text bold>Available Question: </Text>
                  <Text bold>{50}</Text>
                </Wrapper>
                <Wrapper flex justifyContent="flex-end">
                  <StyledButton onClick={handleClick}>Generate</StyledButton>
                </Wrapper>
              </Wrapper>
            </CardBody>
          </Card>
        </Wrapper>
        {isVisible ? (
          <ReviewPageLayout>
            <Wrapper>
              <Card style={{ width: '100%' }}>
                <CardBody>
                  <ReviewQuestionnaireTable
                    dataSource={reviewQuestionaire}
                    loading={isLoading}
                  />
                </CardBody>
              </Card>
            </Wrapper>
          </ReviewPageLayout>
        ) : null}
      </ReviewPageLayout>
    </>
  );
}

const Card = styled(StyledCard)`
  @media (min-width: 500px) {
    width: 30rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0.675rem;
    border: 1px solid #f3f4f6;
    background-color: #fff;
  }
`;

const ReviewPageLayout = styled.div`
  height: 100%;
`;

const CardHeader = styled.div`
  padding: 0.875rem 1rem;
  border-radius: 0.675rem 0.675rem 0 0;
  border-bottom: 1px solid #e2e8f0;
  background-color: #4338ca;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const Select = styled.select`
  padding: 0.375rem 0.625rem;
  outline: none;
  cursor: pointer;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
  font-family: 'Quicksand';
  font-size: 0.875rem;
  font-weight: 600;

  &:focus {
    box-shadow: 0 0 0 2px rgba(67, 56, 202, 1);
  }
`;

const StyledButton = styled.button`
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

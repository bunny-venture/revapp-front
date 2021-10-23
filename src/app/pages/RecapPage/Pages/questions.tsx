import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'antd';

import Questions from '../../../components/Features/Questions/questions';
import PagePagination from '../../../components/Common/Pagination/pagination';

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

  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const handleAnswer = () => {
    setIsAnswerVisible(true);
  };

  const [setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1);

  //get current page
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFistQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestion = questionList.slice(
    indexOfFistQuestion,
    indexOfLastQuestion,
  );

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  useEffect(() => {
    // @ts-ignore
    return setQuestions(questionList);
  }, [setQuestions, questionList]);

  return (
    <RecapQuestionPageLayout>
      <Questions questions={currentQuestion} onClick={handleAnswer} />
      <Row justify="center">
        <PagePagination
          defaultCurrent={currentPage}
          defaultPageSize={questionsPerPage}
          total={questionList.length}
          onChange={paginate}
        />
      </Row>
    </RecapQuestionPageLayout>
  );
}

const RecapQuestionPageLayout = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
`;

// const Card = styled(StyledCard)`
//   @media (min-width: 500px) {
//     width: 40rem;
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
//       0 2px 4px -1px rgba(0, 0, 0, 0.06);
//     border-radius: 0.675rem;
//     border: 1px solid #f3f4f6;
//     background-color: #fff;
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 0.625rem 1rem;
//   border-radius: 0.675rem 0.675rem 0 0;
//   border-bottom: 1px solid #e2e8f0;
//   background-color: #4338ca;
// `;

// const CardBody = styled.div`
//   padding: 1rem;
// `;

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
// const ChoicesGroup = styled.div`
//   & > * + * {
//     margin-top: 1rem;
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

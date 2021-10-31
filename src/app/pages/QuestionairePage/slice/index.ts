import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { questionnaireSaga } from './saga';
import { QuestionnaireState } from './types';

export const initialState: QuestionnaireState = {
  isLoading: false,
  typeReview: 'review',
  typeExam: 'exam',
  isGenerate: false,
  questionCount: 0,
  difficulty: '',
  cognitive: '',
  typeId: '',
  subjectId: '',
  topicId: '',
  subtopicId: '',
  reviewQuestionnaire: {
    results: [
      {
        id: '',
      },
    ],
  },
  reviewId: '',
  reviewQuestionList: {
    questions: [
      {
        question: {
          situation: '',
          question: '',
          choiceA: '',
          choiceB: '',
          choiceC: '',
          choiceD: '',
          answer: '',
          explanation: '',
        },
      },
    ],
  },
  examQuestionnaire: {
    results: [
      {
        id: '',
      },
    ],
  },
};

const slice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = true;
    },
    getReviewQuestionnaire(state) {
      state.isLoading = true;
      state.reviewQuestionnaire.results = [
        {
          id: '',
        },
      ];
    },
    setReviewQuestionnaire(state, action: PayloadAction<any>) {
      const reviewQuestionnaire = action.payload;
      state.reviewQuestionnaire = reviewQuestionnaire;
      state.isLoading = false;
    },
    getReviewQuestion(state, action: PayloadAction<any>) {
      state.reviewId = action.payload;
      state.reviewQuestionList = {
        questions: [
          {
            question: {
              situation: '',
              question: '',
              choiceA: '',
              choiceB: '',
              choiceC: '',
              choiceD: '',
              answer: '',
              explanation: '',
            },
          },
        ],
      };
    },
    setReviewQuestions(state, action: PayloadAction<any>) {
      const reviewQuestion = action.payload;
      state.reviewQuestionList = reviewQuestion;
    },
    getExamQuestionnaire(state) {
      state.isLoading = true;
      state.examQuestionnaire.results = [
        {
          id: '',
        },
      ];
    },
    setExamQuestionnaire(state, action: PayloadAction<any>) {
      const examQuestionnaire = action.payload;
      state.examQuestionnaire = examQuestionnaire;
      state.isLoading = false;
    },
  },
});

export const { actions: questionnaireActions } = slice;

export const useQuestionnaireSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: questionnaireSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useQuestionnaireSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

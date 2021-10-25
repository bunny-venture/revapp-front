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
  reviewQuestion: {
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
    getReviewQuestion(state) {
      state.isLoading = true;
      state.reviewQuestion.results = [
        {
          id: '',
        },
      ];
    },
    setReviewQuestion(state, action: PayloadAction<any>) {
      const reviewQuestion = action.payload;
      state.reviewQuestion = reviewQuestion;
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

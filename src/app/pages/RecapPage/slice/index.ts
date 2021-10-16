import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { recapSaga } from './saga';
import { RecapState } from './types';

export const initialState: RecapState = {
  isLoading: false,
  isSuccess: false,
  voucher: '',
  type: 'recap',
  questionnaire: {
    results: [
      {
        id: '',
      },
    ],
  },
  questionList: {
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
  questionId: '',
};

const slice = createSlice({
  name: 'recap',
  initialState,
  reducers: {
    doVoucher(state, action: PayloadAction<any>) {},
    loading: (state, action) => {
      state.isLoading = true;
    },
    voucherSuccess(state, action) {
      state.isSuccess = true;
    },
    getQuestionnaire(state) {
      state.questionnaire.results = [
        {
          id: '',
        },
      ];
    },
    setQuestionnaire(state, action: PayloadAction<any>) {
      const questionnaire = action.payload;
      state.questionnaire = questionnaire;
    },
    getQuestion(state, action: PayloadAction<any>) {
      state.questionId = action.payload;
      state.questionList = {
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
    loadQuestion(state, action: PayloadAction<any>) {
      const question = action.payload;
      state.questionList = question;
    },
    questionId(state, action: PayloadAction<any>) {
      state.questionId = action.payload;
    },
  },
});

export const { actions: recapActions, reducer } = slice;

export const useRecapSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: recapSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useRecapSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
// import { RecapState } from './types';

const selectSlice = (state: RootState) => state.recap || initialState;

// export const selectRecap = createSelector([selectSlice], RecapState => RecapState);

export const selectQuestionType = createSelector(
  [selectSlice],
  RecapState => RecapState.type,
);

export const selectIsLoading = createSelector(
  [selectSlice],
  RecapState => RecapState.isLoading,
);

export const selectQuestionnaire = createSelector(
  [selectSlice],
  RecapState => RecapState.questionnaire.results,
);

export const selectQuestion = createSelector(
  [selectSlice],
  RecapState => RecapState.questionList.questions,
);

export const selectQuestionId = createSelector(
  [selectSlice],
  RecapState => RecapState.questionId,
);

export const selectCode = createSelector(
  [selectSlice],
  RecapState => RecapState.voucher,
);

export const selectVoucherIsValid = createSelector(
  [selectSlice],
  RecapState => RecapState.isValid,
);
export const selectError = createSelector(
  [selectSlice],
  RecapState => RecapState.isError,
);

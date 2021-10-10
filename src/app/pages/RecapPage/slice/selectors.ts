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

export const selectQuestionnaire = createSelector(
  [selectSlice],
  RecapState => RecapState.questionnaire.results,
);

export const selectQuestion = createSelector(
  [selectSlice],
  RecapState => RecapState.question,
);

export const selectQuestionId = createSelector(
  [selectSlice],
  RecapState => RecapState.questionId,
);

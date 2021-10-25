import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.questionnaire || initialState;

export const selectLoading = createSelector(
  [selectSlice],
  QuestionnaireState => QuestionnaireState.isLoading,
);

export const selectQuestionnaire = createSelector(
  [selectSlice],
  state => state,
);

export const selectReview = createSelector(
  [selectSlice],
  QuestionnaireState => QuestionnaireState.typeReview,
);

export const selectReviewQuestionaire = createSelector(
  [selectSlice],
  QuestionnaireState => QuestionnaireState.reviewQuestion.results,
);

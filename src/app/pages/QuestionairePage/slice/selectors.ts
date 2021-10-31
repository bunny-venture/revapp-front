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

export const selectExam = createSelector(
  [selectSlice],
  QuestionnaireState => QuestionnaireState.typeExam,
);

export const selectReviewQuestionaire = createSelector(
  [selectSlice],
  QuestionnaireState => QuestionnaireState.reviewQuestionnaire.results,
);

export const selectReviewId = createSelector(
  [selectSlice],
  QuestionnaireState => QuestionnaireState.reviewId,
);

export const selectExamQuestionaire = createSelector(
  [selectSlice],
  QuestionnaireState => QuestionnaireState.examQuestionnaire.results,
);

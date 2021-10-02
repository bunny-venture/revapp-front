import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { RecapState } from './types';

const selectSlice = (state: RootState) => state.recap || initialState;

export const selectRecap = createSelector([selectSlice], state => state);

export const selectQuestions = createSelector(
  [selectSlice],
  RecapState => RecapState.questions.results,
);

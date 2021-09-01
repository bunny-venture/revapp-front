import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.questionnaire || initialState;

export const selectQuestionnaire = createSelector(
  [selectSlice],
  state => state,
);

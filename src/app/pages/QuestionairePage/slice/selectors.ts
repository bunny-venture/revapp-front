import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.questionaire || initialState;

export const selectQuestionaire = createSelector([selectSlice], state => state);

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.recap || initialState;

export const selectRecap = createSelector([selectSlice], state => state);

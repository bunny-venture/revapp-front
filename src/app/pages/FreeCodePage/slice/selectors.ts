import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.voucher || initialState;

export const selectVoucher = createSelector([selectSlice], state => state);

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
// import { LoginState } from './types';

const selectSlice = (state: RootState) => state.login || initialState;

export const selectLogin = createSelector([selectSlice], state => state);

export const selectIsLoading = createSelector(
  [selectSlice],
  LoginState => LoginState.isLoading,
);

export const selectIsLoggedIn = createSelector(
  [selectSlice],
  LoginState => LoginState.isLoggedIn,
);

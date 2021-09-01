import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { signupSaga } from './saga';
import { SignupState } from './types';

export const initialState: SignupState = {
  isLoading: false,
  isSignUp: false,
  email: '',
  username: '',
  password: '',
};

const slice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    doSignUp(state, action: PayloadAction<any>) {},
    loading: (state, action) => {
      state.isLoading = true;
    },
    signUpSuccess(state, action) {
      state.isSignUp = true;
    },
  },
});

export const { actions: signupActions, reducer } = slice;

export const useSignupSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: signupSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSignupSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

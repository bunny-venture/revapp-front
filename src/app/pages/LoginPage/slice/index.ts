import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginSaga } from './saga';
import { LoginState } from './types';

export const initialState: LoginState = {
  email: '',
  password: '',
  isLoggedIn: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    doLogin(state, action: PayloadAction<any>) {},
    loading(state, action) {
      state.isLoading = true;
    },
    loginSuccess(state, action) {
      state.isLoggedIn = true;
    },
  },
});

export const { actions: loginActions, reducer } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

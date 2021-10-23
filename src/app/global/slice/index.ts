import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { globalSaga } from './saga';
import { GlobalState } from './types';

export const initialState: GlobalState = {
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    saveMyProfile(state, actions: PayloadAction<any>) {
      state.isLoggedIn = actions.payload;
    },
    clearMyProfile(state) {
      state.isLoggedIn = false;
    },
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: globalActions, reducer } = slice;

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: globalSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useGlobalSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

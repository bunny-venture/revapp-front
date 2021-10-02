import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { recapSaga } from './saga';
import { RecapState } from './types';

export const initialState: RecapState = {
  isLoading: false,
  isSuccess: false,
  voucher: '',
  questions: {
    results: [
      {
        id: '',
      },
    ],
  },
};

const slice = createSlice({
  name: 'recap',
  initialState,
  reducers: {
    doVoucher(state, action: PayloadAction<any>) {},
    loading: (state, action) => {
      state.isLoading = true;
    },
    voucherSuccess(state, action) {
      state.isSuccess = true;
    },
    getQuestionnaire(state) {
      state.questions.results = [
        {
          id: '',
        },
      ];
    },
    setQuestionnaire(state, action: PayloadAction<any>) {
      const questions = action.payload;
      state.questions = questions;
    },
  },
});

export const { actions: recapActions, reducer } = slice;

export const useRecapSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: recapSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useRecapSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

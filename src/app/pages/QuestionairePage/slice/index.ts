import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { questionnaireSaga } from './saga';
import { QuestionnaireState } from './types';

export const initialState: QuestionnaireState = {
  isLoading: false,
  isGenerate: false,
  questionCount: 0,
  difficulty: '',
  cognitive: '',
  typeId: '',
  subjectId: '',
  topicId: '',
  subtopicId: '',
};

const slice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    generate(state, action: PayloadAction<any>) {},
    loading(state, action) {
      state.isLoading = true;
    },
    generateSuccess(state, action) {
      state.isGenerate = true;
    },
  },
});

export const { actions: questionnaireActions } = slice;

export const useQuestionnaireSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: questionnaireSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useQuestionnaireSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

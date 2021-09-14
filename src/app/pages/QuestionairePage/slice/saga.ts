import { call, put, takeLatest } from 'redux-saga/effects';
import { questionnaireActions as actions } from '.';
import { API, LOADING_PREFIX, POST_REQUEST } from '../../../../utils/constant';
import { request, RequestOptions } from '../../../../utils/request';

function* doGenerate(payload) {
  try {
    yield put(actions.loading(LOADING_PREFIX.Review));
    const response = yield call(
      request,
      API.QUESTIONNAIRE,
      RequestOptions(POST_REQUEST, { ...payload.payload }, true),
    );
    yield put(actions.generateSuccess(response));
    return true;
  } catch (error) {
    return false;
  }
}

export function* questionnaireSaga() {
  yield takeLatest(actions.generate.type, doGenerate);
}

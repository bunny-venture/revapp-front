import { call, put, takeLatest } from 'redux-saga/effects';
import { API, GET_REQUEST, LOADING_PREFIX, POST_REQUEST } from 'utils/constant';
import { request, RequestOptions } from 'utils/request';
import { recapActions as actions } from '.';

function* doVoucher(payload) {
  try {
    const response = yield call(
      request,
      API.VOUCHER,
      RequestOptions(POST_REQUEST, { ...payload.payload }, true),
    );
    yield put(actions.voucherSuccess(response));
    return true;
  } catch (error) {
    return false;
  } finally {
    yield put(actions.loading(LOADING_PREFIX.Recap));
  }
}

function* doGetQuestions() {
  try {
    const response = yield call(
      request,
      `${API.QUESTIONNAIRE}`,
      RequestOptions(GET_REQUEST, {}, true),
    );
    yield put(actions.setQuestionnaire(response));
    return true;
  } catch (error) {
    return false;
  }
}

export function* recapSaga() {
  yield takeLatest(actions.doVoucher.type, doVoucher);
  yield takeLatest(actions.getQuestionnaire.type, doGetQuestions);
}

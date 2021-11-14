import { call, put, takeLatest, select } from 'redux-saga/effects';
import { API, GET_REQUEST, LOADING_PREFIX, POST_REQUEST } from 'utils/constant';
import { request, RequestOptions } from 'utils/request';
import { recapActions as actions } from '.';
import querystring from 'querystring';
import { selectCode, selectQuestionId, selectQuestionType } from './selectors';

function* doVoucher() {
  try {
    yield put(actions.loading(LOADING_PREFIX.Recap));
    const voucherCode: string = yield select(selectCode);
    const response = yield call(
      request,
      `${API.VOUCHER}/${voucherCode}`,
      RequestOptions(POST_REQUEST, {}, true),
    );
    yield put(actions.setVoucher(response));
    return true;
  } catch (error) {
    return false;
  }
}

function* doGetQuestionnaire() {
  try {
    yield put(actions.loading(LOADING_PREFIX.Recap));
    const type: string = yield select(selectQuestionType);
    const requestBody = {
      type,
    };
    const query = querystring.stringify(requestBody);
    const response = yield call(
      request,
      `${API.QUESTIONNAIRE}?${query}`,
      RequestOptions(GET_REQUEST, {}, true),
    );
    yield put(actions.setQuestionnaire(response));
    return true;
  } catch (error) {
    return false;
  }
}

function* doGetQuestion() {
  try {
    yield put(actions.loading(LOADING_PREFIX.Recap));
    const questionId: string = yield select(selectQuestionId);
    const response = yield call(
      request,
      `${API.QUESTIONNAIRE}/${questionId}`,
      RequestOptions(GET_REQUEST, {}, true),
    );
    yield put(actions.loadQuestion(response));
    return true;
  } catch (error) {
    return false;
  } finally {
    yield put(actions.loading(LOADING_PREFIX.Recap));
  }
}

export function* recapSaga() {
  yield takeLatest(actions.getVoucher.type, doVoucher);
  yield takeLatest(actions.getQuestionnaire.type, doGetQuestionnaire);
  yield takeLatest(actions.getQuestion.type, doGetQuestion);
}

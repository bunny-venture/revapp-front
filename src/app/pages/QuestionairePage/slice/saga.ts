import { call, put, takeLatest, select } from 'redux-saga/effects';
import { questionnaireActions as actions } from '.';
import { API, GET_REQUEST } from '../../../../utils/constant';
import { request, RequestOptions } from '../../../../utils/request';
import querystring from 'querystring';
import { selectReview } from './selectors';

function* generateReview() {
  try {
    const type: string = yield select(selectReview);
    const requestBody = {
      type,
    };
    const query = querystring.stringify(requestBody);
    const response = yield call(
      request,
      `${API.QUESTIONNAIRE}?${query}`,
      RequestOptions(GET_REQUEST, {}, true),
    );
    yield put(actions.setReviewQuestion(response));
  } catch (error) {
    return false;
  }
}

export function* questionnaireSaga() {
  yield takeLatest(actions.getReviewQuestion.type, generateReview);
}

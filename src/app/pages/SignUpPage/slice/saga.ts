import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { signupActions as actions } from '.';
import { API, LOADING_PREFIX, POST_REQUEST } from 'utils/constant';
import { request, RequestOptions } from 'utils/request';

function* doSignUp(signUpPayload) {
  try {
    yield put(actions.loading(LOADING_PREFIX.Signup));
    const response = yield call(
      request,
      API.AUTH_REGISTER,
      RequestOptions(POST_REQUEST, { ...signUpPayload.payload }),
    );
    yield put(actions.signUpSuccess(response));
    return true;
  } catch (error) {
    return false;
  } finally {
    yield put(actions.loading(LOADING_PREFIX.Signup));
  }
}

export function* signupSaga() {
  yield takeLatest(actions.doSignUp.type, doSignUp);
}

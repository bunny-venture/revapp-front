import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { API, LOADING_PREFIX, POST_REQUEST } from 'utils/constant';
import { request, RequestOptions } from 'utils/request';

function* login(loginPayload) {
  try {
    yield put(actions.loading(LOADING_PREFIX.Login));
    const response = yield call(
      request,
      `${API.AUTH_LOGIN}`,
      RequestOptions(POST_REQUEST, { ...loginPayload.payload }, false),
    );
    yield put(actions.loginSuccess(response));
    return true;
  } catch (error) {
    return false;
  }
}

export function* loginSaga() {
  yield takeLatest(actions.doLogin.type, login);
}

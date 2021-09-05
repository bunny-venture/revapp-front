import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { API, LOADING_PREFIX, POST_REQUEST } from 'utils/constant';
import { request, RequestOptions } from 'utils/request';
import AccountService from '../../../../services/accountService';

function* login(loginPayload) {
  try {
    yield put(actions.loading(LOADING_PREFIX.Login));
    const response = yield call(
      request,
      API.AUTH_LOGIN,
      RequestOptions(POST_REQUEST, { ...loginPayload.payload }),
    );
    AccountService.saveAuth(response);
    yield put(actions.loginSuccess(response));
    return true;
  } catch (error) {
    return false;
  }
}

export function* loginSaga() {
  yield takeLatest(actions.doLogin.type, login);
}

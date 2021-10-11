import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions as actions } from '.';
import { API, LOADING_PREFIX, POST_REQUEST, ROUTE } from 'utils/constant';
import { request, RequestOptions } from 'utils/request';
import AccountService from '../../../../services/accountService';
import history from 'utils/history';

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

function* doLogout() {
  AccountService.clearAuth();
  history.push(ROUTE.LOGIN);
  return false;
}

export function* loginSaga() {
  yield takeLatest(actions.doLogin.type, login);
  yield takeLatest(actions.doLogout.type, doLogout);
}

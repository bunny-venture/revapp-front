import { call, put, select, takeLatest } from 'redux-saga/effects';
import { API, POST_REQUEST } from 'utils/constant';
import { request, RequestOptions } from 'utils/request';
import { recapActions as actions } from '.';

function* doVoucher({ payload }) {
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
  }
}

export function* recapSaga() {
  yield takeLatest(actions.doVoucher.type, doVoucher);
}

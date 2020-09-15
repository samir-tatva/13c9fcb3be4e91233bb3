import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_COMMON_START, GET_CATLOGE_SUCCESS, GET_COMMON_FAIL, GET_BRANDS_START, GET_BRANDS_SUCCESS, GET_BRANDS_FAIL, GET_CMS_SUCCESS, GET_CMS_START, GET_FAQS_START, GET_FAQS_FAIL, GET_FAQS_SUCCESS, GET_DYNAMIC_PAGE_START, GET_DYNAMIC_PAGE_FAIL, GET_DYNAMIC_PAGE_SUCCESS,
} from '../constants/actionTypes';
import {
  serviceGetCMS
} from '../services/common';

function* getCMS(data) {
  const response = yield serviceGetCMS(data.payload);
  const responseData = response.data;
  if (responseData && responseData.status) {
    if (responseData.status[0] !== 'ok') {
      yield put({
        type: GET_COMMON_FAIL,
        error: responseData.message,
      });
    } else {
      yield put({
        type: GET_CMS_SUCCESS,
        data: responseData.data,
      });
    }
  }else{
    yield put({
      type: GET_COMMON_FAIL,
      error: [`Something Went Wrong`],
    });
  }
}


export function* getCMSWatcher() {
  yield takeLatest(GET_CMS_START, getCMS);
}

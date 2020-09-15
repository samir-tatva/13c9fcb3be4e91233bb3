import { all } from 'redux-saga/effects';
import {
  getCMSWatcher
} from './common';

export default function* rootSaga() {
  yield all([
    getCMSWatcher(),
  ]);
}

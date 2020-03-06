import { all, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from '../actions/types';

export function* workerSaga() {
    console.log("worker do teste funciona")
}

export function* teste() {
  yield takeEvery(ActionTypes.TESTE_SAGA, workerSaga);
}
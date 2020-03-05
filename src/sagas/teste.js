import { all, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from '../actions/types';

function* workerSaga() {
    alert("o spawn funciona");
}

export default function* teste() {
  yield takeEvery(ActionTypes.TESTE_SAGA, workerSaga);
}
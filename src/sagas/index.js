import { all, fork, takeEvery } from 'redux-saga/effects';
import teste from './teste'
import * as ActionTypes from "../actions/types";


function* workerSaga() {
    alert("saga")
}

export default function* rootSaga() {
    console.log("aaa")
    yield takeEvery(ActionTypes.TESTE_SAGA, workerSaga);
//   yield all([
//       fork(teste)
//   ]);
}

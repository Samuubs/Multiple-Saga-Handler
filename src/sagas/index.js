import { all, fork, takeEvery, spawn, take } from 'redux-saga/effects';
import {teste, workerSaga} from './teste'
import * as ActionTypes from "../actions/types";

import { testeScript } from './testeScript'


function* workerSagaRoot() {
    console.log("worker saga do root")
}

export default function* rootSaga() {
    // yield takeEvery(ActionTypes.TESTE_SAGA, workerSagaRoot);
    yield takeEvery(teste, workerSaga);
    yield fork(testeScript);


    // yield all([
    //     fork(teste)
    // ]);

}

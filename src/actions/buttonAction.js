import * as actionTypes from './types';

export const showAlert = () => async dispatch => {
    console.log("bbbbb")
    dispatch({
        type: actionTypes.TESTE_SAGA
    });
}
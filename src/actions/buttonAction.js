import * as actionTypes from './types';

export const showAlert = () => async dispatch => {
    dispatch({
        type: actionTypes.TESTE_SAGA
    });
}
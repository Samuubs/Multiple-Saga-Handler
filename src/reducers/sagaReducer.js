import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
    sagaText: "O Saga ainda não vez nada"
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_TEXT_SAGA:
            return {...state, sagaText: action.payload}
    }
    return state;
}
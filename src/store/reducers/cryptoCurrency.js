import {
    GET_CRYPTOCURRENCY_SUCCESS,
    GET_CRYPTOCURRENCY_START,
    GET_CRYPTOCURRENCY_FAIL
} from '../actions/actionTypes';

const initialState = {
    data: null,
    error: null,
    loading: false,
};

export function cryptoCurrency(state = initialState, action) {
    switch (action.type) {
        case GET_CRYPTOCURRENCY_START:
            return Object.assign({}, state, {
                error: null,
                loading: true
            });
        case GET_CRYPTOCURRENCY_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                error: null,
                loading: false
            });
        case GET_CRYPTOCURRENCY_FAIL:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            });
        default:
            return state;
    }
}
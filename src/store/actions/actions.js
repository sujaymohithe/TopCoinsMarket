import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as appConstants from '../../AppConstants';

//get CryptoCurrency data start dispatch method
export const getCryptoCurrencyDataStart = () => {
    return {
        type: actionTypes.GET_CRYPTOCURRENCY_START
    };
};

//get CryptoCurrency success dispatch method
export const getCryptoCurrencyDataSuccess = (list) => {
    return {
        type: actionTypes.GET_CRYPTOCURRENCY_SUCCESS,
        data: list
    };
};

//get CryptoCurrency failure dispatch method
export const getCryptoCurrencyDataFailure = (error) => {
    return {
        type: actionTypes.GET_CRYPTOCURRENCY_FAIL,
        error: error
    };
};

//get CryptoCurrency data method
export const GetCryptoCurrencyData = (page = 1) => {
    const config = {
        'X-CMC_PRO_API_KEY': appConstants.API_KEY,
        'content-type': appConstants.CONTENT_TYPE
    };
    const url = `${appConstants.API_URL}?start=1&convert=USD`;
    return dispatch => {
        dispatch(getCryptoCurrencyDataStart());
        axios.get(url, {
            headers: config
        }).then(response => {
            dispatch(getCryptoCurrencyDataSuccess(response.data));
        }).catch(error => {
            dispatch(getCryptoCurrencyDataFailure(error.message));
        });
    };
};
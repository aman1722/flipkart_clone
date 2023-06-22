import * as actionTypes from '../constants/productConstants';
import axios from 'axios';


const Url = "http://localhost:8080"

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${Url}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};
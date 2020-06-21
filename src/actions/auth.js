import axios from 'axios';
import { returnErrors } from './messages';

import { USER_LOGING, USER_LOGED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';

export const UserRead = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOGING });

    const token = getState().auth.token;
    const conf = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token) {
        conf.headers['Authorization'] = `Token ${token}`;
    }

    await axios.get('http://127.0.0.1:8000/api/auth/user', conf)
    .then(res => {
        dispatch({
            type: USER_LOGED,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        })
    });
}

export const login = (username, password) => async dispatch => {
    const conf = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password });

    await axios.post('http://127.0.0.1:8000/api/auth/login', body, conf)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: LOGIN_FAIL
        })
    });
}

export const UserLogout = () => async (dispatch, getState) => {

    const token = getState().auth.token;
    const conf = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if(token) {
        conf.headers['Authorization'] = `Token ${token}`;
    }

    await axios.post('http://127.0.0.1:8000/api/auth/logout/',null, conf)
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    });
}


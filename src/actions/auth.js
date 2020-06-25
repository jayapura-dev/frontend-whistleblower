import axios from 'axios';
import { returnErrors } from './messages';

import { 
    USER_LOGING, 
    USER_LOGED, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL
} from './types';

export const UserRead = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOGING });

    await axios.get('http://127.0.0.1:8000/api/auth/user', tokenSet(getState))
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

export const register = ({ username, email, password }) => async dispatch => {
    const conf = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, email, password });

    await axios.post('http://127.0.0.1:8000/api/auth/register', body, conf)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });

    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: REGISTER_FAIL
        })
    });
}

export const UserLogout = () => async (dispatch, getState) => {

    await axios.post('http://127.0.0.1:8000/api/auth/logout/',null, tokenSet(getState))
    .then(res => {
        dispatch({
            type: LOGOUT_SUCCESS
        });
    }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    });
}

export const tokenSet = (getState) => {
  const token = getState().auth.token;

  const set = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  if (token) {
    set.headers['Authorization'] = `Token ${token}`;
  }

  return set;
};


import backend from '../apis/backend';
import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenSet } from './auth';

import { 
    FETCH_PENGADUAN,
    CREATE_PENGADUAN,
 } from './types';

 export const fetchPengaduan = () => async (dispatch, getState) => {
     await backend.get('/aduan/', tokenSet(getState))
     .then((res) => {
         dispatch({
             type: FETCH_PENGADUAN,
             payload: res.data
         });
     })
     .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
 }

 export const CreateAduan = (aduan) => async (dispatch, getState) => {
    await axios.post('http://127.0.0.1:8000/api/aduan/', aduan, tokenSet(getState))
    .then((res) => {
        dispatch(createMessage({ fetchPengaduan: 'Pengaduan Telah Dikirim' }));
        dispatch({
            type: CREATE_PENGADUAN,
            payload: res.data,
        });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
import backend from '../apis/backend';
import { returnErrors } from './messages';
import { tokenSet } from './auth';

import { 
    FETCH_PENGADUAN
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




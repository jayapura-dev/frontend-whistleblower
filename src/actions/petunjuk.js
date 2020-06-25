import backend from '../apis/backend';
import { returnErrors } from './messages';
import { tokenSet } from './auth';

import { 
    FETCH_PETUNJUK
 } from './types';

 export const fetchPetunjuk = () => async (dispatch, getState) => {
     await backend.get('/petunjuk/', tokenSet(getState))
     .then((res) => {
         dispatch({
             type: FETCH_PETUNJUK,
             payload: res.data
         });
     })
     .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
 }
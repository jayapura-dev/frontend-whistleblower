import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import pengaduan from './pengaduan';
import petunjuk from './petunjuk';

export default combineReducers({
    auth,
    errors,
    messages,
    pengaduan,
    petunjuk
});
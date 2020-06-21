import axios from 'axios';

const Key = 'Token 4335e3a000f06830565e9df0a724be7bfe2fec6e';

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: { 
        'Content-Type': 'multipart/form-data',
        'Authorization': Key
    }
});
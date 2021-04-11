import axios from 'axios';
export const endpoint = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
});

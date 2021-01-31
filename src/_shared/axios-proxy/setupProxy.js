import axios from 'axios';
export const endpoint = axios.create({
    baseURL: 'http://5.9.248.164:5000/api',
});

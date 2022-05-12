import axios from 'axios'
import queryString from 'query-string';
import { BASE_URL } from '../constants';
const axiosInstace = axios.create({
  baseURL: BASE_URL, 
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*', 
    // 'Access-Control-Allow-Credentials': true,
  },
  paramsSerializer: params => {
    return queryString.stringify(params, {
      encode: false,
    });
  },
})
axiosInstace.interceptors.request.use(async config => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosInstace.interceptors.response.use(
  response => {
    if (response && response.data) { 
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  },
);


export default axiosInstace
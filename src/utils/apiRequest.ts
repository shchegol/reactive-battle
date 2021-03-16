import axios from 'axios';
import { API_URL } from '@root/constants';

const apiAxios = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
});

apiAxios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response) {
      return Promise.reject(error.response.data.reason);
    }

    if (error?.request) {
      return Promise.reject(error.request.response.reason);
    }

    return Promise.reject(error);
  },
);

export default apiAxios;

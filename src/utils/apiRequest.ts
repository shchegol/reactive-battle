import axios from 'axios';
import { API_URL } from '@root/constants';
// import Cookies from 'js-cookie';
import { push } from 'connected-react-router';

const apiAxios = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: true,
});

apiAxios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response) {
      // Unauthorized
      if (error.response.status === 401) {
        push('/signin');
      }

      // Unexpected error
      if (error.response.status === 500) {
        push('/error-5xx');
      }

      return Promise.reject(error.response.data);
    }

    if (error?.request) {
      return Promise.reject(error.request.response);
    }

    return Promise.reject(error);
  },
);

export default apiAxios;

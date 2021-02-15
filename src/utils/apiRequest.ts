import axios from 'axios';
import Cookies from 'js-cookie';
import { push } from 'connected-react-router';
import { API_URL, API_VERSION } from '@root/constants';

axios.defaults.baseURL = `${API_URL}/api/${API_VERSION}`;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error?.response) {
      // Unauthorized
      if (error.response.status === 401) {
        Cookies.remove('userLogin');
        push('/signin');
      }

      // Unexpected error
      if (error.response.status === 500) {
        push('/error-5xx');
      }

      return Promise.reject(error.response.data.reason);
    }

    if (error?.request) {
      return Promise.reject(error.request.response.reason);
    }

    return Promise.reject(error);
  },
);

export default axios;

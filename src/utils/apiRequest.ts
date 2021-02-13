import axios from 'axios';
import Cookies from 'js-cookie';
import { push } from 'connected-react-router';
import { API_URL, API_VERSION } from '@root/constants';

axios.defaults.baseURL = `${API_URL}/api/${API_VERSION}`;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;
    if (response) {
      // Unauthorized
      if (response.status === 401) {
        Cookies.remove('userLogin');
        push('/signin');
      }

      // Unexpected error
      if (response.status === 500) {
        push('/error-5xx');
      }
    }

    return Promise.reject(error);
  },
);

export default axios;
